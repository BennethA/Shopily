import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import './App.css'
import ShoppingCart from './ShoppingCart'
import Home from './Home';
import Shop from './Shop.tsx';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
    console.log(product)
  }

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop addToCart={addToCart}/>}></Route>
        <Route path='/shoppingCart' element={<ShoppingCart cart={cart}/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
