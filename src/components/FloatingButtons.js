import BackButton from './BackButton'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import AddContact from './modals/AddContact'

const FloatingButtons = ({ submitRequest, addContact }) => {
  const style = { 
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    position: 'fixed',
      top: '90%', 
      left: '50%', 
    transform: 'translate(-50%, -50%)',
    width: '200px',
    maxWidth: '60%'
  }

  return (
    <Grid item sx={style} >
      {submitRequest && <Button variant="contained" color="primary" type='submit' sx={{ p: 1.5} }>Send Request</Button>}
      {addContact && <AddContact />}
      <BackButton style={{m: 1, p: 1}} />
    </Grid>
  )
}
export default FloatingButtons