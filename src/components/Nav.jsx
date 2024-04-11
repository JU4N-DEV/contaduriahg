
import './Nav.css';
import { Outlet,Link } from "react-router-dom";
import {uid} from "uid";
import Home from '@mui/icons-material/Home';


export default function Nav(){


   const uiduser = uid(10);

    return(
        <div className='navmain'>
          <div className="NavBar">
            <nav className="navbar">
                <ul className="navlist">
                    <li className="navitem">
                      <Link to={'Home'}><Home/></Link>
                    </li>
                    <li className="navitem">
                      <Link to={`Send/${uiduser}`}>Send</Link>

                    </li>
                    <li className="navitem">
                      <a>View</a>
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