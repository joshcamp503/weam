// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

const TagLine = () => {
  return (
  <Box display={'flex'} justifyContent={'center'} gap={'0.75em'} marginBottom={'1em'}>
    <Typography color="#444444" fontFamily="'Permanent Marker', 'cursive'" sx={{ fontSize: { xs: "24px", xl: "32px"} }} fontWeight="bold">Sign up.</Typography>
    <Typography color="#444444" fontFamily="'Permanent Marker', 'cursive'" sx={{ fontSize: { xs: "24px", xl: "32px"} }} fontWeight="bold">Find subs.</Typography>
    <Typography color="#444444" fontFamily="'Permanent Marker', 'cursive'" sx={{ fontSize: { xs: "24px", xl: "32px"} }} fontWeight="bold">Play ball.</Typography>
  </Box>
  )
}
export default TagLine