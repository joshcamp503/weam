// COMPONENTS
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { NavLink, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/auth/useAuthContext'

const Home = () => {
  const { user } = useAuthContext()

  return (
    <Grid container justifyContent='center' textAlign="center">
      {user ?
        <Navigate to="/profile" />
        :
        <Grid item width="260px" display={'flex'} flexDirection={'column'} justifyContent="center" gap={'0.5em'} marginTop="1em">
          <Button component={NavLink} to="/login" variant="contained" size="large" sx={{ color: "#eeeeee" }}>Log In</Button>
          <Button component={NavLink} to="/signup" variant="contained" size="large" sx={{ backgroundColor: "#eeeeee", color: "#03A9F4" }}>Sign Up</Button>
        </Grid>
      }
    </Grid>
  )
}
export default Home