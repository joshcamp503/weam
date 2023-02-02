// REACT
import { NavLink } from "react-router-dom"
// MUI
import Typography from "@mui/material/Typography"
import { useAuthContext } from "../hooks/auth/useAuthContext"

const NotRegistered = () => {
  const { dispatch } = useAuthContext()
  const clearError = () => {
    dispatch({ type: 'ERROR', payload: null })
  }

  return (
    <Typography 
      variant="subtitle2"
      component="div"
      gutterBottom
      sx={{ textAlign: 'left' }}
    >
      Not registered yet? 
      <NavLink to={'/signup'} style={{ margin: '5px', textDecoration: 'none' }} onClick={clearError} >
        Sign Up
      </NavLink>
    </Typography>
  )
}
export default NotRegistered