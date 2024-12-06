import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import ReservationScreen from "./screens/ReservationScreen";
import MenuScreen from "./screens/MenuScreen";
import SingleMenu from "./screens/SingleMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex flex-col mt-[72px] bg-black ">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path='/reservation' element={<ReservationScreen/>} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/product/:id" element={<SingleMenu />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </div>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        pauseOnFocusLoss="false"
        pauseOnHover="false"
        hideProgressBar={false}
      />
    </BrowserRouter>
  );
};
export default App;
