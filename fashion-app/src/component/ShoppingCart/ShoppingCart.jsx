import { useContext } from "react";
import { ShopContext } from "../../App";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Calculate the total price of items in the cart (considering discounts)
const totalReducer = (cart) => {
  const itemPrices = cart.map(item => 
    item.price * (1 - (item.discount || 0) / 100) // Apply discount if available
  );
  const totalPrice = itemPrices.reduce((total, price) => total + price, 0);
  return totalPrice;
};

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate(); // Hook to navigate to the payment page

  const handlePaymentClick = () => {
    // Redirect to the payment page or handle payment process
    alert("Proceeding to Payment");
    navigate("/payment"); // Example path to the payment page
  };

  return (
    <div className="text-center">
      {cart.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <div className="d-flex flex-column gap-3">
          <div>
            <h2>Your Shopping Cart</h2>
          </div>
          <div className="d-flex justify-content-between">
            <h3>No of items: {cart.length}</h3>
            <h3>
              Cart Total: &#8377;{totalReducer(cart).toFixed(2)} {/* Total price with discounts */}
            </h3>
          </div>
          <div>
            <ul className="list-group">
              {cart.map(item => (
                <li className="list-group-item" key={item.id}>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Product Image */}
                    <div>
                      <img src={item.image} alt={item.name} width={100} height={100} />
                    </div>
                    {/* Product Details */}
                    <div>
                      {item.brand} {item.name}
                    </div>
                    {/* Discounted Price Display */}
                    <div>
                      <span className="text-danger fw-bold">
                        &#8377;{(item.price * (1 - (item.discount || 0) / 100)).toFixed(2)} {/* Discounted Price */}
                      </span>
                      {item.discount ? (
                        <>
                          <br />
                          <span className="text-decoration-line-through text-secondary">
                            &#8377;{item.price.toFixed(2)} {/* Original Price */}
                          </span>
                          <br />
                          <small className="text-success">Save {item.discount}%</small>
                        </>
                      ) : null}
                    </div>
                    {/* Remove Button */}
                    <div>
                      <button
                        title="Remove item"
                        className="btn btn-danger"
                        onClick={() => {
                          removeFromCart(item);
                          alert("Item removed from cart");
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Total Price to Pay Button */}
          <div className="mt-4">
            <h3>Total Price to Pay: &#8377;{totalReducer(cart).toFixed(2)}</h3>
            <button
              className="btn btn-success w-100"
              onClick={handlePaymentClick}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
