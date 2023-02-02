// UTILS
import { useHelpers } from '../useHelpers'
// REACT
import { useAuthContext } from './useAuthContext'
import { useProfile } from '../useProfile'
// FIREBASE IMPORTS
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
  const { dispatch } = useAuthContext()
  const { initUser } = useProfile()
  const { removePassword } = useHelpers()

  const login = async (values) => {
    dispatch({ type: 'ERROR', payload: null })
    const { email, password } = values
    const profileData = removePassword(values)
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log(res)
      if (!res.user.emailVerified) {
        throw new Error("new user verification")
      } else {
        dispatch({ type: 'LOGIN', payload: res.user })
        initUser(profileData)
      }
    } catch (err) {
      console.log(err)
      dispatch({ type: 'ERROR', payload: err })
    }

  }

  return { login }
}