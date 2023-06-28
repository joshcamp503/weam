import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
// HOOKS
import { useProfile } from '../../hooks/useProfile'


const DeleteContact = ({ contact }) => {

  // OPEN/CLOSE MODAL
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // DELETE CONTACT
  const userData = JSON.parse(localStorage.getItem('user'))
  const { deleteContact } = useProfile()
  const handleDelete = () => {
    deleteContact(userData.id, contact)
    setOpen(false)
  }

  return (
    <div>
      <IconButton 
        onClick={handleClickOpen}
        aria-label="add"
        size='small' 
      >
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle >Delete contact</DialogTitle>
          <DialogContent sx={{mt: 3}}>
            <Typography
              variant='p'
              component='p'
            >
              Are you sure you want to delete this contact?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ m: 2 }}>
            <Button onClick={handleClose} sx={{ color: "#444444" }} >Cancel</Button>
            <Button onClick={handleDelete} sx={{ color: "#444444" }} >Confirm</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteContact