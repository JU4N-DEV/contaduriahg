import React from "react";
import mapboxgl from "mapbox-gl";
import Map,{Marker,GeolocateControl,NavigationControl} from "react-map-gl";

import './Map.css'
import { Typography } from "@mui/material";





export default function MapView(){
 
    const refmap = React.useRef(null);
    
    const [useSelectL, setSelectL] = React.useState([]);
    const [markerpoint,setmarkerPoint] = React.useState({});
    const [lat,setLat] = React.useState('');
    const [lng, setLng] = React.useState('');
    
    mapboxgl.accessToken=import.meta.env.VITE_MAPBOX;
    
    
    
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
    
    
    React.useEffect(()=>{
        const map = new mapboxgl.Map({
            container:refmap.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            
        })
        
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.GeolocateControl());
        
        const lat = Object.values(markerpoint).map((dz)=>dz.lat);
        const lng = Object.values(markerpoint).map((dz)=>dz.lng );
    
        
       
        map.on('click',(e)=>{
            setSelectL(e)
            setmarkerPoint(e.lngLat)            
            localStorage.setItem('lat',e.lngLat.lat);
            localStorage.setItem('lng', e.lngLat.lng)
            new mapboxgl.Marker().setLngLat(e.lngLat).addTo(map);
        })          

        

        console.log(markerpoint)           
    },[])
    return(
    <>
    <div id="map" ref={refmap}></div>
    </>
    
    )
} 

