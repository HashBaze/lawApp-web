import './App.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import Service from './Components/Service.js';
import PrivacyPolicy from './Components/PrivacyPolicy.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <Router>
    <div className="App">
          <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        </Routes >
          <Footer/>
         
    </div>
    
    </Router>
  );
}

export default App;
