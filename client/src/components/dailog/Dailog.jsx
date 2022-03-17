import * as React from 'react';
import {useState} from 'react';
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
import axios from "axios";
import {useUserAuth} from '../../context/UserAuthContext';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {useDispatch,useSelector} from 'react-redux';
import {addRow,updateRow} from '../../redux/actions/Actions';
import { useNavigate } from "react-router";

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

export default function CustomizedDialogs({editing,id}) {


  const {user} = useUserAuth();
  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");

  const dispatch = useDispatch();


  //for input data
  const [userData,setUserData] = React.useState({
     username: "",email:"",mobile:"",source:"",destination:"",date:"",time:"",gender:""
  });


  //console.log(userData);

  let name_,value_;
  const handleInput = (e) => {

    //getting the property and its value
    name_= e.target.name;
    value_= e.target.value;

    //[] for dynamic data
    //...user = getting all the user's data
    setUserData({...userData,[name_]:value_});

  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose =  async (e) => {

    e.preventDefault();
    setOpen(false);

    // console.log(user);
    // setUsername(user.displayName);
    // setEmail(user.email);
    // console.log(username);
    // console.log(email);
    const {username,email,mobile,source,destination,date,time,gender} = userData;


    console.log(userData);

    //adding data in redux store for
    //const rows = useSelector((state) => state.allRows.rows);

    if (editing){

      console.log("edit",id);

        console.log({
          username,
          email,
          mobile,
          source,
          destination,
          date,
          time,
          gender
    
        });

      try {

        // console.log({
        //   username,
        //   email,
        //   mobile,
        //   source,
        //   destination,
        //   date,
        //   time,
        //   gender
    
        // });

        await axios.put(`/posts/edit/${id}`, {
          username,
          email,
          mobile,
          source,
          destination,
          date,
          time,
          gender
        });

        dispatch(updateRow({
          username,
          email,
          mobile,
          source,
          destination,
          date,
          time,
          gender

       }));

        
      } catch (err) {
        console.log(err);
      }

    } else {


      try{

        //console.log("adding");

        await axios.post("/posts/add", {
          username,
          email,
          mobile,
          source,
          destination,
          date,
          time,
          gender
        }) ;

       dispatch(addRow({
          username,
          email,
          mobile,
          source,
          destination,
          date,
          time,
          gender

       }));

      //  navigate("/");

      window.location.reload();
  
      } catch (err) {
        console.log(err);
      }

    }

  };

  //name = property, we use it so that we dont need to write useState for every state
  return (
    <div>
      {editing ? (
          <EditOutlinedIcon onClick={handleClickOpen}/>
      )
      :(<Button variant="contained" onClick={handleClickOpen}>
        Add
      </Button>)}
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
                    <TextField id="outlined-basic" name="username" label="username" variant="outlined" style={{ marginTop: 5 }} onChange={handleInput}/>
                    <TextField id="outlined-basic" name="email" label="email"  variant="outlined" style={{ marginTop: 10 }} onChange={handleInput}/>
                    <TextField id="outlined-basic" name="mobile" label="Mobile No." variant="outlined" style={{ marginTop: 10 }} onChange={handleInput} />
                    <TextField id="outlined-basic" name="source" label="City to" placeholder="IITH" variant="outlined" style={{ marginTop: 10 }} onChange={handleInput}/>
                    <TextField id="outlined-basic" name="destination" label="City from" placeholder="IITH" variant="outlined" style={{ marginTop: 10}} onChange={handleInput}/>
                </Grid>

                <Grid item xs={6}>

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label" style={{ marginTop: 5 }}>Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" onChange={handleInput}/>
                                <FormControlLabel value="female" name="gender" control={<Radio />} label="Female" onChange={handleInput}/>
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
                        onChange={handleInput}
                        name="date"
                    />
                    <TextField
                        id="time"
                        name="time"
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
                        onChange={handleInput}
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
