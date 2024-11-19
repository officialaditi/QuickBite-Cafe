import { Link } from "react-router-dom";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">QuickBites</h2>
          <p className="text-gray-400">
            Experience the taste of delicious bites crafted with passion. Your satisfaction is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="hover:text-yellow-500">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
            </li>
            <li>
              <Link to="/menus" className="hover:text-yellow-500">Menus</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-yellow-500">Blogs</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-yellow-500">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-yellow-500" />
              <span>info@quickbites.com</span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="text-yellow-500" />
              <span>+123 456 7890</span>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 text-xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4 text-sm">
        <p>© 2024 QuickBites. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
