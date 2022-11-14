import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './servicepage.css';

const ServicePage = () => {
   const [obj,setObj]=useState({})
   const location = useLocation()
   
   useEffect(()=>{
      console.log(location.state)
      setObj(location.state.props)    
   })
   return (
      <div className="section service-page">
         <div className='row '>
            <div className='col col-md-6 scol'>
               <img src={obj.jobImage} />
               <button onClick={()=>{alert("will open Modal")}}> calculate</button>
            </div>
            <div className='col col-md-6'>
               <h1>{obj.jobTitle}</h1>
               <h3>{obj.jobDesc}</h3>
            </div>
         </div>
      </div>
   );
};
export default ServicePage;
