import { useDispatch } from "react-redux"
import { decrement, deleted, increment } from "../redux/cart/actions";

export default function CartItem({ cart }) {
  const dispatch = useDispatch();
  // increase quantity
  const handleIncrement = (id) => {
    dispatch(increment(id));
  }

  // decrease quantity
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  // handleDelete
  const handleDelete = (id) => {
    dispatch(deleted(id));
  }

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image */}
        <img className="lws-cartImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
        {/* cart item info */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{cart?.productName}</h4>
          <p className="lws-cartCategory">{cart?.category}</p>
          <p>BDT <span className="lws-cartPrice">{cart?.price}</span></p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons */}
        <div className="flex items-center space-x-4">
          <button onClick={() => handleIncrement(cart.id)} className="lws-incrementQuantity">
            <i className="text-lg fa-solid fa-plus" />
          </button>
          <span className="lws-cartQuantity">{cart?.quantity}</span>
          <button onClick={() => handleDecrement(cart.id)} className="lws-decrementQuantity">
            <i className="text-lg fa-solid fa-minus" />
          </button>
        </div>
        {/* price */}
        <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{cart?.price * cart?.quantity}</span></p>
      </div>
      {/* delete button */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={() => handleDelete(cart?.id)} className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash" />
        </button>
      </div>
    </div>
  )
}