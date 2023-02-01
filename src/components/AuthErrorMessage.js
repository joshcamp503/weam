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
        case 'new user verification':
          return 'You must verify your email before you can log in. A verification link has been sent to your email.';
        default:
          return 'There was a problem logging in... Please check your email and password and try again.'
      }
    } else if (authType === 'signup') {
      switch (authError) {
        case 'auth/email-already-in-use':
          return 'That email is already in use'
        default:
          return authError.message
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