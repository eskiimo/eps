import React from 'react';
import './footer.css';

const Footer = () => {
   return (
      <div className="footer">
         <div className="row ">
            <div className="col col-md-4">
               <p className="txt txt-secondary">About</p>{' '}
               <p className="txt desc">
                  Quisque imperdiet sapien porttito the bibendum sellentesque
                  the commodo erat acar accumsa lobortis, enim diam the nesuen.{' '}
               </p>
               <div className="row icons">
                  <div className="col contact-icon">
                     <a
                        href="//github.com/eskiimo"
                        target="_blank"
                        rel="noreferrer"
                     >
                        {' '}
                        <i className="fab fa-whatsapp"> </i>{' '}
                     </a>
                  </div>
                  <div className="col contact-icon">
                     <a
                        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmohamed-el-hosary-19180a66%3Ffbclid%3DIwAR2xHXh4DBBt40nMm0gIFVkhwzicpMcQLVj079zyaRwSqFbiu3djp_gWmUE&h=AT3S3Oa6t4I9AvW3J1VheUmQ9XG0F0c7V4_mNHlF9YG9JLgdW76GuPWU6pCt5AwywPDseUzYCia7JV6aylAn5WhfOv-T_WYAdHMcVsysW0DfxW_RfIoqSMR8lNS5Kg"
                        target="_blank"
                        rel="noreferrer"
                     >
                        {' '}
                        <i className="fab fa-linkedin"> </i>{' '}
                     </a>
                  </div>

                  <div className="col contact-icon">
                     <a
                        href="https://www.facebook.com/EPSHOSARY"
                        target="_blank"
                        rel="noreferrer"
                     >
                        {' '}
                        <i className="fab fa-facebook"> </i>{' '}
                     </a>
                  </div>
               </div>
            </div>
            <div className="col col-md-4">
               {/* <p className="txt txt-secondary"> Quick Links</p>{' '} */}
            </div>
            <div className="col col-md-4">
               <p className="txt txt-secondary">Email</p>
               <p className="txt desc">
               info@eps.com.eg{' '}
               </p>
            </div>
         </div>
         <div className=" rights">
            {' '}
            &#169; 2022<span> EPS. </span> All rightes reserved.
         </div>
      </div>
   );
};
export default Footer;
