import { IoStarOutline, IoStarHalf, IoStar } from "react-icons/io5";

const Rating = ({ value }) => {
  return (
    <div className="flex">
      {/* First star */}
      <div
        className={
          value >= 1
            ? "text-yellow-500"
            : value >= 0.5
            ? "text-yellow-400"
            : "text-gray-400"
        }
      >
        {value >= 1 ? (
          <IoStar />
        ) : value >= 0.5 ? (
          <IoStarHalf />
        ) : (
          <IoStarOutline />
        )}
      </div>

      {/* Second star */}
      <div
        className={
          value >= 2
            ? "text-yellow-500"
            : value >= 1.5
            ? "text-yellow-400"
            : "text-gray-400"
        }
      >
        {value >= 2 ? (
          <IoStar />
        ) : value >= 1.5 ? (
          <IoStarHalf />
        ) : (
          <IoStarOutline />
        )}
      </div>

      {/* Third star */}
      <div
        className={
          value >= 3
            ? "text-yellow-500"
            : value >= 2.5
            ? "text-yellow-400"
            : "text-gray-400"
        }
      >
        {value >= 3 ? (
          <IoStar />
        ) : value >= 2.5 ? (
          <IoStarHalf />
        ) : (
          <IoStarOutline />
        )}
      </div>

      {/* Fourth star */}
      <div
        className={
          value >= 4
            ? "text-yellow-500"
            : value >= 3.5
            ? "text-yellow-400"
            : "text-gray-400"
        }
      >
        {value >= 4 ? (
          <IoStar />
        ) : value >= 3.5 ? (
          <IoStarHalf />
        ) : (
          <IoStarOutline />
        )}
      </div>

      {/* Fifth star */}
      <div
        className={
          value >= 5
            ? "text-yellow-500"
            : value >= 4.5
            ? "text-yellow-400"
            : "text-gray-400"
        }
      >
        {value >= 5 ? (
          <IoStar />
        ) : value >= 4.5 ? (
          <IoStarHalf />
        ) : (
          <IoStarOutline />
        )}
      </div>
    </div>
  );
};

export default Rating;
