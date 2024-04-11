import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextInputType1 } from './TextInput';
import Button from '@mui/material/Button';
import './Send.css';

export default function Send(){

   

    const [datarf,setDatarf] = React.useState('');
    const [materiatotal, setMateriaPrimatotal] = React.useState('');
    const [costoTlAg, setCostoTlAg] = React.useState('');
    const [costoTlAz,setCostoTlAz] = React.useState('');
    const [costotlGs,setCostoTlGs] = React.useState('');

    const handleInput1 = (datas) =>{
        const data = datas;
        setDatarf(data);
        console.log(data);
      
    }

    function calcMateriaPrima(cantprod){
      const costAzucar = 0.80;
      const costAgua = 0.25;
      const costoGas = 10;

      const costoEnvasePorUnidad = 5;
      const azucarporunidad = 100;
      const aguaporunidad = 500;
      

      const costoTotalAzucar = cantprod * (azucarporunidad / 1000) * costAzucar;
      const costoTotalAgua = cantprod * (aguaporunidad / 1000) * costAgua;
      const costoTotalGas = cantprod * costoGas;
    

      const costoRealAzucar = costoTotalAzucar / cantprod; 
      setCostoTlAz(costoRealAzucar);
      const costoRealAgua = costoTotalAgua / cantprod;
      setCostoTlAg(costoRealAgua);
      const costoRealGas = costoTotalGas / cantprod;
      setCostoTlGs(costoRealGas);


      const costotalM = costoTotalAzucar + costoTotalAgua + costoTotalGas;
      setMateriaPrimatotal(costotalM);

      return costotalM;
    }

    

    
   



    return(
        <>
        <h1>REFRESCOS</h1>
        <p style={{fontSize:10}}>Created by: Juan HG</p>
        <Box sx={{minWidth:275}}>
         <Card variant='outlined' style={{
          borderRadius:20,
         }}>
          <CardContent>
            <Typography sx={{fontSize: 14}} style={{
                marginBottom:20,
                marginLeft:30
            }}>
                
            </Typography>
            
            <Typography sx={{fontSize:13}} style={{
                marginLeft:23
            }}>
                Ingresa la cantidad de refrescos:
            </Typography>
            <TextInputType1 size={20} onChangetx={handleInput1} label="Ingresa la cantida de refrescos: " />
            <Button onClick={() => {calcMateriaPrima(datarf)}} variant='contained' className='button1'>Enviar</Button>            
          
        
          </CardContent>
         </Card>
        </Box>
        {materiatotal ? (
            <Box sx={{minWidth:275}}>
            <Card variant='outlined' style={{
             borderRadius:20,
             marginTop:20
            }}>
             <CardContent>
               <Typography sx={{fontSize: 14}} style={{
                   
               }}>
                   Costo total de Azucar por unidad es: {`$${costoTlAz}`}
               </Typography>

               <Typography sx={{fontSize: 14}} style={{
                   
                }}>
                    Costo total de Agua por unidad es: {`$${costoTlAg}`}
                </Typography>

                <Typography sx={{fontSize: 14}} style={{
                   
                }}>
                    Costo total de Gaspor unidad es: {`$${costotlGs}`}
                </Typography>
                <Typography sx={{fontSize: 14}} style={{
                   
                }}>
                    Costo total de Materia Prima es: {`$${materiatotal}`}
                </Typography>

                <Button onClick={() => {setMateriaPrimatotal('')}}>CLEAR</Button>
           
             </CardContent>
            </Card>
           </Box>
        ):(
            <>
            
            </>
        )}
        </>


    )
}