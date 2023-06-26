// REACT
import ContactList from '../../components/ContactList'
import EditEmail from '../../components/modals/EditEmail'
// MUI
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import EditName from '../../components/modals/EditName'
import FloatingButtons from '../../components/FloatingButtons'


const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('user'))

  const layoutStyles = {
    position: "absolute",
      top: "-450%"
    // marginTop: "100px",
    // transform: "translateY(-35%)"
  }

  const typeStyles = {
    color: "#444444",
    fontFamily: "'Permanent Marker', 'cursive'",
    paddingRight: "12px"
  }

  return (
    <>
    <Grid container justifyContent="center" sx={layoutStyles}>
      <Grid item xs={12} md={10} lg={8} >
        <Paper elevation={3} sx={{ p: 3, pt: 5 }}>
          <Grid container justifyContent='center'>
            {userData && <Grid item xs={11}>
                <Box display="flex" justifyContent="space-between" sx={{ flexDirection: { xs: "column", md: "row" } }}>
                  <Box display="flex" alignItems="start">
                    <Typography variant="h6" component="h1" sx={typeStyles}>
                      Hello, {userData.firstName} {userData.lastName}!
                    </Typography>
                    <EditName />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Typography variant="body1" sx={typeStyles}>
                      Email: {userData.email}
                    </Typography>
                    <EditEmail />
                  </Box>
                </Box>
                <Typography textAlign="left" marginY="2em" sx={typeStyles}>
                  Contacts
                </Typography>
                <Box >
                  <ContactList />
                </Box>            
            </Grid>
          }
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    <FloatingButtons addContact={true} />
    </>
  )
}
export default Profile