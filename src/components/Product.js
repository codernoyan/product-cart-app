import { useDispatch } from "react-redux"
import { added } from "../redux/cart/actions";
import { addToCart } from "../redux/products/actions";

export default function Product({ product }) {
  const { id, quantity, productName, category, price, imageUrl } = product;
  const dispatch = useDispatch();
  // add to cart
  const handleAddToCart = (existingProduct, id) => {
    dispatch(addToCart(id));
    
    dispatch(added(existingProduct))
  }
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
          <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
        </div>
        <button onClick={()=> handleAddToCart(product, id)} className="lws-btnAddToCart" disabled={quantity === 0 && true}>Add To Cart</button>
      </div>
    </div>
  )
}