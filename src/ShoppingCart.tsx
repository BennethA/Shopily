import { Link } from 'react-router-dom'
import './ShoppingCart.css'
import { FaArrowLeft } from 'react-icons/fa6'

function ShoppingCart({cart}) {
  let totalAmount = cart.reduce((total, product) => total + product.price, 0)
  return (
    <>
      <div className="shoppingCart">
        <div className="shopLink">
          <Link to="/shop"><FaArrowLeft/></Link>
        </div>
        <div className="cart">
          Cart
        </div>
        {cart.map(product => {
          return (
            <>
              <div className="cartProducts">
                <div className="cartProduct">
                  <div className="image">
                    <img src={product.image_url} alt="" />
                  </div>
                  <div className="cartProductDesc">
                    {product.description}
                  </div>
                  <div className="cartProductPrice">
                    {product.price}
                  </div>
                </div>
              </div>
            </>
          )
        })}
          <div className="totalAmount">
            Total: <b>${totalAmount}</b>
          </div>
      </div>
    </>
  )
}

export default ShoppingCart