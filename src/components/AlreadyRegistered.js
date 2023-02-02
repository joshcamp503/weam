// REACT
import { NavLink } from "react-router-dom"
// MUI
import Typography from "@mui/material/Typography"
import { useAuthContext } from "../hooks/auth/useAuthContext"

const AlreadyRegistered = () => {
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
      Already registered? 
      <NavLink to={'/login'} style={{ margin: '5px', textDecoration: 'none' }} onClick={clearError} >
        Log In
      </NavLink>
    </Typography>
  )
}
export default AlreadyRegistered