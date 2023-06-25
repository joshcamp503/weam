// COMPONENTS
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/auth/useAuthContext'
import { useLogout } from '../../hooks/auth/useLogout';
import Box from '@mui/material/Box';

const btn = [{
  mx: 'auto',
}]

const Home = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

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
        {user && 'DASHBOARD' }
      </Typography>

      {/* CARD */}
      <Grid container alignItems='center' justifyContent='center' marginTop={'30%'}>
        <Grid item xs={12}>
          {/* {user ? 
            <Button component={NavLink} to="/sub-request" sx={btn} variant="contained" size="large">Find Subs</Button> 
            :              
            <Box display={'flex'} justifyContent={'center'} gap={'1em'} marginBottom={'1em'}>
              <Typography color="initial" fontWeight={'bold'}>Connect with players.</Typography>
              <Typography color="initial" fontWeight={'bold'}>Find subs.</Typography>
              <Typography color="initial" fontWeight={'bold'}>Play ball.</Typography>
            </Box>
          } */}
          {user && <Button component={NavLink} to="/sub-request" sx={btn} variant="contained" size="large">Find Subs</Button>}
        </Grid>
        <Grid item xs={12} lg={2} display={'flex'} flexDirection={'column'} gap={'0.5em'} >
          {!user && <Button component={NavLink} to="/login" variant="contained" size="large" sx={{ color: "#eeeeee" }} >Log In</Button>}
          {!user && <Button component={NavLink} to="/signup" variant="contained" size="large" sx={{ backgroundColor: "#eeeeee", color: "#03A9F4" }}>Sign Up</Button>}
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