import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex flex-col ">    
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path='/contact' element={<ContactScreen/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
