import { useState, useRef } from 'react';
import MyTextInput from '../form-components/MyTextInput';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// FORMS
import { Formik, Form } from 'formik'
import * as yup from 'yup'
// HOOKS
import { useProfile } from '../../hooks/useProfile'
import MyRadioGroup from '../form-components/MyRadioGroup';


const AddContact = () => {
  const [open, setOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem('user'))
  const { addContact } = useProfile()
  const formikRef = useRef()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    formikRef.current.resetForm()
    setOpen(false);
  };

  return (
    <Formik 
      innerRef={formikRef}
      initialValues = {{
        name: "",
        email: "",
        gender: null
      }}
      validationSchema = {yup.object({
        name: yup
          .string("Enter contact name")
          .required("Name is required"),
        email: yup
          .string("Enter contact's phone number")
          .email("Enter a valid email")
          .required("Phone number is required"),
        gender: yup
          .string("Select contact gender")
          .required("Gender is required")
      })}
      onSubmit = {(values, actions) => {
        // addContact(userData.id, values)
        console.log(values)
        actions.resetForm()
        setOpen(false)
      }}
    >
      <div>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleClickOpen} 
          sx={{ px: 6, py: 1.5 }}
          >
          Add Contact
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <Form >
            <DialogTitle sx={{ m: 2 }}>Add new contact</DialogTitle>
            <DialogContent  >
              <MyTextInput label="Contact name" name="name" id="name" variant="standard" sx={{ my: 2 }} />
              <MyTextInput label="Email" name="email" id="email" variant="standard" sx={{ my: 2 }} />
              <MyRadioGroup />
            </DialogContent>
            <DialogActions sx={{ m: 2 }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit' >Save</Button>
            </DialogActions>
          </Form>
        </Dialog>
      </div>
    </Formik>
  );
}

export default AddContact