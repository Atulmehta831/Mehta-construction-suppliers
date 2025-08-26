import React ,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Transformers from './pages/Transformers';
import Complaints  from './pages/Complaints';
import ContactForm from './pages/ContactForm';
import Navbar from './components/Navbar';
import Store from './pages/Store';
import Poles from './pages/Poles';
import Maintenance from './pages/Maintenance';
import AlertBanner from './components/AlertBanner';
import WeatherAlert from './components/WeatherAlert';
import Footer from './pages/Footer';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Sale from './pages/Sale'

function App() {

  const [cart , setCart] = useState([]);
  return (
    <BrowserRouter>
      <AlertBanner />
      <WeatherAlert />
      
     <Navbar cart={cart} />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transformers" element={<Transformers  cart={cart} setCart={setCart} />} />
        <Route path="/poles" element={<Poles cart={cart} setCart={setCart} />} />
        <Route path="/store" element={<Store />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="*" element={<Home />} />
        <Route path ="/cart" element ={<Cart cart={cart} setCart={setCart} /> } />
        <Route path ="/auth" element ={<Auth />} />
        <Route path ="/sale" element ={<Sale />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
