import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import {FormLabel,Radio,RadioGroup,FormControlLabel} from '@mui/material';
import Grid from '@mui/material/Grid';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Fill your details
        </BootstrapDialogTitle>
        <DialogContent dividers>

            <Grid container>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" style={{ marginTop: 5 }}/>
                    <TextField id="outlined-basic" label="Email Id" variant="outlined" style={{ marginTop: 10 }}/>
                    <TextField id="outlined-basic" label="Mobile No." variant="outlined" style={{ marginTop: 10 }}/>
                    <TextField id="outlined-basic" label="City to" placeholder="IITH" variant="outlined" style={{ marginTop: 10 }}/>
                    <TextField id="outlined-basic" label="City from" placeholder="IITH" variant="outlined" style={{ marginTop: 10}}/>
                </Grid>

                <Grid item xs={6}>

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label" style={{ marginTop: 5 }}>Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                    </FormControl>

                    <TextField
                        id="date"
                        label="Date of flight"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        style={{ marginTop: 20 }}
                    />
                    <TextField
                        id="time"
                        label="Time of flight"
                        type="time"
                        defaultValue="07:30"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                        sx={{ width: 150 }}
                        style={{ marginTop: 20 }}
                    />

                </Grid>
            </Grid>


        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
