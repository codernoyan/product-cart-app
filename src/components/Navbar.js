import { useSelector } from "react-redux";

export default function Navbar({setRender}) {
  const cartData = useSelector((state) => state.cart);
  // total quantity
  const totalQuantity = cartData.reduce((prev, cur) => {
    return prev + cur.quantity;
  }, 0)

  const handleToggleProducts = (e)=>{
    e.preventDefault()
    setRender('products')
  }

  const handleToggleCart = (e)=>{
    e.preventDefault()
    setRender('cart')
  }

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
        </a>
        <div className="flex gap-4">
          <a onClick={handleToggleProducts} 
          href="#home" 
          className="navHome" id="lws-home"> Home </a>
          <a onClick={handleToggleCart} 
          href="cart.html" 
          className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
            <span id="lws-totalCart">{totalQuantity}</span>
          </a>
        </div>
      </div>
    </nav>
  )
}