import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';



const FormCheckbox = ({ user }) => {
  console.log(user)
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <FormControlLabel
      control={<Checkbox name="invite" checked={checked} value={user} onChange={handleChange} />}
      sx={{ m: 'auto' }}
    />
  )
}
export default FormCheckbox