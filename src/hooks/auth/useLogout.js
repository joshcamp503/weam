// FIREBASE IMPORTS
import { auth } from '../../firebase/config'
import { signOut } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return { logout }

}