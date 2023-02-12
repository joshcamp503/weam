import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';



const FormCheckbox = () => {

  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      sx={{ m: 'auto' }}
    />
  )
}
export default FormCheckbox