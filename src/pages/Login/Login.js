// REACT
import BackButton from '../../components/BackButton'
import AuthErrorMessage from '../../components/AuthErrorMessage'
// MUI
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
// AUTH
import { useLogin } from '../../hooks/auth/useLogin'
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'
import NotRegistered from '../../components/NotRegistered'
import ForgotPassword from '../../components/ForgotPassword'
import { useAuthContext } from '../../hooks/auth/useAuthContext'

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be a minimum of 8 characters length")
    .required("You must enter a password")
})

const Login = () => {
  const { login } = useLogin()
  const { authError } = useAuthContext()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      login(values)
    },
    validationSchema
  })

  return (
    <Stack textAlign="center" >
      <Grid container flexDirection="column" alignItems='center' justifyContent='center' >
        <Grid item xs={12} sm={9} md={7} lg={4} >
            <Grid container direction="column" alignItems='center' justifyContent='center'>
              <Grid item width="320px" >
                <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
                    <TextField
                      label='Email'
                      id='email'
                      type='email'
                      variant='outlined'
                      required
                      fullWidth
                      sx={{ my: '6px' }}
                      {...formik.getFieldProps('email')}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      label='Password'
                      id='password'
                      type='password'
                      variant='outlined'
                      required
                      fullWidth
                      {...formik.getFieldProps('password')}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button 
                      sx={{ my: '12px' }}
                      variant="contained"
                      color="primary"
                      type='submit'
                      fullWidth
                    >
                    Log In  
                    </Button>
                  {authError && <AuthErrorMessage authType='login' />}
                </form>
              </Grid>
              <Grid item width="320px">
                <Grid container justifyContent="space-between" fontSize="14px">
                  <NotRegistered />
                  <ForgotPassword />
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      <BackButton />
    </Stack>

    
  )
}
export default Login