import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextInputType1 } from './TextInput';
import Button from '@mui/material/Button';
import './Send.css';
import {useLocation} from 'react-router-dom';
import { doc,setDoc,getDoc, getDocs, query,where,collection, snapshotEqual,deleteField,updateDoc} from 'firebase/firestore'; 
import { db, db2 } from '../modules/db';
import { uid } from 'uid';
import { getDatabase, ref, set } from "firebase/database";


export default function Send(){

    const location = useLocation(); 
    const searchParams = new URLSearchParams(location.search)
    const uidUser = searchParams.get('uid');
    const userName = searchParams.get('user');
    const [datarf,setDatarf] = React.useState('');
    const [materiatotal, setMateriaPrimatotal] = React.useState('');
    const [costoTlAg, setCostoTlAg] = React.useState('');
    const [costoTlAz,setCostoTlAz] = React.useState('');
    const [costotlGs,setCostoTlGs] = React.useState('');
    const [costoTlAgMatrp,setCostoTlAgMatrp] = React.useState('');
    const [constoTlAzMatrp, setCostoTlAzMatrp] = React.useState('');
    const [costoTlGsMatrp, setCostoTlGsMatrp] = React.useState('');
    const [cantProd,setCantPord] = React.useState('')
    const [statusClient, setStatusClient] = React.useState(false);


    useEffect(()=>{

        const uidRecovery = localStorage.getItem('uid');
        const userRecovery = localStorage.getItem('userName');
        console.log('User:', userName)
        if(uidRecovery.length>0 && userRecovery.length>0){
            setStatusClient(false);
        }else{
            setStatusClient(true);
        }

    },[])
   
    const handleInput1 = (datas) =>{
        const data = datas;
        setDatarf(data);
        console.log(data);
      
    }

 const  calcMateriaPrima = async (cantprod)  =>  {
      const costAzucar = 0.80;
      const costAgua = 0.25;
      const costoGas = 10;
      setCantPord(cantProd)
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

      const day = new Date();
      const hour = `${day.getHours()}:${day.getSeconds()}`
      

      const uid_fromData = localStorage.getItem('uid')
  

      /**
       *   await setDoc(doc(db,"refresosdata",uid_fromData,"repouser"),{
        cantidadref:cantprod,
        costoAzucar:costoRealAzucarPorprod,
        costoAgua:costoRealAguaPorprod,
        costoGas:costoRealGasPotprod,
        costoMateriaPrima:costotalM,
        hora:hour
    })
 
       * 
       */
  
    set(ref(db2,'users/' + uid_fromData +'/datauser'+ `/${hour}`),{
       cantidadref:cantprod,
       costoAzucar:costoRealAzucarPorprod,
       costoAgua:costoRealAguaPorprod,
       costoGas:costoRealGasPotprod,
       costoMateriaPrima:costotalM,
       hora:hour
    })

   

    
     
      
    }


   

  

    

    
   



    return(
        <>
        {statusClient ? (
         <h1>NO TIENE ACCESO </h1>
        ):(
            <>
            <p style={{fontSize:10}}>Created by: Juan HG</p>
            <Box sx={{minWidth:275}}>
            <Card variant='outlined' style={{
            borderRadius:20, textAlign:'center'}}>
             <h1>REFRESCOS</h1>
            </Card>
             <Card variant='outlined' style={{
              borderRadius:20,
              marginTop:25
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
        )}
        </>
    )
}