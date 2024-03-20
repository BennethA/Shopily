import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css'
import Home from './Home';
import Shop from './Shop.tsx';
import Topbar from './Topbar.tsx';
import ShoppingCart from './ShoppingCart'
import { SetStateAction, useEffect, useState } from 'react';

function App() {
  let [cart, setCart] = useState([])
  const [login, setLogin] = useState(false)
  const [toModel, setToModel] = useState(false)
  const [toProfile, setToProfile] = useState(false)
  const [hasAccount, setHasAccount] = useState(true)
  const [toPurchase, setToPurchase] = useState(false)
  const [searchResults, setSearchResults] = useState('')

  const searchValue = '';
  
  const addToCart = (product: any) => {
    setCart([...cart, product])
  }
  const handleDel =(product: number) => {
    cart.splice(product, 1)
    setCart([...cart])
  }

  const handleToModel = () => {
    setToModel(!toModel)
  }

  const handleHasAccount = () => {
    setHasAccount(!hasAccount)
  }
  
  const handleLogin = () => {
    setLogin(!login)
    setToModel(false)
  }
  
  const handleLogOut = () => {
    setCart([])
    setLogin(false)
    setToProfile(false)
  }
  
  const handleToProfile = () => {
    setToProfile(!toProfile)
  }

  const handleToPurchase = () => {
    setToPurchase(!toPurchase)
  }

  const handleSearch = (searchValue: SetStateAction<string>) => {
    setSearchResults(searchValue)
    console.log(searchValue);
  }
  
  return (
    <>
    <Router>
      <Topbar 
        cart={cart} 
        login={login} 
        toModel={toModel}
        toProfile={toProfile}
        hasAccount={hasAccount}
        handleLogin={handleLogin}
        handleSearch={handleSearch}  
        handleLogOut={handleLogOut}
        handleToModel={handleToModel} 
        handleToProfile={handleToProfile}
        handleHasAccount={handleHasAccount}
      />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route 
          path='/shop' 
          element={
            <Shop 
              addToCart={addToCart}
              searchValue={searchValue}
            />
          }
        />
        <Route 
          path='/shoppingCart' 
          element={
            <ShoppingCart 
              cart={cart}
              handleDel={handleDel} 
              toPurchase={toPurchase} 
              handleToPurchase={handleToPurchase} 
            />
          }
        />
        <Route 
          path='*' 
          element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
