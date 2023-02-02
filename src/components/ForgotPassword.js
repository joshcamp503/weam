import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'
// AUTH
import { auth } from "../firebase/config"
import { sendPasswordResetEmail } from "firebase/auth"
import { useAuthContext } from '../hooks/auth/useAuthContext';


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
})

const ForgotPassword = () => {

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: (values) => {
      sendPasswordResetEmail(auth, values.email)
        .then(() => {
          console.log('email sent')
          setConfirm(true)
        })
      setOpen(false)
    }, 
    validationSchema
  })

  const { dispatch } = useAuthContext()
  const clearError = () => {
    dispatch({ type: 'ERROR', payload: null })
  }

  const [open, setOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const handleClickOpen = () => {
    formik.resetForm()
    clearError()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeConfirm = () => {
    setConfirm(false)
  }

  return (
    <div>
      <Typography 
        variant="subtitle2"
        component="div"
        gutterBottom
        onClick={handleClickOpen}
        sx={{ 
          textAlign: 'left',
          color: 'blue',
          cursor: 'pointer'
        }}
      >
        Forgot password?
      </Typography>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
          <DialogTitle sx={{ m: 2 }}>Enter user account's verified email</DialogTitle>
          <DialogContent sx={{ px: 12  }}>
            <TextField
              label="Email"
              id="email"
              variant="standard"
              required
              fullWidth
              sx={{ my: 2 }}
              {...formik.getFieldProps('email')}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </DialogContent>
          <DialogActions sx={{ m: 2 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit' >Save</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Dialog open={confirm} onClose={closeConfirm} fullWidth>
        <DialogTitle sx={{ p: 0, px: 14, textAlign: 'center', mt: 8, mb: 2 }}>
          A password reset link has been sent to your email
        </DialogTitle>
        <DialogActions sx={{ m: 2 }}>
            <Button onClick={closeConfirm}>Got it!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ForgotPassword