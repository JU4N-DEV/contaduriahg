import React from "react";
import { TextField, Button,Card,CardContent,Box } from "@mui/material";
import { authP } from "../modules/db";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './SingUp.css';

export default function SingUp() {

    const [email,setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const navigate = useNavigate();

    function changeInput1(e){
      const dataInp1 = e.target.value;
      setEmail(dataInp1);
    }

    function changeInput2(e){
      const dataInp2 = e.target.value;
      setPass(dataInp2);
    }

    function handelSingUp(){
     createUserWithEmailAndPassword(authP,email,pass)
     .then((userCredentials) => {
        const uid_user = userCredentials.user.uid;
        const user = userCredentials.user.email;
        localStorage.setItem('uid',uid_user);
        localStorage.setItem('userName', user);
        navigate(`/Send?uid=${uid_user}&user=${user}`);

     })
    }

    return(
        <>
         <Box sx={{minWidth:275}}>
          <Card variant="outlined" className="cardSingUp">
            <CardContent>
                <h1>Sing Up</h1>
                <TextField
                id="email"
                label="Email"
                variant="outlined"
                onChange={changeInput1}
                value={email}
                style={{marginTop:20}}
                />
                <TextField
                id="pass"
                label="Password"
                variant="outlined"
                onChange={changeInput2}
                value={pass}
                style={{marginTop:20}}
                />

                <Button variant='contained' onClick={()=>handelSingUp()} style={{marginTop:20}}>ENTER</Button>
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