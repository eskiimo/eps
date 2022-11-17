import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ResponsiveAppBar from './components/nav/NavBar';
import HomePage from './pages/homepage';
import ContactPage from './pages/contactpage';
import ServicePage from './pages/ServicePage';

const App = () => {
   return (
      <div className='app'>
         <Router>
            <ResponsiveAppBar />
            <div className="content">
               <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/contact" element={<ContactPage />}></Route>
                  <Route path="/services/:serviceId" element={<ServicePage />}></Route>
               </Routes>
            </div>
         </Router>
      </div>
   );
};

export default App;
