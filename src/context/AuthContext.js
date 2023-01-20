import { createContext, useReducer, useEffect } from 'react'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'


export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'SET_USER':
      console.log(action.payload)
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { ...state, userData: action.payload }
    case 'LOGOUT':
      localStorage.removeItem('user')
      return { ...state, user: null, userData: null }
    case 'ERROR':
      return { ...state, authError: action.payload }
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null,
    userData: null,
    authError: null,
    authIsReady: false
  })

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })
      unsub()
    })
  }, [])

  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}