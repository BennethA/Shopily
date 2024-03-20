import {
  Link 
} from 'react-router-dom';
import Model from './Model';
import Profile from './Profile';
import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6'
import userProfile from '../public/images/user.png';
import { MouseEventHandler, useState } from 'react';

function Topbar (props: { handleSearch: (arg0: string) => void; cart: string | any[]; login: any; handleToProfile: MouseEventHandler<HTMLImageElement> | undefined; handleToModel: MouseEventHandler<HTMLParagraphElement> | any; toModel: any; hasAccount: any; handleLogin: any; handleHasAccount: any; toProfile: any; handleLogOut: any; }) 
{
  const userImg = userProfile;
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const query = event.target.value;
    setSearchQuery(query)
  }
  
  const handleInputClick = () => {
    props.handleSearch(searchQuery)
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
            onChange={handleInputChange}/>
            <button className="searchBtn" onClick={handleInputClick}>
              <FaSearch/>
            </button>
          </div>
          <div className="cartDisplay">
            <Link to='/shoppingCart'>
              <div>Cart<FaCartShopping/></div>
              {props.cart.length}
            </Link>
          </div>
        </div>
        <button className="user">
          {
            props.login 
            ? <img src={userImg} alt="" onClick={props.handleToProfile}/> 
            : <p onClick={props.handleToModel}>Log In</p>
          }
        </button>
      </div>
      {
        props.toModel 
        ? <Model 
            hasAccount={props.hasAccount}
            handleLogin={props.handleLogin}
            handleHasAccount={props.handleHasAccount} 
            handleToModel={props.handleToModel}/> 
        : ""
      }
      {
        props.toProfile
        ? <Profile 
            handleLogOut={props.handleLogOut}/>
        : ""
      }
    </>
  )
}

export default Topbar