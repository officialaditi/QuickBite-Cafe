import FoodCard from "../components/FoodCard";
import { useEffect } from "react";
import { getMenuList, filterMenuList } from "../redux/actions/menuActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Filter from "../components/Filter";


const MenuScreen = () => {
  const dispatch = useDispatch();

  const menuList = useSelector((state) => state.menuList);
  const { loading, error, filterData } = menuList;

  useEffect(() => {
    dispatch(getMenuList());
  }, [dispatch]);

  const handleFilter = (filters) => {
    dispatch(filterMenuList(filters));
  };

 

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Title */}
      <h1 className="font-serif text-4xl text-center m-6 text-red-500 underline">
        Explore the Menu
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:p-8 ">
        {/* Filter Section */}
        <Filter onFilter={handleFilter} />

        {/* Food Cards Section */}
        {loading ? (
          <Loader />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6  ">
            {filterData.map((items) => (
              <FoodCard key={items._id} foodItem={items} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuScreen;
