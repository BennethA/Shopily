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
import Model from './Model.tsx';
import Topbar from './Topbar.tsx';

function App() {
  const [cart, setCart] = useState([])
  const [toModel, setToModel] = useState(false)
  const [login, setLogin] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const handleModel = () => {
    setToModel(!toModel)
  }

  const handleLogin = (event) => {
    event.preventDefault();
    setLogin(true)
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleHasAccount = () => {
    setHasAccount(!hasAccount)
  }

  return (
    <>
    <Router>
      <Topbar hasAccount={hasAccount} handleHasAccount={handleHasAccount} onSearch={handleSearch} login={login} handleModel={handleModel} toModel={toModel}/>
      <Routes>
        <Route exact path='/' element={<Home handleModel={handleModel} toModel={toModel}/>}></Route>
        <Route path='/shop' element={<Shop addToCart={addToCart} />}></Route>
        <Route path='/shoppingCart' element={<ShoppingCart cart={cart}/>}></Route>
        <Route path='/login' element={<Model hasAccount={hasAccount} handleHasAccount={handleHasAccount} handleLogin={handleLogin} handleModel={handleModel}/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
