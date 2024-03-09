import { useState } from 'react'
import './Products.css'
import PRODUCTS from './Products.json'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa6'

function Products ({addToCart}) {
  const categories = ["All", "Shirts", "Dresses", "Jeans", "Footwear", "Outerwear", "Swimwear", "Shorts", "Hats", "Socks", "Hoodies", "Pants", "Skirts", "Accessories", "Pajamas", "Sweaters", "Suits", "Perfume" ]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All' ? PRODUCTS : PRODUCTS.filter(product => product.category === selectedCategory)
  return (
    <>
    <div className="productsSection">
      <div className="topic">
        <h4>OUR PRODUCTS</h4>
        <div className="underlineMain">
          <hr className="underline"></hr>
        </div>
      </div>
      <div className="productsNav">
        {
          categories.map(category => {
            return (
              <>
                <button 
                className="pNText" 
                onClick={() => setSelectedCategory(category)}>{category}</button>
              </>
            )

          })
        }
      </div>
      <div className="products">
        {
          filteredProducts.map((product) => {
            return (
                <div className="productDesc" key={product.id}>
                  <div className="productImage">
                    <img src={product.image_url} alt="" />
                  </div>
                  <h3>
                    {product.name}
                  </h3>
                  <hr />
                  <p>
                    ${product.price}
                  </p>
                  <Link to='/shoppingCart' onClick={() => addToCart(product)}>
                    <div className="addToCart">
                        Add To Cart <FaCartPlus/>
                    </div>
                  </Link>
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