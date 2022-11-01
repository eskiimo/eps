import React from 'react';
import { Card, CardImg } from 'reactstrap';

import './projectcard.css'


const ProjectCards = (props) => {
    return props.list.map((item)=>(
        <div className='col-xs-12 col-md-3 projectcard' >
             <Card>
               <CardImg
                  alt="Card image cap"
                  src={item.image}
                  top
                  width="100%"
               />
             
               {/* <div className='overlay'>
                 <div>
                    <h1 className='name'>
                        {item.name}
                    </h1>
                    <div className='title'>
                        <h2>
                           {item.title}
                        </h2>
                        <p>{item.desc}</p>
                    </div>
                 </div>
               </div> */}
            </Card>
        </div>
    ))
}
 
export default ProjectCards;