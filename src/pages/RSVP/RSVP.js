import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import BackButton from '../../components/BackButton'
import RSVPForm from '../RSVP/RSVPForm'
import { useParams } from 'react-router-dom'
import { useSubRequest } from '../../hooks/useSubRequest'
import { useState } from 'react'

const RSVP = () => {
  const params = useParams()
  console.log(params)
  const { fetchSubRequest } = useSubRequest()
  const [data, setData] = useState(null)

  if (!data) {
    fetchSubRequest(params.id).then(res => {
      setData(res.data())
      console.log(data)
    })
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
              <Typography variant="h6" component="h1" sx={typeStyles}>
                {data.creatorName} has invited you to a game!
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
            <Box display="flex" alignItems="start">
              <Typography variant="body" component="p" sx={{ ...typeStyles, fontFamily: "'Roboto', 'sans-serif'"}}>
                If you would like to accept this invitation, please enter your name and email below and click "Send RSVP".
              </Typography>
            </Box>
            <Grid container>
              <Grid item xs={12} md={6} margin="2em auto 2em auto">
                <RSVPForm subRequest={data} />
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
export default RSVP