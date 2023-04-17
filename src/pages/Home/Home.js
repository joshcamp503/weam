// COMPONENTS
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/auth/useAuthContext'
import { useLogout } from '../../hooks/auth/useLogout';
import Box from '@mui/material/Box';

const btn = [{
  mx: 'auto',
  my: '10px'
}]

const Home = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  const aboutText = "Connect with players. Find subs. Play ball."
  return (
    <Stack height={'100%'}>
      {/* TITLE */}
      <Typography 
        variant="h4" 
        color="initial" 
        component="h2" 
        gutterBottom
        sx={{mt: 12, mb: 4}}
      >
        {user && 'DASHBOARD' }
      </Typography>

      {/* CARD */}
      <Grid container alignItems='center' justifyContent='center' marginTop={'15%'}>
        <Grid item xs={12}>
          {user ? 
            <Button component={NavLink} to="/sub-request" sx={btn} variant="contained" size="large">Find Subs</Button> 
            :              
            <Box display={'flex'} justifyContent={'center'} gap={'1em'} marginBottom={'1em'}>
              <Typography color="initial" >Connect with players.</Typography>
              <Typography color="initial" >Find subs.</Typography>
              <Typography color="initial" >Play ball.</Typography>
            </Box>
          }
        </Grid>
        <Grid item xs={12} lg={2} display={'flex'} >
          {!user && <Button component={NavLink} to="/login" sx={btn} variant="contained" size="large">Log In</Button>}
          {!user && <Button component={NavLink} to="/signup" sx={btn} variant="contained" size="large">Sign Up</Button>}
        </Grid>
        {/* <Grid item xs={12}>
          {!user && <Button component={NavLink} to="/signup" sx={btn} variant="contained" size="large">Sign Up</Button>}
        </Grid> */}
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