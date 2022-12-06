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
  const { user, userData } = useAuthContext()
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
        GET STARTED
      </Typography>

      {/* CARD */}
      <Grid container alignItems='center' justifyContent='center' sx={{ mt: 0, px: 6, py: 0 }}>

        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Paper elevation={3} sx={{ py: 12 }}>
            <Grid container alignItems='center' justifyContent='center'>

              <Grid item xs={12}>
                <Button component={NavLink} to="/sub-request" sx={btn} variant="contained" size="large">Find Subs</Button>
              </Grid>
              <Grid item xs={12}>
                {!user && <Button component={NavLink} to="/login" sx={btn} variant="contained" size="large">Log In</Button>}
              </Grid>
              <Grid item xs={12}>
                {!user && <Button component={NavLink} to="/signup" sx={btn} variant="contained" size="large">Sign Up</Button>}
              </Grid>
              <Grid item xs={12}>
                {user && <Button component={NavLink} to="/" sx={btn} variant="contained" size="large">Add Contacts</Button>}
              </Grid>
              <Grid item xs={12}>
                {user && <Button component={NavLink} to="/profile" sx={btn} variant="contained" size="large">View Profile</Button>}
              </Grid>
              <Grid item xs={12}>
                {user && <Button onClick={logout} sx={btn} variant="contained" size="large">Log Out</Button>}
              </Grid>
              {/* <Grid item xs={12}>
                <button onClick={() => { console.log(userData) }}>Check state</button>
              </Grid> */}

            </Grid>
          </Paper>
        </Grid>

      </Grid>
    </Stack>
  )
}
export default Home