import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import {Button,TextField,FormControlLabel,Checkbox,Grid,Box,Typography,Container} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@mui/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; 
const useStyles = makeStyles({
 
    paper: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: 1,
      backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    form: {
      width: '60%', 
      marginTop: 1,
    },
    submit: {
      margin: 3
     
    },
     error  :{
      color:'red',
  },
  });
export default  Signup = () => {
    const classes = useStyles();

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [role, setRole] = useState("");
    const createUser=async (user)=>{
        const newuser = {
            nom:username,
            email:email,
            password:password,
            role:role,

        }


    }
    
  return (
    <div></div>
  )
}
