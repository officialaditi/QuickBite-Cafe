import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Banner = () => {
  const navigate = useNavigate();  // To navigate programmatically
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleOrderOnline = () => {
    if (userInfo) {
      navigate("/menu");  // If the user is logged in, navigate to the menu page
    } else {
      openModal();  // Open the modal if the user is not logged in
    }
  };

  return (
    <div className="relative">
      {/* Banner Image */}
      <img
        src="./homeImgs/mainBanner.jpg"
        alt="Restaurant Banner"
        className="w-full h-[540px] md:h-[400px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text and Buttons */}
      <div className="absolute top-[35%] left-[10%] text-white space-y-6 z-10">
        <h1 className="font-serif text-4xl md:text-2xl lg:text-yellow-500 drop-shadow-lg">
          From Our Table to Yours – Dine or Deliver!
        </h1>
        <div className="flex flex-wrap gap-4">
          {/* Reservation Button */}
          <NavLink to="/reservation">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-xl md:text-lg px-6 py-3 md:py-2 rounded-lg shadow-lg">
              Book Your Table
            </button>
          </NavLink>

          {/* Order Online Button */}
          <button
            onClick={handleOrderOnline}
            className={`${
              userInfo ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
            } text-xl md:text-lg px-6 py-3 md:py-2 rounded-lg shadow-lg`}
          >
            {userInfo ? "Order Online" : "Login to Order"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <h2 className="text-2xl font-bold mb-4">Login to Order</h2>
            <p className="text-gray-700 mb-6">
              Please log in to your account to proceed with your order.
            </p>
            <div className="space-y-4">
              {!userInfo && (
                <NavLink to="/login">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
                    Login
                  </button>
                </NavLink>
              )}
              <button
                onClick={closeModal}
                className="w-full bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-black transition text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
