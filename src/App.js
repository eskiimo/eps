import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import ResponsiveAppBar from './components/nav/NavBar';
import HomePage from './pages/homepage';
import HistoryPage from './pages/history';
import ContactPage from './pages/contactpage';
import AboutPage from './pages/aboutpage';


const App=()=>  {
    return (
      <div>
     <Router>
     <ResponsiveAppBar/>
     <div className='content'>
     <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/history" element={<HistoryPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
     </div>
     </Router>
      </div>
    );
  
}

export default App;
