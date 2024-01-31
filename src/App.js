import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductDetailScreen from './components/ProductDetailScreen'; 



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/product/:productId" element={<ProductDetailScreen />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App;
