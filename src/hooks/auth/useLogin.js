// UTILS
import { useHelpers } from '../useHelpers'
// REACT
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useProfile } from '../useProfile'
// FIREBASE IMPORTS
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
  const { initUser } = useProfile()
  const { removePassword } = useHelpers()

  const login = async (values) => {
    setError(null)
    const { email, password } = values
    const profileData = removePassword(values)
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log(res)
      dispatch({ type: 'ERROR', payload: null })
      dispatch({ type: 'LOGIN', payload: res.user })
      initUser(profileData)
    } catch (err) {
      setError(err)
      console.log(err)
      dispatch({ type: 'ERROR', payload: err })
    }

  }

  return { error, login }
}