import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/products/actions";
import Product from "./Product";

export default function Products() {
  const productsData = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // form initial state
  const [input, setInput] = useState({
    productName: '',
    category: '',
    imageUrl: '',
    price: '',
    quantity: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);

    dispatch(addProduct(input));

    // reset form
    setInput({
      productName: '',
      category: '',
      imageUrl: '',
      price: '',
      quantity: '',
    })
  };

  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* products container */}
        <div className="productContainer" id="lws-productContainer">
          {/* product item */}
          {
            productsData.length === 0 ?
              (
                <div style={{
                  alignSelf: 'center',
                  justifySelf: 'center',
                  gridColumnStart: 1,
                  gridColumnEnd: 4,
                }}>
                  <h1>No products were added</h1>
                </div>
              )
              :
              productsData?.map((product) => <Product key={product.id} product={product} />)
          }
          {/* product item ends */}
          {/* product item */}
          {/* <div className="lws-productCard">
            <img className="lws-productImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
            <div className="p-4 space-y-2">
              <h4 className="lws-productName">Women Winter Clothes</h4>
              <p className="lws-productCategory">Tops</p>
              <div className="flex items-center justify-between pb-2">
                <p className="productPrice">BDT <span className="lws-price">100</span></p>
                <p className="productQuantity">QTY <span className="lws-quantity">30</span></p>
              </div>
              <button className="lws-btnAddToCart">Add To Cart</button>
            </div>
          </div> */}
          {/* product item ends */}
        </div>
        {/* products container ends */}
        <div>
          {/* Product Input Form */}
          <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
              {/* product name */}
              <div className="space-y-2">
                <label htmlFor="lws-inputName">Product Name</label>
                <input onChange={(e) => setInput({ ...input, productName: e.target.value })} className="addProductInput" id="lws-inputName" type="text" required value={input.productName} />
              </div>
              {/* product category */}
              <div className="space-y-2">
                <label htmlFor="lws-inputCategory">Category</label>
                <input onChange={(e) => setInput({ ...input, category: e.target.value })} className="addProductInput" id="lws-inputCategory" type="text" required value={input.category} />
              </div>
              {/* product image url */}
              <div className="space-y-2">
                <label htmlFor="lws-inputImage">Image Url</label>
                <input onChange={(e) => setInput({ ...input, imageUrl: e.target.value })} className="addProductInput" id="lws-inputImage" type="text" required value={input.imageUrl} />
              </div>
              {/* price & quantity container */}
              <div className="grid grid-cols-2 gap-8 pb-4">
                {/* price */}
                <div className="space-y-2">
                  <label htmlFor="ws-inputPrice">Price</label>
                  <input onChange={(e) => setInput({ ...input, price: parseInt(e.target.value) })} className="addProductInput" type="number" id="lws-inputPrice" required value={input.price} />
                </div>
                {/* quantity */}
                <div className="space-y-2">
                  <label htmlFor="lws-inputQuantity">Quantity</label>
                  <input onChange={(e) => setInput({ ...input, quantity: parseInt(e.target.value) })} className="addProductInput" type="number" id="lws-inputQuantity" required value={input.quantity} />
                </div>
              </div>
              {/* submit button */}
              <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
          </div>
          {/* Product Input Form Ends */}
        </div>
      </div>
    </main>
  )
}