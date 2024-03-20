import './ShoppingCart.css'
import Purchase from './Purchase'
import { Link } from 'react-router-dom'
import { MouseEventHandler } from 'react'
import { FaArrowLeft, FaXmark } from 'react-icons/fa6'

function ShoppingCart(props: { cart: any[]; handleDel: (arg0: any) => void; handleToPurchase: MouseEventHandler<HTMLButtonElement> | undefined; toPurchase: any }) {

  let totalAmount = Math.round(props.cart.reduce((total: any, product: { price: any }) => total + product.price, 0))
  return (
    <>
      <div className="shoppingCart">
        <div className="shopLink">
          <Link to="/shop"><FaArrowLeft/></Link>
        </div>
        <div className="cart">
          Cart
        </div>
        <div className="addedProducts">
          {props.cart.map((product: any) => {
            return (
              <>
                <div className="cartProducts" key={product}>
                  <div className="cartProduct">
                    <div className="image">
                      <img src={product.image_url} alt="" />
                    </div>
                    <div className="cartProductDesc">
                      {product.description}
                      <div className='remove' onClick={() => props.handleDel(product)}>
                        <FaXmark/>
                      </div>
                    </div>
                    <div className="cartProductPrice">
                      Amount: {product.price}
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className="amtAndPurchase">
          <div>Total: <b>${totalAmount}</b></div>
          <button className="purchase" onClick={props.handleToPurchase}>
            Purchase
          </button>
        </div>
      </div>
      {
        props.toPurchase 
        ? <Purchase handleToPurchase={props.handleToPurchase}/>
        : ""
      }
    </>
  )
}

export default ShoppingCart