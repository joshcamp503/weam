// REACT
import { useHelpers } from '../../hooks/useHelpers'
import { useSubRequest } from '../../hooks/useSubRequest'
import CheckboxList from '../../components/CheckboxList'
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
  const { formatData } = useHelpers()
  const { createSubRequest } = useSubRequest()

  return (
    <Formik
      initialValues = {{
        creator: null,
        event: "",
        date: "",
        time: "",
        location: "",
        contacts: "",
        males: "",
        females: "",
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
        males: yup
          .number()
          .required("Number of male players is required")
          .positive()
          .integer()
          .min(0, "Must be a positive number")
          .max(9, "Number cannot be greater than 9"),
        females: yup
          .number()
          .required("Number of female players is required")
          .positive()
          .integer()
          .min(0, "Must be a positive number")
          .max(9, "Number cannot be greater than 9"),
      })}
      onSubmit = {async (values, actions) => {
        const formattedValues = formatData(values)
        formattedValues.creator = userData.id
        // await createSubRequest(formattedValues)
        console.log(formattedValues)
        actions.resetForm()
      }}
    >
      <Form>
          <Stack spacing={1}>
            <MyTextInput label="For What?" name="event" id="event"/>
            <MyTextInput label="Where?" name="location" id="location"/>
            <MyDatePicker label="Which day?" name="date" id="date" />
            <MyTimePicker label="What time?" name="time" id="time" />
            <Box>
              <Grid container spacing={1}>
                <Grid item xs>
                  <MyNumSelector label="Male players" name="males" id="males" />
                </Grid>
                <Grid item xs>
                  <MyNumSelector label="Female players" name="females" id="females" />
                </Grid>
              </Grid>
            </Box>
            <Typography 
              variant="h6" 
              color="initial" 
              component="h6" 
              gutterBottom
              sx={{
                alignSelf: 'flex-start'
              }}
            >
              Contacts:
            </Typography>
            <CheckboxList id="invite" />
            <FloatingButtons />
            
          </Stack>
        </Form>
    </Formik>
  )
}
export default SubRequestForm