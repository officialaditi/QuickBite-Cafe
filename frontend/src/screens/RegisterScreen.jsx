import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { register } from "../redux/actions/userAction";
import { SlEnvolope } from "react-icons/sl"; // Fixed typo
import { BsPersonCircle } from "react-icons/bs";
import { RiLockPasswordLine, RiPhoneFill } from "react-icons/ri";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || "/";

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      toast.success("Register Successfully!");
      navigate(redirect);
    }
  }, [redirect, navigate, userInfo]);

 

  const submitHandler = (e) => {
    e.preventDefault(); 
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(fullname, email, phoneNumber, password));
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black p-4">
      <div className="w-full max-w-4xl bg-black rounded-lg shadow-lg overflow-hidden grid lg:grid-cols-2 grid-cols-1">
        <div className="hidden lg:block">
          <img
            src="./homeImgs/register.jpg"
            alt="Register"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-8 bg-gray-800">
          <h1 className="text-center font-bold text-3xl text-white mb-4">
            Welcome
          </h1>
          <span className="font-light text-white text-lg mb-6">
            Register using your Fullname, email, Phone Number and password
          </span>
          {error && <h1 className="text-red-500">{error}</h1>}
          {message && <h1 className="text-red-500">{message}</h1>}
          <div className="w-full max-w-md">
            <form onSubmit={submitHandler}>
              {/* Full Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="block text-md font-medium text-white"
                >
                  Full Name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <BsPersonCircle className="text-gray-400" />
                  </div>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="Enter Full Name"
                    className="block w-full rounded-md border-0 py-2 pl-10 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-white"
                >
                  Email Address
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <SlEnvolope className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="block w-full rounded-md border-0 py-2 pl-10 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              {/* Phone Number Field */}
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-md font-medium text-white"
                >
                  Phone Number
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <RiPhoneFill className="text-gray-400" />
                  </div>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="E.g., +91 98765 43210"
                    className="block w-full rounded-md border-0 py-2 pl-10 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              {/* Password Fields */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-md font-medium text-white"
                >
                  Password
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <RiLockPasswordLine className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="**********"
                    className="block w-full rounded-md border-0 py-2 pl-10 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-md font-medium text-white"
                >
                  Confirm Password
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <RiLockPasswordLine className="text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="**********"
                    className="block w-full rounded-md border-0 py-2 pl-10 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full bg-teal-500 text-white font-semibold py-2 rounded mt-4`}
              >
                {loading ? "Loading..." : "Register"}
              </button>
              <Link to="/login">
                <h1 className="text-white mt-5 text-center">
                  Already have an account?{" "}
                  <strong className="underline">Login</strong>
                </h1>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
