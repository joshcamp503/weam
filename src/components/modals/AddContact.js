import * as React from 'react';
import MyTextInput from '../form-components/MyTextInput';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// FORMS
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
// HOOKS
import { useProfile } from '../../hooks/useProfile'


const AddContact = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const { addContact } = useProfile()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Formik 
      initialValues = {{
        name: "",
        email: "",
        gender: ""
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
          .string("Enter contact gender")
          .required("Gender is required")
      })}
      onSubmit = {(values, actions) => {
        addContact(userData.id, values)
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
          <Form>
            <DialogTitle sx={{ m: 2 }}>Add new contact</DialogTitle>
            <DialogContent  >
              <MyTextInput label="Contact name" name="name" id="name" variant="standard" sx={{ my: 2 }} />
              <MyTextInput label="Email" name="email" id="email" variant="standard" sx={{ my: 2 }} />
              <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', paddingRight: '1em'}}>
                <Typography 
                  variant="h6"
                  color="initial" 
                  component="label" 
                >
                  Gender:
                </Typography>
                <div role="group" aria-labelledby="gender-radio-group" style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'end' }}>
                  <Typography 
                    variant="p"
                    color="initial" 
                    component="label" 
                    sx= {{ mx: '1em'}}
                  >
                    <Field type="radio" name="gender" value="M" />
                    Male
                  </Typography>
                  <Typography 
                    variant="p"
                    color="initial" 
                    component="label" 
                    sx= {{ mx: '1em'}}
                  >
                    <Field type="radio" name="gender" value="F" />
                    Female
                  </Typography>
                </div>
              </div>
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