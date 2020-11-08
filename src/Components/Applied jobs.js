import React, { useState ,useEffect} from 'react'
import Getdata from './Components/Servercall.js'

function Applied(){
   useEffect(()=>{
 Getdata().then((res)=>{
     //alert('message')
     setinfo(res.data)
 }


    )
 
 
   },[])
   
   
    const [info,setinfo]=useState([])
    return(
        <div>
            
            {
                info.map((obj,index)=>{
                return(<div className="card"style={{backgroundColor:'lightblue'}}><li>{obj.id}</li>
                <li>{obj.username}</li>
              </div>)
                })
            
            } 
           
    </div>

     ) }
        export default Applied
