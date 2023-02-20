import Typography from "@mui/material/Typography"
import { Field } from "formik"

const MyRadioGroup = () => {
  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', paddingRight: '1em'}}>
      <Typography 
        variant="h6"
        color="initial" 
        component="label" 
      >
        Gender:
      </Typography>
      <div 
        role="group" 
        id="genderRadioGroup" 
        aria-labelledby="gender-radio-group" 
        style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'end' }}
      >
        <Typography 
          variant="p"
          color="initial" 
          component="label" 
          sx= {{ mx: '1em'}}
        >
          <Field type="radio" name="gender" value="M" />
          Male
        </Typography>
        <Typography 
          variant="p"
          color="initial" 
          component="label" 
          sx= {{ mx: '1em'}}
        >
          <Field type="radio" name="gender" value="F" />
          Female
        </Typography>
      </div>
    </div>
  )
}
export default MyRadioGroup

