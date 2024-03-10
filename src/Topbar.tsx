import {
  Link 
} from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa';
import userProfile from '../public/images/user.png';
import Model from './Model';
import { useState } from 'react';

function Topbar ({handleModel, toModel, login, onSearch, handleHasAccount, hasAccount}) {
  const userImg = userProfile;
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query)
    onSearch(query)
    console.log(query);
  }
  
  return (
    <>
      <div className="main">
        <div className="main1">
          <div className="name">
            <Link to='/'>
              SHOPILY
            </Link>
          </div>
          <div className="inputSection">
            <input 
            type="search" 
            value={searchQuery} 
            className="inputName" 
            placeholder='what are you looking for'
            onChange={handleSearch}/>
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
        <div onClick={handleModel} className="user">
          {
            login ? <img src={userImg} alt="" /> : <p>Log In</p>
          }
          
        </div>
      </div>
      {toModel ? <Model hasAccount={hasAccount} handleLogin={undefined} handleModel={handleModel} handleHasAccount={handleHasAccount}/> : ""}
    </>
  )
}

export default Topbar