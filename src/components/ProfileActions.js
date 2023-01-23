import Box from '@mui/material/Box'
import EditContact from './modals/EditContact'
import DeleteContact from './modals/DeleteContact'

const ProfileActions = ({ contact }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <EditContact contact={contact} />
      <DeleteContact contact={contact} />
    </Box>
  )
}
export default ProfileActions