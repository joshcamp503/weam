// REACT
import { NavLink } from 'react-router-dom'
// MUI
import Link from '@mui/material/Link'

const BackButton = () => {

  return (
    <Link component={NavLink} sx={{ my: 6 }} to={'/'} >Back to Home</Link>
  )
}
export default BackButton