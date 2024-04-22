import React from "react";

import { onValue, ref } from "firebase/database";
import { db2 } from "../modules/db";
import './Map2.css'
import { Typography } from "@mui/material";
import { Marker, MapContainer, TileLayer} from 'react-leaflet'



export default function MapView2(){
    const refmap = React.useRef(null);
    
    const [useSelectL, setSelectL] = React.useState([]);
    const [markerpoint,setmarkerPoint] = React.useState([]);
    const [lat,setLat] = React.useState('');
    const [lng, setLng] = React.useState('');
    const [mapState, setMapState] =  React.useState([]);


    React.useEffect(()=>{
        const uid = localStorage.getItem('uid')
        try {
            onValue(ref(db2,`/users/${uid}/datauser/`), (snapshot) => {
                const datas = snapshot.val();
                if(datas){
                 const data_location = Object.values(datas).map((data) => data.ubicacion)
                 console.log("data location:",data_location);
                 setmarkerPoint(data_location);
                }else{
                    console.log("Ocurrio un error")
                }
            })
        } catch (error) {
            console.log("Error",error)
        }
      
    },[])


    const poserr = [51.505, -0.09]

    return(
    <>
    
    <MapContainer className="map" center={[51.505, -0.09]} zoom={13}>
       <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       {markerpoint.map((data) => (
        <>
        <Marker key={data.lat} position={data} />
        </>
       ))}

    </MapContainer>
    </>
    
    )
} 


