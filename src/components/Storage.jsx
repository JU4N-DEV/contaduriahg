import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import './Storage.css';
import { doc,setDoc,getDoc, getDocs, query,where,collection, snapshotEqual,updateDoc,deleteField} from 'firebase/firestore'; 
import { db2 } from "../modules/db";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { onValue, ref } from "firebase/database";
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import MapView from "./Map";
import MapView2 from "./Map2";

export default function Storage(){
    

    const [data, setData] = React.useState([]);
    const [dataStatus, setDataStatus] = React.useState(false);
    const [clientStatus, setClientStatus] = React.useState(true);
    const [latitude, setLatitude] = React.useState([]);
    const [longitude, setLongitude] = React.useState([]);
    const [positionm, setPositionM] = React.useState([]);
    useEffect(()=>{
        const uidUser = localStorage.getItem('uid');
        const user = localStorage.getItem('userName');

        if(uidUser && user){
            setClientStatus(false);
        }else{
            setClientStatus(true);
        }
    },[])



 

    useEffect(()=>{
        const uid = localStorage.getItem('uid')
        try {
            onValue(ref(db2,`/users/${uid}/datauser/`), (snapshot) => {
                const datas = snapshot.val();
                if(datas){
                    const state = Object.values(datas).map((dat)=>dat);
                    const state_latitude = Object.values(datas).map((dat) => dat.lat);
                    setLatitude(state_latitude);
                    const state_longitude = Object.values(datas).map((dat) => dat.lng);
                    setLongitude(state_longitude);
                    setPositionM([state_latitude, state_longitude])
                    console.log("Reasponse data lat:", state_latitude)
                    const state_reverse = Object.values(state).reverse();
                    console.log("Prueba: ",state_reverse)
                
                    setData(state_reverse)
                    console.log(datas)
                    setDataStatus(true)
                }else{
                    setData(null);
                }
            })
        } catch (error) {
            console.log("Error",error)
        }
      
    },[])

   


    return(

        <>
        {clientStatus ? (
            <>
            <h1>NO TIENES ACCESO</h1>
            <Link to='/'>Inicia sesion aqui</Link>
            </>
        ):(
            <>
            {dataStatus ? (
                
                  <TableContainer component={Paper} className="one">
                    <Table sx={{maxWidth:150,}} aria-label="simple table" style={{
                    
                    }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Cantidad de Refrescos</TableCell>
                                <TableCell align="rigth">Total Azucar</TableCell>
                                <TableCell align="rigth">Total Agua</TableCell>
                                <TableCell align="rigth">Total Gas</TableCell>
                                <TableCell align="rigth">Total Materia Prima</TableCell>
                                <TableCell align="rigth">Hora</TableCell>
                                <TableCell align="rigth">Latitude</TableCell>
                                <TableCell align="rigth">Longitude</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((dat) => (
                                <TableRow key={dat.hora}>
                                <TableCell align="rigth">{dat.cantidadref}</TableCell>
                                <TableCell align="rigth">{dat.costoAzucar}</TableCell>
                                <TableCell align="rigth">{dat.costoAgua}</TableCell>
                                <TableCell align="rigth">{dat.costoGas}</TableCell>
                                <TableCell align="rigth">{dat.costoMateriaPrima}</TableCell>
                                <TableCell align="rigth">{dat.hora}</TableCell>
                                <TableCell align="rigth">{dat.lat}</TableCell>
                                <TableCell align="rigth">{dat.lng}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                  </TableContainer>
                
                
            ):(
    
                <h2>Esperando datos....</h2>
    
            )}
            <Typography>Ubicacion de tus pedidos: </Typography>
              <MapView2 />
            </>
        )}
        
        </>


    )
}