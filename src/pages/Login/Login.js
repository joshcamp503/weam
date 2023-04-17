// REACT
import BackButton from '../../components/BackButton'
import AuthErrorMessage from '../../components/AuthErrorMessage'
// MUI
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
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
    <Stack>

      <Typography 
        variant="h4" 
        color="initial" 
        component="h2" 
        gutterBottom
        sx={{m: 4}}
      >
        LOG IN
      </Typography>

      <Grid container alignItems='center' justifyContent='center'>

        <Grid item xs={12} sm={9} md={7} lg={5}>
          <Paper elevation={3} sx={{ backgroundColor: '#fffffe', py: 6 }}>
            <Grid container alignItems='center' justifyContent='center'>

              <Grid item xs={8}>
                <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
                    <TextField
                      label='Email'
                      id='email'
                      type='email'
                      variant='outlined'
                      required
                      fullWidth
                      sx={{ my: '10px' }}
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
                      sx={{ my: '10px' }}
                      {...formik.getFieldProps('password')}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button 
                      sx={{ my: '10px' }}
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

              <Grid item xs={8}>
                <Grid container justifyContent="space-between">
                  <NotRegistered />
                  <ForgotPassword />
                </Grid>
              </Grid>

            </Grid>
          </Paper>
        </Grid>

      </Grid>
      <BackButton />
    </Stack>

    
  )
}
export default Login