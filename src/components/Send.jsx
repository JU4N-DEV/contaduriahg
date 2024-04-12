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
    const [costoTlAgMatrp,setCostoTlAgMatrp] = React.useState('');
    const [constoTlAzMatrp, setCostoTlAzMatrp] = React.useState('');
    const [costoTlGsMatrp, setCostoTlGsMatrp] = React.useState('');



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
      
      //Tmar en cuanta costo de envase 
      //mostrar costos por azucar en vase a cantidad de productos tal que costoazucar * cantprod

      const costoTotalAzucar = cantprod * (azucarporunidad / 1000) * costAzucar;
      const costoTotalAgua = cantprod * (aguaporunidad / 1000) * costAgua;
      const costoTotalGas = cantprod * costoGas;
      
      const costoRealAzucarPorprod = cantprod * costAzucar;
      setCostoTlAz(costoRealAzucarPorprod);
      const costoRealAguaPorprod = cantprod * costAgua;
      setCostoTlAg(costoRealAguaPorprod);
      const costoRealGasPotprod = cantprod * costoGas;
      setCostoTlGs(costoRealGasPotprod);


      const costoRealAzucar = costoTotalAzucar / cantprod; 
      setCostoTlAzMatrp(costoRealAzucar);
      const costoRealAgua = costoTotalAgua / cantprod;
      setCostoTlAgMatrp(costoRealAgua);
      const costoRealGas = costoTotalGas / cantprod;
      setCostoTlGsMatrp(costoRealGas);


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
                   Costo total de Azucar: {`$${costoTlAz}`}
               </Typography>

               <Typography sx={{fontSize: 14}} style={{
                   
                }}>
                    Costo total de Agua: {`$${costoTlAg}`}
                </Typography>

                <Typography sx={{fontSize: 14}} style={{
                   
                }}>
                    Costo total de Gas: {`$${costotlGs}`}
                </Typography>
                <Typography sx={{fontSize: 14}} style={{
                   
                }}>
                    Costo total de Materia Prima es:{`$${materiatotal}`}
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