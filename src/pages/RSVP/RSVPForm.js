// REACT
import { useState } from 'react'
import { useSubRequest } from '../../hooks/useSubRequest'
import SuccessModal from '../../components/modals/SuccessModal'
// MUI
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
// FORMS
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import MyTextInput from '../../components/form-components/MyTextInput'

const SubRequestForm = ({ subRequest }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { submitRSVP } = useSubRequest()

  console.log(subRequest)

  return (
    <Formik
      initialValues = {{
        rsvpName: "",
        rsvpEmail: ""
      }}
      validationSchema = {yup.object({
        rsvpName: yup
          .string("Enter your name")
          .required("Name is required"),
        rsvpEmail: yup
          .string("Enter your email")
          .email("Enter a valid email")
          .required("Email is required"),
      })}
      onSubmit = {async (values, actions) => {
        console.log(values)
        await submitRSVP(subRequest.id, values)
        setModalOpen(true)
        actions.resetForm()
      }}
    >
      <Form>
          <Stack spacing={1} >
            <Stack spacing={1} justifyContent="center" sx={{ width: '100%', mb: 4 }}>
              <MyTextInput label="Name" name="rsvpName" id="rsvpName" variant="outlined" />
              <MyTextInput label="Email" name="rsvpEmail" id="rsvpEmail" variant="outlined" />
            </Stack>
              <Button variant="contained" color="primary" type='submit' sx={{ color: "#eeeeee", px: 6, py: 1} }>Send RSVP</Button>
          </Stack>
          <SuccessModal open={modalOpen} setOpen={setModalOpen} text={"RSVP"} />
        </Form>
    </Formik>
  )
}
export default SubRequestForm