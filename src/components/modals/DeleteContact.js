import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';


const EditContact = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <DialogTitle sx={{ m: 2 }}>Delete contact</DialogTitle>
          <DialogContent sx={{ px: 12  }}>
            <Typography
              variant='p'
              component='p'
            >
              Are you sure you want to delete this contact?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ m: 2 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Confirm</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditContact