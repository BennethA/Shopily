import './ShoppingCart.css'
import Topbar from './Topbar'
import Product from './Products.json'

function ShoppingCart({cart}) {
  return (
    <>
      <Topbar/>
      <div className="shoppingCart">
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
            Total: <b>{}</b>
          </div>
      </div>
    </>
  )
}

export default ShoppingCart