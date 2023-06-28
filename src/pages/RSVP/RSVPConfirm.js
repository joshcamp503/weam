import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import BackButton from '../../components/BackButton'
import { useParams } from 'react-router-dom'
import { useSubRequest } from '../../hooks/useSubRequest'
import { useState } from 'react'

const RSVPConfirm = () => {
  const params = useParams()
  const { fetchSubRequest, confirmRSVP } = useSubRequest()
  const [data, setData] = useState(null)

  if (!data) {
    fetchSubRequest(params.id).then(res => {
      setData(res.data())
    })
  }

  const handleClick = () => {
    console.log(data)
    confirmRSVP(data.id, data.rsvp)
  }

  const layoutStyles = {
    position: "absolute",
      top: "-450%"
  }

  const typeStyles = {
    color: "#444444",
    fontFamily: "'Permanent Marker', 'cursive'",
    paddingRight: "12px",
    textAlign: "left"
  }

  return (
    <Grid container justifyContent="center" textAlign="center" sx={layoutStyles}>
      <Grid item xs={10} md={8} lg={6} >
        <Paper elevation={3} sx={{ p: 3, mb: 3, backgroundColor: "rgba(238, 238, 238, 0.9)" }}>
        {data && 
          <>
            <Box display="flex" alignItems="start">
              <Typography variant="h6" component="h1" sx={{ ...typeStyles, fontFamily: "'Roboto', 'sans-serif'"}}>
                {data.rsvp.rsvpName} has RSVP'd to the following event:
              </Typography>
            </Box>
            <Grid item marginY="4em" >
              <Box>
                <Typography variant="body">{data.event} at {data.location}</Typography>
              </Box>
              <Box>
                <Typography variant="body">{data.date} at {data.time}</Typography>
              </Box>
            </Grid>
            {/* <Box display="flex" alignItems="start">
              <Typography variant="body" component="p" sx={{ ...typeStyles, fontFamily: "'Roboto', 'sans-serif'"}}>
                If you would like to accept this invitation, please click "Accept RSVP".
              </Typography>
            </Box> */}
            <Grid container>
              <Grid item xs={12} md={6} margin="0 auto 3em auto">
                <Button variant="contained" onClick={handleClick} sx={{ color: "#eeeeee", px: 6, py: 1} }>Accept RSVP</Button>
              </Grid>
            </Grid>
          </>
        }
        </Paper>
        <BackButton />
      </Grid>
    </Grid>
  )
}
export default RSVPConfirm