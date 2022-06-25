import * as React from 'react';
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'

///// YUP VALIDATION SCHEMA /////
const phoneRegExp = /^\(?[0-9]{3}\)?\s?-?\.?\s?[0-9]{3}\s?-?\.?\s?[0-9]{4}$/g
const validationSchema = yup.object({
  name: yup
    .string("Enter contact name")
    .required("Name is required"),
  phone: yup
    .string("Enter contact's phone number")
    .matches(phoneRegExp, "Please enter a valid 10-digit phone number")
    .required("Phone number is required"),
})

const AddContact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: ""
    },
    onSubmit: (values) => {
      setOpen(false)
      console.log(values)
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
      <Fab 
      component='button' 
      size="small" 
      color="primary" 
      onClick={handleClickOpen}
      aria-label="add"
      sx={{ mt: 3, position: 'relative', left: '50%' }} 
    >
      <AddIcon />
    </Fab>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
          <DialogTitle sx={{ m: 2 }}>Add new contact</DialogTitle>
          <DialogContent sx={{ px: 12  }}>
            <TextField
              label="Contact name"
              id="name"
              variant="standard"
              required
              fullWidth
              sx={{ my: 2 }}
              {...formik.getFieldProps('name')}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              label="Phone number"
              id="phone"
              variant="standard"
              required
              fullWidth
              sx={{ my: 2 }}
              {...formik.getFieldProps('phone')}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
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

export default AddContact