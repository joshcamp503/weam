import Card from '@mui/material/Card'
import { useAuthContext } from '../hooks/auth/useAuthContext'

const AuthErrorMessage = ({ authType }) => {
  const { authError } = useAuthContext()

  const errStyle = {
    p: 1,
    bgcolor: '#FFCCCB',
    borderColor: 'error.main'
  }

  const createErrorText = () => {
    if (authType === 'login') {
      switch (authError.message) {
        case 'User email is not verified':
          return 'User email is not verified'
        default:
          return 'There was a problem logging in... Please check your email and password and try again.'
      }
    } else if (authType === 'signup') {
      switch (authError) {
        case 'auth/email-already-in-use':
          return 'That email is already in use'
        default:
          return authError
      }
    }
  }


  return (
    <Card className='auth-error-message' variant="outlined" sx={errStyle}>
      {createErrorText()}
    </Card>
  )
}

export default AuthErrorMessage