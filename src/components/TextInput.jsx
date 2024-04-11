import { useEffect, useState } from "react";
import './TextInput.css';

function sizeIn(number){

    const rs = number * 10;
    return rs;
}




export function TextInputType1({size, onChangetx,value,label,...rs }) {


    const [data, setData] = useState('');
    const [sz,setSz] = useState('');
    const [focused, setFocused] = useState(false); 

    useEffect(()=>{
        const setsize = sizeIn(size);
        setSz(setsize);
    },[])

    return(

        <input
         type="text"
         onChange={(e) => {
            
            const txe = e.target.value;

            setData(txe);
            if(onChangetx){
                onChangetx(txe);
            }
         }}
         onFocus={() => setFocused(true)}
         onBlur={() => setFocused(false)} 
         style={{
            width:sz,
            marginLeft:20,
            marginRight:20,
            padding:10,
            borderColor:focused ? '#25BBF3' : '#000',
            borderRadius:7.5,
            borderBlockStyle:'-moz-initial'
        
         }}
         className="inputtype1"
         value={value}
         aria-label={label}
         {...rs}
        />
    )



}