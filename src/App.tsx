import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import './App.css'
import ShoppingCart from './ShoppingCart'
import Homepage from './Homepage';
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
        <Route exact path='/' element={<Homepage addToCart={addToCart}/>}></Route>
        <Route path='/shoppingCart' element={<ShoppingCart cart={cart}/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
