// UTILS
import { useHelpers } from '../useHelpers'
// REACT
import { useAuthContext } from './useAuthContext'
import { useProfile } from '../useProfile'
// FIREBASE IMPORTS
import { auth } from '../../firebase/config'
import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const { dispatch } = useAuthContext()
  const { initUser } = useProfile()
  const { removePassword } = useHelpers()
  const navigate = useNavigate()

  const login = async (values) => {
    dispatch({ type: 'ERROR', payload: null })
    const { email, password } = values
    const profileData = removePassword(values)
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log(res)
      console.log(auth.currentUser)
      if (!res.user.emailVerified) {
        sendEmailVerification(auth.currentUser)
        throw new Error("new user verification")
      } else {
        dispatch({ type: 'LOGIN', payload: res.user })
        initUser(profileData)
        navigate("/profile")
      }
    } catch (err) {
      console.log(err)
      dispatch({ type: 'ERROR', payload: err })
    }

  }

  return { login }
}