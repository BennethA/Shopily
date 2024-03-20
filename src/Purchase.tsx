import { FaXmark } from "react-icons/fa6"

const Purchase = (props: any) => {
  return (
    <div className="purchaseProducts">
      Purchase <FaXmark onClick={props.handleToPurchase}/>
    </div>
  )
}

export default Purchase