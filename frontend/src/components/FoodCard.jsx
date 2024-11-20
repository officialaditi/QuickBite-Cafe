import { Link } from "react-router-dom";

const FoodCard = ({ foodItem }) => {
  return (
    <Link to={`/product/${foodItem._id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        {/* Image */}
        <div>
          <img
            src={foodItem.image}
            alt={foodItem.name}
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex items-center justify-between">
          {/* Name */}
          <h1 className="text-xl font-semibold text-gray-800 truncate">
            {foodItem.name}
          </h1>
          {/* Price */}
          <p className="text-2xl text-red-600 font-medium mt-2">
            ₹{foodItem.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
