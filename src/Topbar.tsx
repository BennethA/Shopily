import {
  Link 
} from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa';

function Topbar () {
  return (
    <>
      <div className="main">
        <div className="name">
          <Link to='/'>
            SHOPILY
          </Link>
        </div>
        <div className="inputSection">
          <input type="text" className="inputName" placeholder='what are you looking for'/>
          <button className="searchBtn">
            <FaSearch/>
          </button>
        </div>
        <div className="cartDisplay">
          <Link to='/shoppingCart'>
            Shopping cart <FaCartShopping/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Topbar