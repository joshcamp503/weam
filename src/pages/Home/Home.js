// COMPONENTS
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/auth/useAuthContext'
import { useLogout } from '../../hooks/auth/useLogout';

const btn = [{
  mx: 'auto',
  my: '10px'
}]

const Home = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <Stack>
      {/* TITLE */}
      <Typography 
        variant="h4" 
        color="initial" 
        component="h2" 
        gutterBottom
        sx={{mt: 12, mb: 4}}
      >
        {user ? 'DASHBOARD' : 'ABOUT'}
      </Typography>

      {/* CARD */}
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          {user ? 
            <Button component={NavLink} to="/sub-request" sx={btn} variant="contained" size="large">Find Subs</Button> 
            :              
            <Typography 
              variant="p" 
              color="initial" 
              component="p" 
              gutterBottom
              sx={{mb: 12}}
            >
              {aboutText}
            </Typography>
          }
        </Grid>
        <Grid item xs={12}>
          {!user && <Button component={NavLink} to="/login" sx={btn} variant="contained" size="large">Log In</Button>}
        </Grid>
        <Grid item xs={12}>
          {!user && <Button component={NavLink} to="/signup" sx={btn} variant="contained" size="large">Sign Up</Button>}
        </Grid>
        <Grid item xs={12}>
          {user && <Button component={NavLink} to="/profile" sx={btn} variant="contained" size="large">View Profile</Button>}
        </Grid>
        <Grid item xs={12}>
          {user && <Button onClick={logout} sx={btn} variant="contained" size="large">Log Out</Button>}
        </Grid>
      </Grid>
    </Stack>
  )
}
export default Home