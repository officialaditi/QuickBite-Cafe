import FoodData from "../FoodData";
import FoodCard from "../components/FoodCard";


const MenuScreen = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Title */}
      <h1 className="font-serif text-4xl text-center m-6 text-red-500 underline">
        Explore the Menu
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:p-8 ">
        {/* Filter Section */}
        <div className="col-span-1 bg-opacity-30 bg-white rounded-lg p-6 shadow-lg backdrop-blur-xl border border-gray-200">
          <h2 className="text-4xl font-semibold text-center text-red-700 mb-4">
            Filter
          </h2>
        </div>

        {/* Food Cards Section */}
        <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6  ">
          {FoodData.map((items) => (
            <FoodCard key={items._id} foodItem={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
