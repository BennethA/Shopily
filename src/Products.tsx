import { useState } from 'react'
import './Products.css'
import PRODUCTS from './Products.json'

function Products ({products, addToCart}) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All' ? PRODUCTS:PRODUCTS.filter(product => product.type === selectedCategory)
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
        <button className="pNText" onClick={() => setSelectedCategory('All')}>All</button>
        <button className="pNText" onClick={() => setSelectedCategory('men')}>Men's Clothing</button>
        <button className="pNText" onClick={() => setSelectedCategory('women')}>Women's Clothing</button>
        <button className="pNText" onClick={() => setSelectedCategory('jewelry')}>Jewlry</button>
        <button className="pNText" onClick={() => setSelectedCategory('children')}>Children's Clothing</button>
      </div>
      <div className="productsSection">
        {
          filteredProducts.map((product) => {
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
                  <div className="addToCart" onClick={() => addToCart(product)}>
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