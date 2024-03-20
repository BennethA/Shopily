import Footer from './Footer'
import Products from './Products'

const Shop = (props: { searchValue: any; addToCart: (arg0: { id: number; category: string; name: string; price: number; discount: number; description: string; rating: number; image_url: string }) => void }) => {
  return (
    <>
      <div className='shop'>
        <Products addToCart={props.addToCart} />
      </div>
      <Footer/>
    </>
  )
}

export default Shop