import React from 'react';
import { TextInputType1 } from './TextInput';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { authP } from '../modules/db';
import { useNavigate } from 'react-router-dom';

export default function Login(){

    
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const navigate = useNavigate();


    function handleSingUp(){

    }

    function handleLogin(){
        signInWithEmailAndPassword(authP,email,pass)
        .then((userCreentials) => {
            console.log("Login correct")
            const uid_user = userCreentials.user.uid;
            const user = userCreentials.user.email;
            localStorage.setItem('uid',uid_user);
            localStorage.setItem('userName', user);
            navigate(`/Send?uid=${uid_user}&user=${user}`)


        })
    }
 
    function changeInput1(e){

        const dataEmail = e.target.value;
        setEmail(dataEmail);
    }

    function changeInput2(e){
        const dataPass = e.target.value;
        setPass(dataPass);
    }

    return(

        <>
          <Box sx={{minWidth:275}}>

            <Card variant='outlined'>
                <CardContent>
                <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                onChange={changeInput1}
                value={email}
                />
                <TextField
                 id="outlined-basic" 
                 label="Password" 
                 variant="outlined"
                 onChange={changeInput2}
                 value={pass}
                 security={true}
                 
                />

                <Button variant='outlined' onClick={()=>handleLogin()}>ENTER</Button>



                    
                </CardContent>
            </Card>
          </Box>
        </>
    )
}


