import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
import { useField, useFormikContext } from "formik"
import TextField from "@mui/material/TextField"

const MyTimePicker = ({ label, ...props }) => {
  const formik = useFormikContext()
  const [field, meta] = useField(props)

  return (
    <MobileTimePicker
      label={label}
      id={props.id}
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
export default MyTimePicker