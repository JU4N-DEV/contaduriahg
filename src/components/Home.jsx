import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextInputType1 } from './TextInput';

export default function Home(){

    useEffect(() => {
     
    },[])

    const [datarf,setDatarf] = useState('');

    const handleInput1 = (datas) =>{
        const data = datas;
        setDatarf(data);
        console.log(data);
      
    }


    function calcularCostoMateriaPrima(cantproductos){
      return 7 * cantproductos;
    }



  return(
    <>
    
    <Box sx={{minWidth:275, textAlign:'center'}} >
      <Card variant='outlined' style={{
        borderRadius:20,
      }}>
        
        <h1>BIENVENIDO</h1>
      </Card>
    </Box>
    </>

  );


}