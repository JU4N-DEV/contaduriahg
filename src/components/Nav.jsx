
import './Nav.css';
import { Outlet,Link } from "react-router-dom";
import {uid} from "uid";
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import FolderIcon from '@mui/icons-material/Folder';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import React from 'react';

export default function Nav(){

  const [stateLogOut,setStateLogOut] = React.useState(false);


  const handleLogOut = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('userName');
    setStateLogOut(false)
  
  }

  React.useEffect(()=>{
    const statusUID = localStorage.getItem('uid');
    const statusUSER = localStorage.getItem('userName');

    if(statusUID && statusUSER){
      setStateLogOut(true);
    }else{
      setStateLogOut(false);
    }
  },[])


    return(
        <>
         <div className='navmain'>
          
            <nav className="navbar">
                <ul className="navlist">
                    <li className="navitem">
                      <Link to={`Send`}>SEND</Link>

                    </li>
                    <li className="navitem">
                      <Link to={'Storage'}>DATABASE</Link>
                    </li>
                    <li className="navitem">
                    { stateLogOut ? (<Button variant='text' onClick={()=>handleLogOut()}> <LogoutIcon/></Button>):(<></>)}
                    </li>
                  
               
                </ul>
               
               
               
            </nav>
        
         </div>
         
        <div id='details'>
          <Outlet/>
        </div>
        </>
       
    )
}