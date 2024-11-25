import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQty,
} from "../redux/actions/cartAction";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FcEmptyTrash } from "react-icons/fc";
import { toast } from "react-toastify";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id));
    }
  }, [id, dispatch]);

  // remove item from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Removed from cart!");
  };

  // update the qty of item
  const updateQtyHandler = (id, qty) => {
    dispatch(updateQty(id, qty));
  };

  const checkoutHandler = () => {
    navigate(`/login?redirect=/shipping`)
  }

  return (
    <>
      <h1 className="text-yellow-500 font-semibold text-center text-2xl m-5">
        Food Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-3 font-mono text-3xl text-white">
          <h1 className="text-red-600">
            Your cart is empty...
            <Link to="/menu" className="text-white">
              Order yummy food 😋
            </Link>
          </h1>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mx-10">
          {/* Left Side - Cart Items */}
          <div className="w-full md:w-3/3">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-gray-800 rounded-3xl m-3 py-5 px-5 flex items-center justify-between flex-wrap"
              >
                <img
                  src={item.image}
                  className="h-32 object-contain w-1/3 sm:w-1/4 md:w-1/6"
                  alt={item.name}
                />
                <div className="flex flex-col ml-4 gap-3 flex-grow">
                  <h1 className="text-white text-xl">{item.name}</h1>
                  <p className="text-yellow-500 text-lg">₹{item.price}</p>
                  <div>
                    <label className="text-md font-extralight text-white">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) =>
                        updateQtyHandler(item.food, +e.target.value)
                      }
                      min="1"
                      className="ml-2 w-16 text-center bg-gray-700 border-none rounded-md text-white focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <div>
                  <FcEmptyTrash
                    size="40"
                    className="cursor-pointer"
                    onClick={() => removeFromCartHandler(item.food)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Cart Total */}
          <div className="w-full md:w-3/3 bg-gray-900 text-white p-5 rounded-3xl flex-wrap">
            <h2 className="text-yellow-500 text-2xl font-semibold mb-5">
              Cart Total
            </h2>
            <div className="flex justify-between mb-3">
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Total Price:</span>
              <span>
                ₹
                {cartItems.reduce(
                  (acc, CurrVal) => acc + CurrVal.qty * CurrVal.price,
                  0
                )}
              </span>{" "}
              {/* Add total price calculation here */}
            </div>
            <div className="mt-5 text-center">
              <button className="w-2/3 bg-yellow-500 p-2 rounded-full text-lg" onClick={checkoutHandler}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartScreen;
