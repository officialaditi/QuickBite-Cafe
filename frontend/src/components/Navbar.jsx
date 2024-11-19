import { useState } from "react";
import { HiOutlineDotsVertical, HiOutlineX, HiOutlineShoppingCart } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-black text-white cursor-pointer w-full fixed z-50">
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
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menus"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Menus
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
              Cart <span className="inline-flex"><HiOutlineShoppingCart /></span>
            </NavLink>
          </li>
          <li className="bg-yellow-600 px-6 border-2 rounded-xl hover:bg-yellow-500">
            <NavLink to="/login">Login</NavLink>
          </li>
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
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menus"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }
              >
                Menus
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
            <li className="bg-yellow-600 px-6 border-2 rounded-xl text-center hover:bg-yellow-500">
              <NavLink
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
