import Typography from "@mui/material/Typography"
import RadioGroup from "@mui/material/RadioGroup"
import { Field, useField } from "formik"
import { useState } from "react"

const MyRadioGroup = ({ ...props }) => {
  const [field, meta] = useField(props)
  const [error, setError] = useState(null)

  return (
    <>
    <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', paddingRight: '1em'}}>
      <Typography 
        variant="h6"
        color="initial" 
        component="label" 
      >
        Gender:
      </Typography>
      <RadioGroup 
        aria-labelledby="gender-radio-group"
        sx={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'end' }}
        {...props}
        {...field}
      >
        <Typography 
          variant="p"
          color="initial" 
          component="label" 
          sx= {{ mx: '1em'}}
        >
          <Field type="radio" name="gender" id="genderMale" value="M" />
          Male
        </Typography>
        <Typography 
          variant="p"
          color="initial" 
          component="label" 
          sx= {{ mx: '1em'}}
        >
          <Field type="radio" name="gender" id="genderFemale" value="F" />
          Female
        </Typography>
      </RadioGroup>
    </div>
    {(meta.touched && meta.error) &&
      <div style={{ color: 'red', fontStyle: 'italic', paddingRight: '2em', textAlign: 'right' }}><small>Gender is required</small></div>
    }
    </>
  )
}
export default MyRadioGroup

