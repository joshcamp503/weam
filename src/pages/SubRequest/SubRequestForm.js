// REACT
import { useState } from 'react'
import { useSubRequest } from '../../hooks/useSubRequest'
import ContactList from '../../components/ContactList'
import SuccessModal from '../../components/modals/SuccessModal'
// MUI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
// FORMS
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import MyTextInput from '../../components/form-components/MyTextInput'
import MyNumSelector from '../../components/form-components/MyNumSelector'
import MyDatePicker from '../../components/form-components/MyDatePicker'
import MyTimePicker from '../../components/form-components/MyTimePicker'
import FloatingButtons from '../../components/FloatingButtons'

const SubRequestForm = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const { createSubRequest } = useSubRequest()
  const [modalOpen, setModalOpen] = useState(false)

  const typeStyles = {
    color: "#444444",
    fontFamily: "'Permanent Marker', 'cursive'",
    paddingRight: "12px"
  }

  return (
    <Formik
      initialValues = {{
        creatorId: null,
        creatorName: "",
        event: "",
        date: "",
        localeDate: "",
        time: "",
        localeTime: "",
        location: "",
        players: "",
        // males: "",
        // females: "",
        invite: []
      }}
      validationSchema = {yup.object({
        event: yup
          .string("Enter event description")
          .required("Event description is required"),
        date: yup
          .date()
          .nullable()
          .required("Date is required"),
        time: yup
          .date()
          .nullable()
          .required("Time is required"),
        location: yup
          .string("Enter event location")
          .required("Location is required"),
        players: yup
          .number()
          .required("Number of players is required")
          .positive()
          .integer()
          .min(0, "Must be a positive number")
          .max (20, "Number cannot be greater than 20"),
        // males: yup
        //   .number()
        //   .required("Number of male players is required")
        //   .positive()
        //   .integer()
        //   .min(0, "Must be a positive number")
        //   .max (20, "Number cannot be greater than 20"),
        // females: yup
        //   .number()
        //   .required("Number of female players is required")
        //   .positive()
        //   .integer()
        //   .min(0, "Must be a positive number")
        //   .max(20, "Number cannot be greater than 20"),
      })}
      onSubmit = {async (values, actions) => {
        // const formattedValues = formatData(values)
        // formattedValues.creator = userData.id
        values.creatorId = userData.id
        values.creatorName = `${userData.firstName} ${userData.lastName}`
        values.creatorEmail = userData.email
        await createSubRequest(values)
        setModalOpen(true)
        actions.resetForm()
      }}
    >
      <Form>
          <Stack spacing={1} >
            <Stack spacing={1} justifyContent="center" sx={{ width: '100%', mb: 4 }}>
              <Typography sx={typeStyles}>
                Invite players:
              </Typography>
              <MyTextInput label="For What?" name="event" id="event" variant="outlined" />
              <MyTextInput label="Where?" name="location" id="location" variant="outlined" />
              <MyDatePicker label="Which day?" name="date" id="date" />
              <MyTimePicker label="What time?" name="time" id="time" />
              <Box>
                <Grid container spacing={1}>
                  <Grid item xs={6} >
                    <MyNumSelector label="Players" name="players" id="players" />
                  </Grid>
                  {/* <Grid item xs>
                    <MyNumSelector label="Male players" name="males" id="males" />
                  </Grid>
                  <Grid item xs>
                    <MyNumSelector label="Female players" name="females" id="females" />
                  </Grid> */}
                </Grid>
              </Box>
            </Stack>
            <Typography sx={typeStyles}>
              Contacts:
            </Typography>
            <ContactList id="invite" action={"invite"} />
            <FloatingButtons submitRequest={true} />
          </Stack>
          <SuccessModal open={modalOpen} setOpen={setModalOpen} text={"request"}/>
        </Form>
    </Formik>
  )
}
export default SubRequestForm