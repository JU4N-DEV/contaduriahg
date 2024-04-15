
import './Nav.css';
import { Outlet,Link } from "react-router-dom";
import {uid} from "uid";
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import FolderIcon from '@mui/icons-material/Folder';

export default function Nav(){


   const uiduser = uid(10);


    return(
        <div className='navmain'>
          <div className="NavBar">
            <nav className="navbar">
                <ul className="navlist">
                    <li className="navitem">
                      <Link to={`Send`}><SendIcon/></Link>

                    </li>
                    <li className="navitem">
                      <Link to={'Storage'}><FolderIcon/></Link>
                    </li>
                  
               
                </ul>
               
            </nav>
            
          </div>
         
          <div id='details'>
            <Outlet/>
          </div>
        </div>
    )
}