import BackButton from './BackButton'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const FloatingButtons = () => {
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
      <Button variant="contained" color="primary" type='submit' sx={{p: 1.5}}>
        Send Request
      </Button>
      <BackButton style={{m: 1, p: 1}} />
    </Grid>
  )
}
export default FloatingButtons