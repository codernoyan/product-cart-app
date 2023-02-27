import { useDispatch, useSelector } from "react-redux"
import { decrement, deleted, increment, } from "../redux/cart/actions";
import { deletedProduct, productDecrement, productIncrement } from "../redux/products/actions";

export default function CartItem({ cart }) {
  const { id, productName, price, quantity, category, imageUrl } = cart;
  const product = useSelector((state) => state.products.find((product)=> product.id === id));
  const dispatch = useDispatch();

  // increase quantity
  const handleIncrement = (id) => {
    dispatch(increment(id));
    // back to product quantity
    dispatch(productDecrement(id));
  }

  // decrease quantity
  const handleDecrement = (id) => {
    dispatch(decrement(id));
    // back to product quantity
    dispatch(productIncrement(id));
  };

  // handleDelete
  const handleDelete = (productId, productQuantity) => {
    dispatch(deleted(productId));
    // console.log(id, quantity)

    // back to product quantity
    dispatch(deletedProduct(productId, productQuantity));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image */}
        <img className="lws-cartImage" src={imageUrl} alt="product" />
        {/* cart item info */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{productName}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>BDT <span className="lws-cartPrice">{price}</span></p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons */}
        <div className="flex items-center space-x-4">
          <button onClick={() => handleIncrement(id)} className="lws-incrementQuantity" disabled={product.quantity === 0 && true}>
            <i className="text-lg fa-solid fa-plus" />
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button onClick={() => handleDecrement(id)} className="lws-decrementQuantity" disabled={quantity === 0 && true}>
            <i className="text-lg fa-solid fa-minus" />
          </button>
        </div>
        {/* price */}
        <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{price * quantity}</span></p>
      </div>
      {/* delete button */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={() => handleDelete(id, quantity)} className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash" />
        </button>
      </div>
    </div>
  )
}