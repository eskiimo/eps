import React from 'react';
import CardList from '../components/jobcard/cardlist';
import ContactPage from './contactpage';
import './homepage.css';

const HomePage = () => {
   const jobs = [
      {
         image: 'https://picsum.photos/318/180',
         title: 'Residual current Device testing',
         desc: 'Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD. Earth leakage increases with each additional electrical appliance that is plugged in, and if RCD keeps tripping out it may be an overloaded circuit. Any faults we recommend that you have your wiring and appliances checked by an electrician to ascertain the fault if a RCD keeps tripping. The majority of electrical fatalities could have been prevented by the use of a properly installed RCD, and regular testing to ensure they are working correctly',
      },
      {
         image: 'https://picsum.photos/318/180',
         title: 'lorem',
         desc: 'sdsdjskdjskdjskdjskdj',
      },
      {
         image: 'https://picsum.photos/318/180',
         title: 'lorem',
         desc: 'sdsdjskdjskdjskdjskdj',
      },
      {
         image: 'https://picsum.photos/318/180',
         title: 'lorem',
         desc: 'sdsdjskdjskdjskdjskdj',
      },
   ];
   return (
      <>
         <div className="section section-1" id="section-1">
            <p className="txt-secondary">Electric Utility Provider</p>
            <p className="txt-primary">Electrical testing and measurements.</p>
            <p className="txt-desc">ESP</p>
            <button className="buton">SEE MORE ..</button>
         </div>

         <div className="section section-2" id="section-2">
            <p className="header1">
               Our <span className="header2">Services</span>
            </p>

            <div className=" row center">
               <CardList list={jobs} />
            </div>
         </div>

         <ContactPage />
      </>
   );
};
export default HomePage;
