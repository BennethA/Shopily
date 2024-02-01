import Topbar from "./Topbar"
import './ShoppingCart.css'

function ShoppingCart({cart}) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0)
  return (
    <>
      <Topbar/>
      <div className="shoppingCart">
        <div className="cart">
          Cart
        </div>
        {cart.map((product) => (
          <>
            <div className="cartProducts">
              <div className="cartProduct">
                <div className="image">
                  {product.image}
                </div>
                <div className="cartProductDesc">
                  {product.description}
                </div>
                <div className="cartProductPrice">
                  {product.price}
                </div>
              </div>
            </div>
            <div className="totalAmount">
              Total: <b>$0.00</b>
            </div>
          </>
        ))}

      </div>
    </>
  )
}

export default ShoppingCart