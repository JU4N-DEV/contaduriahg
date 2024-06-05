import React, { useEffect } from 'react';
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
import './Login.css';


export default function Login(){

    
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [stateClient,setStateClient] = React.useState(false);
    const navigate = useNavigate();


    function handleSingUp(){

    }

    useEffect(()=>{
        const uid_US = localStorage.getItem('uid');
        const user_NM = localStorage.getItem('userName');

        if(uid_US && user_NM){
            setStateClient(true);
            console.log('Data 1:', uid_US,user_NM)
            navigate(`/Send?uid=${uid_US}&user=${user_NM}`);
        }else{
           setStateClient(false);
        }
    },[])


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

    function handlerdirectSingIn(){
      navigate('/SingUp');
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
            
            <Card variant='outlined' className='cardLogin1'>
                <CardContent>
                <h1>Login</h1>
                <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                onChange={changeInput1}
                value={email}
                style={{marginTop:20}}
                />
                <TextField
                 id="outlined-basic" 
                 label="Password" 
                 variant="outlined"
                 onChange={changeInput2}
                 value={pass}
                 security={true}
                 style={{marginTop:20}}
                 
                />

                <Button variant='contained' onClick={()=>handleLogin()} style={{marginTop:20}}>ENTER</Button>

                <div className='section-reg'>
                    <Button  style={{marginTop:10, textAlign:4}} onClick={()=>handlerdirectSingIn()}>Registrarse</Button>

                </div>

            <Card>
              <CardContent>
                <ul>
                  <li> <a href=' http://pastie.org/p/1zZzVCH8wHV4fUtdvaQv0X'>http://pastie.org/p/1zZzVCH8wHV4fUtdvaQv0X</a></li>
                </ul>
                
              </CardContent>
             </Card>
           

                    
                </CardContent>
            </Card>
          </Box>
        </>
    )
}


