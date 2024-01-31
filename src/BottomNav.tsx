function BottomNav () {
  return (
    <>
    <div className="first another">
      <p className='name'>Shopily</p>
      <div className="inputSection">
        <input type="text" className="inputName" placeholder='your email address'/>
        <button className='subScribeBtn'>Subscribe</button>
      </div>
    </div>
    <div className="bottomNav">
      <div className="aboutShopily">
        <div className="head">ABOUT SHOPILY</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt voluptate quae. Unde atque </p>
        <p className='contact'>0249927554 <span>or</span> shopily@ghj.com</p>
      </div>
      <div className="aboutShopily">
        <div className="head">HELP</div>
        <p>About</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="aboutShopily">
        <div className="head">MY ACCOUNT</div>
        <p>Shopping Cart</p>
        <p>Favorite Page</p>
      </div>
      <div className="aboutShopily">
        <div className="head">DOWNLOAD OUR MOBILE APP</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt voluptate quae. Unde atque </p>
      </div>
    </div>
    </>
  )
}

export default BottomNav