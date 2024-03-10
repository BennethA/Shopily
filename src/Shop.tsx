import Footer from './Footer'
import Products from './Products'

const Shop = ({addToCart}) => {
  return (
    <>
      <div className='shop'>
        <Products addToCart={addToCart} />
      </div>
      <Footer/>
    </>
  )
}

export default Shop