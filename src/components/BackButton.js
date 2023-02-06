// REACT
import { NavLink } from 'react-router-dom'
// MUI
import Link from '@mui/material/Link'
import { useAuthContext } from '../hooks/auth/useAuthContext'

const BackButton = ({ style }) => {
  const { dispatch } = useAuthContext()
  const clearError = () => {
    dispatch({ type: 'ERROR', payload: null })
  }

  return (
    <Link 
      component={NavLink} 
      sx={style ? 
        style
        :
        { my: 6 }
      } 
      to={'/'} 
      onClick={clearError} 
    >
      Back to Home
    </Link>
  )
}
export default BackButton