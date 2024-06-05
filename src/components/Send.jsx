import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextInputType1 } from './TextInput';
import Button from '@mui/material/Button';
import './Send.css';
import {Link, useLocation} from 'react-router-dom';
import { doc,setDoc,getDoc, getDocs, query,where,collection, snapshotEqual,deleteField,updateDoc} from 'firebase/firestore'; 
import { db, db2 } from '../modules/db';
import { uid } from 'uid';
import { getDatabase, ref, set } from "firebase/database";
import MapView from './Map';

import Ref1 from '../assets/Ref1.jpg';
import Ref2 from '../assets/Ref2.jpg';
import Ref3 from '../assets/Ref3.jpg';
import Ref4 from '../assets/Ref4.jpg';

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
        if(uidRecovery && userRecovery){
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
      const lat = localStorage.getItem('lat');
      const lng = localStorage.getItem('lng');

  
    set(ref(db2,'users/' + uid_fromData +'/datauser'+ `/${hour}`),{
       cantidadref:cantprod,
       costoAzucar:costoRealAzucarPorprod,
       costoAgua:costoRealAguaPorprod,
       costoGas:costoRealGasPotprod,
       costoMateriaPrima:costotalM,
       hora:hour,
       lat:`${lat}`,
       lng:`${lng}`,
       ubicacion:{lat:lat, lng:lng}
    })

   

    
     
      
    }


   

    var Setting = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       useCss:true,
      
    }
  

    /**
     * 
     *  <div className='sectionSend0'>
              <Card variant='outlined' style={{
               borderRadius:20, textAlign:'center'}}>
                <h1>PEPSICO</h1>
                <p style={{fontSize:10}}>Created by: Juan HG</p>
               </Card>
            </div>
           
            <div className='sectionSend1'>
             <Card variant='outlined' style={{
              borderRadius:20,
              marginTop:25
             }}>
              <CardContent>

              <div className='corrusel'>
               <Slider {...Setting} className='slide1' >
                <div className='itemsSlide'>
                  <img className='imgSlide' src={Ref1} alt='Refresco 1' />
                  <h3>Refresco 1</h3>
                </div>

                <div className='itemsSlide'>
                <img className='imgSlide' src={Ref2} alt='Refresco 2' />
                <h3>Refresco 2</h3>
                </div>

                <div className='itemsSlide'>
                <img  className='imgSlide' src={Ref3} alt='Refresco 3' />
                <h3>Refresco 3</h3>
                </div> 

                <div className='itemsSlide'>
                <img  className='imgSlide' src={Ref4} alt='Refresco 4' />
                <h3>Refresco 4</h3>
                </div>
                
                <div className='itemsSlide'>
                <img  className='imgSlide' src={Ref3} alt='Refresco 5' />
                <h3>Refresco 5</h3>
                </div>
               </Slider>
              </div>


                
                <div className='cardsSections1'>
                  <Typography sx={{fontSize:13}} style={{
                    marginLeft:23
                  }}>
                    Ingresa la cantidad de refrescos:
                  </Typography>
                  <TextInputType1 size={20} onChangetx={handleInput1} label="Ingresa la cantida de refrescos: " />
                  <Button onClick={() => {calcMateriaPrima(datarf)}} variant='contained' className='button1'>Enviar</Button> 
                </div>
                
                <div className='cardsSections2'>
                 <Card>
                   <Typography>Ingresa una ubicacion de entrega: </Typography>
                   <div className='SectionMap'>
                   <MapView/>
                   </div>         
                 </Card>
                </div>

               
              </CardContent>
             </Card>


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
     */
    
           
   



    return(
        <>
        {statusClient ? (
         <>
         <h1>NO TIENES ACCESO</h1>
         <Link to='/'>Inicia sesion aqui</Link>
         </>
        ):(
            <div className='mainSend'>
             <Typography variant='p'>
              Code
             </Typography>
             <Card>
              <CardContent>
                <ul>
                  <li> <a href=' http://pastie.org/p/1zZzVCH8wHV4fUtdvaQv0X'>http://pastie.org/p/1zZzVCH8wHV4fUtdvaQv0X</a></li>
                </ul>
                
              </CardContent>
             </Card>
           
             </div>
        )}
        </>
    )
}