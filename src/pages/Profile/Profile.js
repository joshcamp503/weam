// REACT
import ContactList from '../../components/ContactList'
import EditEmail from '../../components/modals/EditEmail'
// MUI
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import BackButton from '../../components/BackButton'


const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('user'))

  return (
    <Stack>

      <Typography 
        variant='h4' 
        component='h1' 
        gutterBottom
        sx={{
          m: 6
        }}
      >
        Profile
      </Typography>

      <Grid 
        container
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Paper elevation={3} sx={{ p: 3, pt: 5 }}>
            <Grid container justifyContent='center'spacing={2}>

              <Grid item xs={11}>
                <Box>
                  <Typography textAlign='left' gutterBottom>
                    Email
                  </Typography>
                  <Box sx={{ textAlign: 'left', m: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                    {userData ? userData.email : 'Email goes here'}
                    <EditEmail />
                  </Box>
                </Box>
                <Box>
                  <Typography textAlign='left' gutterBottom>
                    Contacts
                  </Typography>

                  <ContactList />
                  
                </Box>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <BackButton />

    </Stack>
  )
}
export default Profile