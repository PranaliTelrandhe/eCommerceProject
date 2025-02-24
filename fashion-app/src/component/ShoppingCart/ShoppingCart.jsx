import { useContext } from "react";
import { ShopContext } from "../../App";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Calculate cart total (with discounts)
const totalReducer = (cart) => {
  return cart.reduce((total, item) => 
    total + item.price * (1 - (item.discount || 0) / 100), 0
  ).toFixed(2);
};

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    const totalAmount = totalReducer(cart);
    navigate("/payment", { state: { totalAmount } });
  };

  return (
    <div className="text-center">
      {cart.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <div className="d-flex flex-column gap-3">
          <h2>Your Shopping Cart</h2>
          <h3>Items: {cart.length} | Total: ₹{totalReducer(cart)}</h3>
          
          <ul className="list-group">
            {cart.map(item => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <img src={item.image} alt={item.name} width={80} height={80} />
                <div>{item.brand} {item.name}</div>
                <div>
                  <span className="text-danger fw-bold">₹{(item.price * (1 - (item.discount || 0) / 100)).toFixed(2)}</span>
                  {item.discount && (
                    <>
                      <br />
                      <span className="text-decoration-line-through text-secondary">₹{item.price.toFixed(2)}</span>
                      <br />
                      <small className="text-success">Save {item.discount}%</small>
                    </>
                  )}
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>

          <button className="btn btn-success mt-3 w-100" onClick={handlePaymentClick}>
            Proceed to Payment (₹{totalReducer(cart)})
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
