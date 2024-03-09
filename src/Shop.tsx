import Footer from './Footer'
import Products from './Products'
import Topbar from './Topbar'

const Shop = ({addToCart}) => {
  return (
    <>
      <Topbar/>
      <div className='shop'>
        <Products addToCart={addToCart} />
      </div>
      <Footer/>
    </>
  )
}

export default Shop