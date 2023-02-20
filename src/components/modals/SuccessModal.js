// REACT
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

const SuccessModal = ({ open, setOpen }) => {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/')
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth >
          <DialogTitle sx={{ fontSize: '3em', textAlign: 'center' }}>Success!</DialogTitle>
          <DialogContent sx={{ textAlign: 'center' }}>
            <Typography
              variant='p'
              component='p'
            >
              Your request has been sent.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default SuccessModal