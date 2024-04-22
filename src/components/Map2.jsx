import React from "react";
import mapboxgl from "mapbox-gl";

import './Map2.css'
import { Typography } from "@mui/material";
import { Marker, MapContainer, TileLayer} from 'react-leaflet'



export default function MapView2({lati,longi}){
    const refmap = React.useRef(null);
    
    const [useSelectL, setSelectL] = React.useState([]);
    const [markerpoint,setmarkerPoint] = React.useState({});
    const [lat,setLat] = React.useState('');
    const [lng, setLng] = React.useState('');
    

    const position = [51.505, -0.09]
    return(
    <>
    <MapContainer className="map" center={[lati,longi]} zoom={13}>
       <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
        <Marker position={[lati,longi]}/>
    </MapContainer>
    </>
    
    )
} 


