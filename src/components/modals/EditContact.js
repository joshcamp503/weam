import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'
// HOOKS
import { useProfile } from '../../hooks/useProfile'

///// YUP VALIDATION SCHEMA /////
const validationSchema = yup.object({
  name: yup
    .string("Enter contact name")
    .required("Name is required"),
  email: yup
    .string("Enter contact's phone number")
    .email("Enter a valid email")
    .required("Phone number is required"),
})

const EditContact = ({ contact }) => { 
  const userData = JSON.parse(localStorage.getItem('user'))
  const { editContact } = useProfile()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    onSubmit: (values) => {
      editContact(userData.id, contact, values)
      setOpen(false)
    }, 
    validationSchema
  })

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    formik.resetForm()
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton 
        onClick={handleClickOpen}
        aria-label="edit contact"
        size='small' 
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
          <DialogTitle >Edit contact</DialogTitle>
          <DialogContent >
            <TextField
              label="Name"
              id="name"
              variant="standard"
              required
              fullWidth
              sx={{ my: 1 }}
              {...formik.getFieldProps('name')}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              label="Email"
              id="email"
              variant="standard"
              required
              fullWidth
              sx={{ mb: 1 }}
              {...formik.getFieldProps('email')}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </DialogContent>
          <DialogActions sx={{ m: 2 }}>
            <Button onClick={handleClose} sx={{ color: "#444444" }} >Cancel</Button>
            <Button type='submit' sx={{ color: "#444444" }} >Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default EditContact