import Typography from "@mui/material/Typography"
import RadioGroup from "@mui/material/RadioGroup"
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
      <RadioGroup 
        role="group" 
        id="gender"
        aria-labelledby="gender-radio-group"
        style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'end' }}
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
  )
}
export default MyRadioGroup

