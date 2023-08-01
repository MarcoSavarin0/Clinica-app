
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import Profesionales from './components/Profesionales';
import Turno from './components/Turno';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/profesionales' element={ < Profesionales/>} />
      <Route path='/turnos' element={ < Turno/>} />
      </Routes> 
      <Footer/>
    </Router>
    </>
  );
}

export default App;
