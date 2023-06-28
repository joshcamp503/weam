import BackButton from './BackButton'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import AddContact from './modals/AddContact'
import { NavLink } from 'react-router-dom';

const FloatingButtons = ({ submitRequest, addContact }) => {
  const style = { 
    display: 'flex',
      flexDirection: 'column',
      gap: 0.5,
    position: 'fixed',
      top: '87.5%', 
      left: '50%', 
      zIndex: 2,
    transform: 'translate(-50%, -50%)',
    width: '200px'
  }



  return (
    <Grid item sx={style} alignItems="center" >
      {submitRequest 
      ?
      <Button variant="contained" color="primary" type='submit' sx={{ color: "#eeeeee", px: 6, py: 1} }>Send Request</Button>
      :
      <Button component={NavLink} to="/sub-request" variant="contained" size="large" sx={{ color: "#eeeeee", px: 7, py: 1 }} >Find Subs</Button> 
      }
      {addContact && <AddContact />}
      {submitRequest && <BackButton style={{m: 1, p: 1}} />}
    </Grid>
  )
}
export default FloatingButtons