import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader flex items-center justify-center ">
      <ThreeDots size={50} color={"#ac09a3"} />
    </div>
  );
};

export default Loader;
