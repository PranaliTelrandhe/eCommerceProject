import { useContext } from "react";
import { ShopContext } from "../../App"
import { FaTrashAlt } from "react-icons/fa";
//cart item total price reducer functiomn 
const totalReducer = cart =>{
  const itemPrices = cart.map(item=>item.price)
  const totalPrice= itemPrices.reduce((total,price)=>total+price,0)
  return totalPrice;
}
const ShoppingCart = () => {

const {cart,removeFromCart} = useContext(ShopContext)

    return (
      <div className="text-center">
{cart.length==0 ?
<h1>your cart is empty</h1>:

     <div className="d-flex flex-column gap-3">
      <div>
        <h2>Your Shooping Cart</h2></div>
        <div className="d-flex justify-content-between">
        <h3> No of items:{cart.length}</h3>
        <h3> cart total:&#8377;{totalReducer(cart).toFixed(2)}</h3></div>
        <div>
          <ul className="list-group">
           { cart.map( item=> <li className="list-group-item"><div className="d-flex justify-content-between align-item-center">
            <div>
                <img src={item.image} alt={item.name} width={100} height={100}/>
                </div>
                <div>
                  {item.brand}{item.name}
                </div>
                <div>
                  &#8377;{item.price.toFixed(2)}
                </div>
                <div>
                  <button title="remove item" className="btn btn-danger" onClick={()=>{removeFromCart(item);
                    alert("item removed from cart")
                  }}><FaTrashAlt /></button>
                </div></div>
            </li>)}
          </ul>
        </div>
      </div>}</div>
    )
  }
  
  export default ShoppingCart;