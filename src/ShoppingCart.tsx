import Topbar from "./Topbar"
import './ShoppingCart.css'

function ShoppingCart({cart}) {
  return (
    <>
      <Topbar/>
      <div className="shoppingCart">
        <div className="cart">
          Cart
        </div>
        {cart.map((product) => {
          return (
            <>
              <div className="cartProducts">
                <div className="cartProduct">
                  <div className="image">
                    <img src={product.image} alt="" />
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
              Total: <b>$0.00</b>
            </div>
      </div>
    </>
  )
}

export default ShoppingCart