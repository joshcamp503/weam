import { useField } from "formik"
import TextField from "@mui/material/TextField"

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  console.log(props)
  console.log(field)
  console.log(meta)
  return (
      <TextField
        label={label}
        id={props.id}
        variant='outlined'
        required
        fullWidth
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
  )
}
export default MyTextInput