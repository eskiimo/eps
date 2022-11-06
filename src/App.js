import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ResponsiveAppBar from './components/nav/NavBar';
import HomePage from './pages/homepage';
import ContactPage from './pages/contactpage';
import Blogs from './pages/blogs';

const App = () => {
   return (
      <div>
         <Router>
            <ResponsiveAppBar />
            <div className="content">
               <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/contact" element={<ContactPage />}></Route>

                  
                  <Route path="/blogs" element={<Blogs />}></Route>
               </Routes>
            </div>
         </Router>
      </div>
   );
};

export default App;
