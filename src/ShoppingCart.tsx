import Topbar from "./Topbar"
import './ShoppingCart.css'

function ShoppingCart() {
  return (
    <>
      <Topbar/>
      <div className="shoppingCart">
        <div className="cart">
          Cart
        </div>
          <div className="cartProducts">
            <div className="cartProduct">
              <div className="image">
                
              </div>
              <div className="cartProductDesc">
                njknjjkv
              </div>
              <div className="cartProductPrice">
                njkbxjkx
              </div>
            </div>
            <div className="totalAmount">
              Total: <b>$0.00</b>
            </div>
          </div>
      </div>
    </>
  )
}

export default ShoppingCart