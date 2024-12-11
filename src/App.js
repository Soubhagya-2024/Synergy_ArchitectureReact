import React from 'react';
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section4 from './component/Section4';
import Projects from './component/Projects';
//import Testimonal from './component/Testimonal';
import News from './component/News';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </Router>
      <Section1/>
      <Section2/>
      <Section4/>
      <Projects/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
