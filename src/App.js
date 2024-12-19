// src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Marquee from './Components/Marquee';
import Header from './Components/Header';
import Home from './Components/Home';
import KurtiProduct from './ProductPage/KurtiProduct';
import SpotLightProduct from './ProductPage/SpotLightProduct';
import BrandProduct from './ProductPage/BrandProduct';
import { CartProvider } from './Context/Context'; // Import the provider
import Favorites from './Components/Favourite';
import LehengaProduct from './Pages/Women/Lehenga/LehengaProduct';
import AnarkaliProduct from './Pages/Women/Anarkali/AnarkaliProduct';
import KurtiProducts from './Pages/Women/Kurtis/KurtiProducts';
import JeansProducts from './Pages/Women/Jeans/JeansProducts';
import HeelsProduct from './Pages/Women/Heels/HeelsProduct';
import FlatsProduct from './Pages/Women/Flats/FlatsProduct';
import Sarees from './Pages/Women/Sarees/Sarees';
import Skirts from './Pages/Women/Skirts/Skirts'
import Tops from './Pages/Tops/Tops';
import JeansMen from './Pages/Men/Jeans/JeansMen';
import Shirt from './Pages/Men/Shirt/Shirt';
import Shorts from './Pages/Men/Shorts/Shorts';
import Sneakers from './Pages/Men/Sneakers/Sneakers';
import Suits from './Pages/Men/Suits/Suits';
import Tshirt from './Pages/Men/T-shirt/T-shirt';
import Boy from './Pages/Kids/Boy/Boy';
import Dress from './Pages/Kids/Dresses/Dress';
import KidTop from './Pages/Kids/KidTop/KidTop';
import Short from './Pages/Kids/Short/Short';
import Cart from './Components/Cart';
import Sign from './Components/Sign';
import Login from './Components/Login';
import Pay from './Components/Pay';


function App() {
  return (
    <CartProvider> {/* Wrap the application with the provider */}
      <BrowserRouter>
        <div>
          <Marquee />
          <Header />
          <Navbar />
        </div>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/kurtiproduct/:id" element={<KurtiProduct />} />
          <Route path="/spotlight/:id" element={<SpotLightProduct />} />
          <Route path="/Brand/:id" element={<BrandProduct/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/cart" element={<Cart/>} />
            <Route path="/lehenga" element={<LehengaProduct/>} />
            <Route path="/lehenga-1" element={<LehengaProduct />} />
            <Route path="/lehenga-2" element={<LehengaProduct/>} /> 
            <Route path="/anarkali" element={<AnarkaliProduct />} />
          <Route path="/anarkali-1" element={<AnarkaliProduct />} />
          <Route path="/anarkali-2" element={<AnarkaliProduct />} />
          <Route path="/kurta" element={<KurtiProducts />} />
            <Route path="/kurta-1" element={<KurtiProducts />} />
            <Route path="/kurta-2" element={<KurtiProducts />} />
            <Route path="/jeans" element={<JeansProducts />} />
            <Route path="/jeans-1" element={<JeansProducts />} />
            <Route path="/jeans-2" element={<JeansProducts />} />
            <Route path="/heels" element={<HeelsProduct />} />
            <Route path="/heels-1" element={<HeelsProduct />} />
            <Route path="/heels-2" element={<HeelsProduct />} />
            <Route path="/flats" element={<FlatsProduct/>} />
          <Route path="/flats-1" element={<FlatsProduct/>} />
          <Route path="/flats-2" element={<FlatsProduct/>} />
          <Route path="/sarees" element={<Sarees />} />
            <Route path="/saree-1" element={<Sarees />} />
            <Route path="/saree-2" element={<Sarees/>} />
            <Route path="/skirts" element={<Skirts />} />
            <Route path="/skirts-1" element={<Skirts />} />
            <Route path="/skirts-2" element={<Skirts />} />
            <Route path="/tops" element={<Tops />} />
            <Route path="/tops-1" element={<Tops />} />
            <Route path="/tops-2" element={<Tops />} />
            <Route path="/men-jeans" element={<JeansMen />} />
            <Route path="/jean-1" element={<JeansMen />} />
            <Route path="/jean-2" element={<JeansMen />} />
            <Route path="/shirt" element={<Shirt />} />
            <Route path="/shirt-1" element={<Shirt />} />
            <Route path="/shirt-2" element={<Shirt/>} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/shorts-1" element={<Shorts />} />
            <Route path="/shorts-2" element={<Shorts/>} />
            <Route path="/sneakers" element={<Sneakers />} />
            <Route path="/sneakers-1" element={<Sneakers />} />
            <Route path="/sneakers-2" element={<Sneakers />} />
            <Route path="/suits" element={<Suits />} />
            <Route path="/suit-1" element={<Suits />} />
            <Route path="/suit-2" element={<Suits />} />
            <Route path="/T-shirt" element={<Tshirt />} />
            <Route path="/T-shirt-1" element={<Tshirt />} />
            <Route path="/T-shirt-2" element={<Tshirt />} />
            <Route path="/boy" element={<Boy />} />
            <Route path="/boy-1" element={<Boy />} />
            <Route path="/boy-2" element={<Boy />} />
            <Route path="/dress" element={<Dress />} />
            <Route path="/dress-1" element={<Dress />} />
            <Route path="/dress-2" element={<Dress />} />
            <Route path="/kids-Tops" element={<KidTop />} />
            <Route path="/KidTops-1" element={<KidTop />} />
            <Route path="/kidTops-2" element={<KidTop />} />
            <Route path="/short" element={<Short />} />
            <Route path="/short-1" element={<Short />} />
            <Route path="/short-2" element={<Short />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Sign/>} />
            <Route path="/pay" element={<Pay/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
