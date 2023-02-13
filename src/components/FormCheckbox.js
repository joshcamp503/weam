import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';



const FormCheckbox = ({ contact }) => {

  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
    console.log(e.target)
  }

  return (
    <FormControlLabel
      control={<Checkbox name="invite" checked={checked} value={contact} onChange={handleChange} />}
      sx={{ m: 'auto' }}
    />
  )
}
export default FormCheckbox