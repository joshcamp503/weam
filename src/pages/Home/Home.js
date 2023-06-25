// COMPONENTS
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/auth/useAuthContext'
import { useLogout } from '../../hooks/auth/useLogout';

const btn = [{
  mx: 'auto',
}]

const Home = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  return (
    <Stack>
      <Grid container justifyContent='center'>
        {user ?
          <Grid item xs={12}>
            <Button component={NavLink} to="/sub-request" sx={btn} variant="contained" size="large">Find Subs</Button>
          </Grid>
          :
          <Grid item width="260px" display={'flex'} flexDirection={'column'} justifyContent="center" gap={'0.5em'} marginTop="1em">
            <Button component={NavLink} to="/login" variant="contained" size="large" >Log In</Button>
            <Button component={NavLink} to="/signup" variant="contained" size="large" sx={{ backgroundColor: "#eeeeee", color: "#03A9F4" }}>Sign Up</Button>
          </Grid>
        }
        {user && 
          <Grid item xs={12}>
            <Button component={NavLink} to="/profile" sx={btn} variant="contained" size="large">View Profile</Button>
          </Grid>
        }
        {user && 
          <Grid item xs={12}>
            <Button onClick={logout} sx={btn} variant="contained" size="large">Log Out</Button>
          </Grid> 
        }
      </Grid>
    </Stack>
  )
}
export default Home