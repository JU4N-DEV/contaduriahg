import React from "react";

import './Map.css'
import { Typography } from "@mui/material";
import { MapContainer, Marker , TileLayer,useMapEvents} from "react-leaflet";
import {map} from 'leaflet'



export default function MapView(){
 
    const refmap = React.useRef(null);
    
    const [useSelectL, setSelectL] = React.useState([]);
    const [markerpoint,setmarkerPoint] = React.useState({});
    const [lat,setLat] = React.useState('');
    const [lng, setLng] = React.useState('');
    
    
    
    
    
    /**
     React.useEffect(()=>{
        
         const datas = Object.values(markerpoint).map((dx) =>dx.lat);
         setLat(markerpoint);
    },[markerpoint])
    

    React.useEffect(()=>{
      console.log("Datas1:",lat)
    },[lat])


    function Markers({lat,lng}) {
        
        const [latitude, setLatitude] = React.useState('');
        const [longitude, setLongitude] = React.useState('');


        React.useEffect(()=>{
           if(lat && lng){
            setLatitude(lat);
            setLongitude(lng);            
           }
        },[lat,lng])
        
        
        return(
            <>
             <Marker latitude={latitude} longitude={longitude}/>
            </>
        )
    }


    */

   
    
    
    

    

    const handlecicktoMaker =(e) =>{
        setmarkerPoint(e.latlng)
        console.log("Data click: ", e.latlng)
    }

   

    return( 
    <>
    <MapContainer id='map' onClick={handlecicktoMaker} className="map" center={[51.505, -0.09]} zoom={13}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    </MapContainer>
    </>
    
    )
} 

