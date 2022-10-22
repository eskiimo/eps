import React, { useState } from 'react';
import JobCard from './jobcard';

const CardList = (props) => {
   return props.list.map((card) => (
      <JobCard
         jobImage={card.image}
         jobTitle={card.title}
         jobDesc={card.desc}
      />
   ));
};

export default CardList;
