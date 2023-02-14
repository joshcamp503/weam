import { useField } from "formik"
import TextField from "@mui/material/TextField"
import MenuItem from '@mui/material/MenuItem'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  
  const numOptions = [...Array(21).keys()]
  
  return (
      <TextField
        label={label}
        id={props.id}
        variant='outlined'
        select={true}
        required
        fullWidth
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      >
        {numOptions.map(num => {
          return <MenuItem key={`num${num}`} value={num}>{num}</MenuItem>
        })}
      </TextField>
  )
}
export default MyTextInput