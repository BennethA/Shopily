import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import './App.css'
import ShoppingCart from './ShoppingCart'
import Homepage from './Homepage';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route path='/shoppingCart' element={<ShoppingCart/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
