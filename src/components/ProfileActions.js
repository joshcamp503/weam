import Box from '@mui/material/Box'
import EditContact from './modals/EditContact'
import DeleteContact from './modals/DeleteContact'

const ProfileActions = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <EditContact />
      <DeleteContact />
    </Box>
  )
}
export default ProfileActions