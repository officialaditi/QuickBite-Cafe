import { useState } from "react";
import { ALL_MENU_FILTER_RESET } from "../redux/constants/menuConstants";
import { useDispatch } from "react-redux";

const Filter = ({ onFilter }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleFilter = () => {
    onFilter({
      category: selectedCategory,
      type: selectedType,
    });
  };
  const handleReset = () => {
    setSelectedCategory('');
    setSelectedType('')
    dispatch({ type: ALL_MENU_FILTER_RESET });
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Filter</h2>

      <div className="mb-4">
        <label className="block font-semibold text-2xl mb-3">Category:-</label>
        <select
          className="w-full border rounded p-2 text-black"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
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
      <div className="mb-4">
        <label className="block font-semibold text-2xl mb-3">Types:-</label>
        <select
          className="w-full border rounded p-2 text-black"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Vegan">Vegan</option>
        </select>
      </div>
      <div className="flex gap-10 mt-10">
        <button onClick={handleFilter} className="bg-red-500 px-4 py-2 rounded">
          Apply Filters
        </button>
        <button className="bg-red-500 px-4 py-2 rounded" onClick={handleReset}>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
