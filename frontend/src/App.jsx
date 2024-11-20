import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import MenuScreen from "./screens/MenuScreen";
import SingleMenu from "./screens/SingleMenu";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex flex-col mt-[72px] bg-black ">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/product/:id" element={<SingleMenu />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
