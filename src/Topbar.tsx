import {
  Link 
} from 'react-router-dom';
function Topbar () {
  let body = document.body.style
  function onColorChange() {
    if(body.background === 'white'){
      body.background = 'black'
      body.color = 'green'
    } else {
      body.background = 'white'
      body.color = 'black'
    }
  }
  return (
    <>
    <div className="reachUs">
      <div className="reachUsOne">
        <div className="location">Accra, Ghana, West Africa</div>
        <div className="contact">0249927554</div>
      </div>
      <div className="reachUsTwo" onClick={onColorChange}>
        <button className="colorChanger">&#9728;</button>
      </div>
    </div>
    <div className="main">
      <div className="first">
        <div className="name">
          <Link to='/'>
            SHOPILY
          </Link>
        </div>
        <div className="inputSection">
          <input type="text" className="inputName" placeholder='what are you looking for'/>
          <button className="searchBtn">Search</button>
        </div>
        <div className="cartDisplay">
          <Link to='/shoppingCart'>
            Shopping cart:<br/> <b>$0.00</b>
          </Link>
        </div>
      </div>
      <div className="second">
        <div className="homepage">Home</div>
        <div className="shop">Shop</div>
      </div>
    </div>

    </>
  )
}

export default Topbar