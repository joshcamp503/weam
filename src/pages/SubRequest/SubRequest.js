// REACT
// MUI
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import SubRequestForm from './SubRequestForm'

const SubRequest = () => {


  return (
    <Stack>
      {/* Title */}
      <Typography 
        variant="h4" 
        color="initial" 
        component="h2" 
        gutterBottom
        sx={{m: 4}}
      >
        FIND SUBS
      </Typography>

      {/* Card */}
      <Grid container alignItems='center' justifyContent='center' sx={{ mb: '200px'}}>

        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} sx={{ py: 6 }}>
            <Grid container alignItems='center' justifyContent='center'>

              {/* Input Fields */}
              <Grid item xs={10}>
                <SubRequestForm />
              </Grid>

            </Grid>
          </Paper>
        </Grid>

      </Grid>
      
    </Stack>
  )
}
export default SubRequest