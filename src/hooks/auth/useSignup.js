// UTILS
import { useHelpers } from '../useHelpers'
// REACT
import { useAuthContext } from './useAuthContext'
import { useProfile } from '../useProfile'
// FIREBASE IMPORTS
import { auth } from '../../firebase/config'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useLogout } from './useLogout'
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
  const { dispatch } = useAuthContext()
  const { createUserProfile } = useProfile()
  const { removePassword } = useHelpers()
  const { logout } = useLogout()
  const navigate = useNavigate()

  const signup = async (values) => {
    // clear any errors, extract form values, remove password
    dispatch({ type: 'ERROR', payload: null })
    const { email, password } = values
    const profileData = removePassword(values)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(auth.currentUser)
      await logout()
      createUserProfile(profileData)
      const verificationError = new Error(`new user verification`)
      dispatch({ type: 'ERROR', payload: verificationError })
      navigate('/login')
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.code })
    }

  }

  return { signup }
}