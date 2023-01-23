import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useProfile } from '../../hooks/useProfile';
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
})

const EditEmail = () => {
  const { id } = JSON.parse(localStorage.getItem('user'))
  const { editUserData } = useProfile()

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: (values) => {
      editUserData(id, values)
      setOpen(false)
    }, 
    validationSchema
  })

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    formik.resetForm()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton 
        onClick={handleClickOpen}
        aria-label="add"
        size='small'
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
          <DialogTitle sx={{ m: 2 }}>Change your email</DialogTitle>
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
    </div>
  );
}

export default EditEmail