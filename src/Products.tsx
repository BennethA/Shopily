import './Products.css'
import PRODUCTS from './Products.json'

function Products () {
  return (
    <>
    <div className="products">
      <div className="topic">
        <h4>OUR PRODUCTS</h4>
        <div className="underlineMain">
          <hr className="underline"></hr>
        </div>
      </div>
      <div className="productsNav">
        <button className="pNText">All</button>
        <button className="pNText">Electronics</button>
        <button className="pNText">Jewlry</button>
        <button className="pNText">Men's Clothing</button>
        <button className="pNText">Women's Clothing</button>
      </div>
      <div className="productsSection">
        {
          PRODUCTS.map((product) => {
            return (
                <div className="productDesc" key={product.id}>
                  <div className="productImage">
                    <img src={product.image} alt="" />
                  </div>
                  <h3>
                    {product.description}
                  </h3>
                  <hr />
                  <p>
                    {product.price}
                  </p>
                  <div className="addToCart">
                    Add To Cart
                  </div>
                </div> 
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Products