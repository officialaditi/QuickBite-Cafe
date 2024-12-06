import { useState, useEffect } from "react";
import {
  HiOutlineDotsVertical,
  HiOutlineX,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoChevronDown } from "react-icons/io5";
import { logout } from "../redux/actions/userAction";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    setDropdownOpen(false);
  }, []);

  const logoutHandler = () => {
    dispatch(logout()); // Dispatch the logout action first
    navigate("/login"); // Then navigate to the login page
  };

  return (
    <header
      className="bg-black text-white cursor-pointer w-full
    fixed flex-wrap z-50 top-0 left-0 border-b-2"
    >
      <nav className="flex items-center justify-between p-5">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-between gap-6 text-xl uppercase">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservation"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Book Table
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Menu
            </NavLink>
          </li>
        </ul>
        <h1 className="font-mono text-2xl">
          <Link to="/">QuickBites</Link>
        </h1>
        <ul className="hidden lg:flex items-center justify-between gap-6 text-xl uppercase">
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Cart{" "}
              <span className="inline-flex">
                <HiOutlineShoppingCart />
              </span>
            </NavLink>
          </li>
          {/* User Logged In */}
          {userInfo ? (
            <li className="relative">
              <button
                className="flex items-center space-x-2 px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none"
                onClick={toggleDropdown}
              >
                <p>{userInfo.fullname}</p>
                <IoChevronDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={logoutHandler}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li className="bg-yellow-600 px-6 border-2 rounded-xl hover:bg-yellow-500">
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineDotsVertical />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black text-white p-5">
          <ul className="flex flex-col gap-4 text-lg uppercase">
            <li>
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservation"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }
              >
              Book Table
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }
              >
                Cart
              </NavLink>
            </li>
            {/* User Logged In */}
            {userInfo ? (
              <li className="relative">
                <button
                  className="flex items-center space-x-2 px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <span>{userInfo.fullname}</span>
                  <IoChevronDown />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </NavLink>
                    <button
                      onClick={logoutHandler}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li className="bg-yellow-600 px-6 border-2 rounded-xl hover:bg-yellow-500">
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
