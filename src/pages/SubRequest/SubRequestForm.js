// REACT
import { useHelpers } from '../../hooks/useHelpers'
import { useSubRequest } from '../../hooks/useSubRequest'
import BackButton from '../../components/BackButton'
import CheckboxList from '../../components/CheckboxList'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
// FORMS
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import MyTextInput from '../../components/form-components/MyTextInput'
import MyNumSelector from '../../components/form-components/MyNumSelector'
import MyDatePicker from '../../components/form-components/MyDatePicker'
import MyTimePicker from '../../components/form-components/MyTimePicker'

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
      onSubmit = {async (values) => {
        const formattedValues = formatData(values)
        formattedValues.creator = userData.id
        // await createSubRequest(formattedValues)
        console.log(values)
        // formik.resetForm()
      }}
    >
      <Form>
          <Stack spacing={1}>
            <MyTextInput label="For What?" name="event" id="event"/>
            <MyTextInput label="Where?" name="location" id="location"/>
            <MyDatePicker label="Which day?" name="date" id="date" />
            <MyTimePicker label="What time?" name="time" id="time" />
            {/* <MobileDatePicker
              renderInput={(props) => (
                <TextField 
                  {...props}
                  label="Which day?"
                  id="date"
                  {...formik.getFieldProps('date')}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  helperText={formik.touched.date && formik.errors.date}
                  required 
                  fullWidth
                />
              )}
              value={formik.values.date}
              onChange={(value) => (
                formik.setFieldValue("date", value)
              )}
            /> */}
            {/* <MobileTimePicker
              renderInput={(props) => (
                <TextField 
                  {...props}
                  label="What time?"
                  id="time"
                  {...formik.getFieldProps('time')}
                  error={formik.touched.time && Boolean(formik.errors.time)}
                  helperText={formik.touched.time && formik.errors.time}
                  required 
                  fullWidth
                />
              )}
              value={formik.values.time}
              onChange={(value) => (
                formik.setFieldValue("time", value)
              )}
            /> */}

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
            {/* <CheckboxList id="invite" /> */}
            <Grid 
              item 
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                position: 'fixed',
                  top: '90%', 
                  left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '200px',
                maxWidth: '60%'
              }} 
            >
              <Button 
                variant="contained"
                color="primary"
                type='submit'
                sx={{p: 1.5}}
              >
                Send Request
              </Button>
              <BackButton style={{m: 1, p: 1}} />
            </Grid>
            
          </Stack>
        </Form>
    </Formik>
  )
}
export default SubRequestForm