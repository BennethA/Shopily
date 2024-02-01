import Topbar from "./Topbar"
import './ShoppingCart.css'
import { useState } from "react"
import { createBrowserRouter } from "react-router-dom"

function ShoppingCart() {
  const [cart, setCart] = useState([])

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
              {cart.map((product) => (
                <>
                  <div className="cartProduct">
                    <div className="image">
                      {cart.image}
                    </div>
                    <div className="cartProductDesc">
                      {cart.description}
                    </div>
                    <div className="cartProductPrice">
                      {cart.price}
                    </div>
                  </div>
                </>

              ))}
              <div className="totalAmount">
                Total: <b>$0.00</b>
              </div>
            </div>
          </>
        ))}

      </div>
    </>
  )
}

export default ShoppingCart