import React, { useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

import './jobcard.css';

const JobCard = (props) => {
   var cropped = props.jobDesc.substring(0, 50) + '...';
   return (
      <div className="col-sm-6 col-md-6 whole-card">
         <Card>
            <CardImg
               alt="Card image cap"
               src={props.jobImage}
               top
               width="100%"
            />
            <CardBody>
               <CardTitle className="txt-secondary" tag="h5">
                  {props.jobTitle}
               </CardTitle>

               <CardText className="txt-desc">{cropped}</CardText>
            </CardBody>
         </Card>
      </div>
   );
};

export default JobCard;
