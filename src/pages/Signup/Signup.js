// REACT
import AuthErrorMessage from '../../components/AuthErrorMessage'
import BackButton from '../../components/BackButton'
import AlreadyRegistered from '../../components/AlreadyRegistered'
// MUI
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
// HOOKS
import { useSignup } from '../../hooks/auth/useSignup'
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAuthContext } from '../../hooks/auth/useAuthContext'

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be a minimum of 8 characters length")
    .required("You must enter a password"),
  passwordConfirmation: yup
    .string("Confirm your password")
    .required("You must confirm your password")
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

const Signup = () => {
  const { signup } = useSignup()
  const { authError } = useAuthContext()

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    onSubmit: (values) => {
      values.contacts = []
      signup(values)
    },
    validationSchema
  })

  const layoutStyles = {
    position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -40%)",
    textAlign: "center"
  }

  return (
    // <Grid container xs={11} sm={7} md={5} lg={4} xl={3} sx={layoutStyles}>
    
    <Grid container width="320px" sx={layoutStyles}>
      <Grid item >
          <Paper elevation={3} sx={{ py: 4, marginBottom: "1em" }}>
            <Grid container alignItems='center' justifyContent='center'>
              <Grid item xs={9}>
                <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
                  <TextField
                    label='First Name'
                    id='firstName'
                    type='text'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{ my: '10px' }}
                    {...formik.getFieldProps('firstName')}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                  />
                  <TextField
                    label='Last Name'
                    id='lastName'
                    type='lastName'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{ my: '10px' }}
                    {...formik.getFieldProps('lastName')}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                  />
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
                  <TextField
                    label='Confirm Password'
                    id='passwordConfirmation'
                    type='password'
                    variant='outlined'
                    required
                    fullWidth
                    sx={{ my: '10px' }}
                    {...formik.getFieldProps('passwordConfirmation')}
                    error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                    helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                  />
                  <Button
                    sx={{ my: '10px' }}
                    variant="contained"
                    color="primary"
                    type='submit'
                    fullWidth
                  >
                  Sign Up  
                  </Button>
                  {authError && <AuthErrorMessage authType="signup" />}
                </form>
              </Grid>

              <Grid item xs={9}>
                <AlreadyRegistered />
              </Grid>

            </Grid>
          </Paper>
          <BackButton />
        </Grid>

      </Grid>
  )
}
export default Signup