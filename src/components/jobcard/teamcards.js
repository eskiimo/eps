import React from 'react';
import { Card, CardImg } from 'reactstrap';

import './teamcards.css';

const TeamCards = (props) => {
  return props.list.map((item =>(
    <div key={item.title} className="col-sm-6 col-md-4 teamcard whole-card">
           
            <Card>
               <CardImg
                  alt="Card image cap"
                  src={item.image}
                  top
                  width="100%"
               />
             
               <div className='overlay'>
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
               </div>
            </Card>
           
           
        </div>
  )))
};

export default TeamCards;
