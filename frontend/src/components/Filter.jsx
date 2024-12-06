import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterMenuList } from "../redux/actions/menuActions"; // Import your filter action
import { ALL_MENU_FILTER_RESET } from "../redux/constants/menuConstants";

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Dispatch the filter action immediately when any filter changes
  useEffect(() => {
    dispatch(
      filterMenuList({
        category: selectedCategory,
        type: selectedType,
        searchTerm,
      })
    );
  }, [selectedCategory, selectedType, searchTerm, dispatch]); // Trigger the filter action on any filter change

  // Handle resetting the filters
  const handleReset = () => {
    setSelectedCategory("");
    setSelectedType("");
    setSearchTerm("");
    dispatch({ type: ALL_MENU_FILTER_RESET }); // Optional: Reset state if necessary
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Choice is yours:-</h2>

      {/* Search Bar */}
      <div className="flex flex-col my-5 mx-2">
        <label htmlFor="search" className="text-xl mb-2 text-center">
          Search your Favourite Food
        </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Dynamically update the search term
          placeholder="Search by foodName, type, Category"
          className="p-3 border rounded focus:ring-2 text-black"
        />
      </div>

      {/* Category Select */}
      <div className="mb-4">
        <label className="block font-semibold text-2xl mb-3">Category:-</label>
        <select
          className="w-full border rounded p-2 text-black"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)} // Update category and apply filter immediately
        >
          <option value="">All Category</option>
          <option value="Pizza">Pizza</option>
          <option value="Indian Main Course">Indian Main Course</option>
          <option value="Rice Dishes">Rice Dishes</option>
          <option value="Healthy Meals">Healthy Meals</option>
          <option value="Desserts">Desserts</option>
          <option value="Sushi">Sushi</option>
        </select>
      </div>

      {/* Type Select */}
      <div className="mb-4">
        <label className="block font-semibold text-2xl mb-3">Types:-</label>
        <select
          className="w-full border rounded p-2 text-black"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)} // Update type and apply filter immediately
        >
          <option value="">All Types</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Vegan">Vegan</option>
        </select>
      </div>

      {/* Reset Button */}
      <div className="flex gap-10 mt-10">
        <button className="bg-red-500 px-4 py-2 rounded" onClick={handleReset}>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
