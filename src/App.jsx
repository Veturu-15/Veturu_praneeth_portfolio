import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidenav from './Sidenav';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Port from './Port';
function App() {
  return (
    <div className="Main">
      <Router>
        <Routes>
          <Route path="/Veturu_praneeth_portfolio" element={<Sidenav />} /> 
          <Route path="/about" element={<About />} />
         <Route path="/skill" extact element={<Skills/>}/>
         <Route path='/port' element={<Port/>}/>
         <Route path='/contact' extact element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
