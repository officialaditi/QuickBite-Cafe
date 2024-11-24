import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rating from "../components/Rating";
import { getMenuDetails } from "../redux/actions/menuActions";
import Loader from "../components/Loader";

const SingleMenu = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const menuDetails = useSelector((state) => state.menuDetails);
  const { loading, error, food } = menuDetails;

  useEffect(() => {
    dispatch(getMenuDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" mx-auto p-5 text-white">
        <div className="flex items-center justify-start mb-6">
          <Link to="/menu">
            <FaArrowLeft className="border-2 border-gray-300 rounded-full p-2 w-10 h-10 text-white shadow-lg hover:bg-gray-700 transition-colors" />
          </Link>
        </div>

        {loading ? (
          <Loader />
        ) : error ? ( 
          <p>{error}</p>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src={food.image}
                alt={food.name}
                className="h-[350px] rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Description Section */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h1 className="font-mono text-4xl text-white">{food.name}</h1>
              <div className="flex items-center gap-10">
                <Rating
                  value={food.rating}
                  color={{ className: "text-yellow-400" }}
                />
                <p className="font-semibold text-lg text-red-400">
                  {food.numReviews} Reviews
                </p>
              </div>
              <p className="font-bold text-xl text-gray-300">
                {food.description}
              </p>
            </div>

            {/* Price and Cart Section */}
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <h1 className="font-extrabold text-4xl text-green-500">
                ₹{food.price}
              </h1>
              <button className="bg-teal-600 px-8 py-3 rounded-xl text-2xl text-white shadow-md hover:bg-teal-700 transition-colors">
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleMenu;
