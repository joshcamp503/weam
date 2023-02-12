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
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'

///// YUP VALIDATION SCHEMA /////
// const phoneRegExp = /^\(?[0-9]{3}\)?\s?-?\.?\s?[0-9]{3}\s?-?\.?\s?[0-9]{4}$/g
const validationSchema = yup.object({
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
})
///// END VALIDATION SCHEMA /////

const SubRequest = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const { formatData } = useHelpers()
  const { createSubRequest } = useSubRequest()

  const formik = useFormik({
    initialValues: {
      creator: null,
      event: "",
      date: "",
      time: "",
      location: "",
      contacts: "",
      males: "",
      females: "",
      invite: []
    },
    onSubmit: async (values) => {
      const formattedValues = formatData(values)
      formattedValues.creator = userData.id
      // await createSubRequest(formattedValues)
      console.log(values)
      formik.resetForm()
    },
    validationSchema
  })

  const numOptions = [...Array(10).keys()]

  return (
    <Stack>
      {/* Title */}
      <Typography 
        variant="h4" 
        color="initial" 
        component="h2" 
        gutterBottom
        sx={{m: 4}}
      >
        FIND SUBS
      </Typography>

      {/* Card */}
      <Grid container alignItems='center' justifyContent='center' sx={{ mb: '200px'}}>

        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} sx={{ py: 6 }}>
            <Grid container alignItems='center' justifyContent='center'>

              {/* Input Fields */}
              <Grid item xs={10}>
                <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
                  <Stack spacing={1}>
                    <TextField
                      label='For what?'
                      id='event'
                      variant='outlined'
                      required
                      fullWidth
                      {...formik.getFieldProps('event')}
                      error={formik.touched.event && Boolean(formik.errors.event)}
                      helperText={formik.touched.event && formik.errors.event}
                    />
                    <MobileDatePicker
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
                    />
                    <MobileTimePicker
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
                    />
                    <TextField
                      label='Where?'
                      id='location'
                      variant='outlined'
                      required
                      fullWidth
                      {...formik.getFieldProps('location')}
                      error={formik.touched.location && Boolean(formik.errors.location)}
                      helperText={formik.touched.location && formik.errors.location}
                    />

                    <Box>
                      <Grid container spacing={1}>
                        <Grid item xs>
                          <TextField
                            label='Male players?'
                            id='males'
                            variant='outlined'
                            select={true}
                            fullWidth
                            required
                            {...formik.getFieldProps('males')}
                            error={formik.touched.males && Boolean(formik.errors.males)}
                            helperText={formik.touched.males && formik.errors.males}
                          >
                            {numOptions.map(num => {
                              return <MenuItem key={`num${num}`} value={num}>{num}</MenuItem>
                            })}
                          </TextField>
                        </Grid>
                        <Grid item xs>
                          <TextField
                            label='Female players?'
                            id='females'
                            variant='outlined'
                            select={true}
                            fullWidth
                            required
                            {...formik.getFieldProps('females')}
                            error={formik.touched.females && Boolean(formik.errors.females)}
                            helperText={formik.touched.females && formik.errors.females}
                          >
                            {numOptions.map(num => {
                              return <MenuItem key={`num${num}`} value={num}>{num}</MenuItem>
                            })}
                          </TextField>
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
                </form>
              </Grid>

            </Grid>
          </Paper>
        </Grid>

      </Grid>
      
    </Stack>
  )
}
export default SubRequest