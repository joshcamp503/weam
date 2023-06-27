// REACT
// MUI
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import SubRequestForm from './SubRequestForm'

const SubRequest = () => {

  const layoutStyles = {
    position: "absolute",
      top: "-450%"
  }

  return (
      <Grid container alignItems='center' justifyContent='center' sx={layoutStyles}>
        <Grid item xs={12} sm={8} md={6} lg={4} >
          <Paper elevation={3} sx={{ py: 6 }}>
            <Grid container alignItems='center' justifyContent='center' >

              {/* Input Fields */}
              <Grid item xs={10} >
                <SubRequestForm />
              </Grid>

            </Grid>
          </Paper>
        </Grid>

      </Grid>
  )
}
export default SubRequest