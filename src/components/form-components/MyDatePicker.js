import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { useField, useFormikContext } from "formik"
import TextField from "@mui/material/TextField"

const MyDatePicker = ({ label, ...props }) => {
  const formik = useFormikContext()
  const [field, meta] = useField(props)

  return (
    <MobileDatePicker
      label={label}
      id={props.id}
      closeOnSelect={true}
      disablePast={true}
      toolbarTitle={label}
      renderInput={(props) => (
        <TextField 
          required 
          fullWidth
          {...field}
          {...props}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
      value={meta.value}
      onChange={(value) => (
        formik.setFieldValue(props.id, value)
      )}
    />
  )
}
export default MyDatePicker