import { SlEnvolope } from "react-icons/sl";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "../redux/actions/userAction";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {toast} from 'react-toastify';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      toast.success('Login successfully')
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black p-4">
      <div className="w-full max-w-4xl bg-black rounded-lg shadow-lg overflow-hidden grid lg:grid-cols-2 grid-cols-1">
        <div className="hidden lg:block">
          <img
            src="./homeImgs/login.jpg"
            alt="Login"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-8 bg-gray-800">
          <h1 className="text-center font-bold text-3xl text-white mb-4">
            Welcome Back
          </h1>
          <span className="font-light text-white text-lg mb-6">
            Loging using your email and password
          </span>
          {error && <h1 className="text-3xl text-red-700 m-3">{error}</h1>}
          <div className="w-full max-w-md">
            <form onSubmit={submitHandler}>
              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-white"
                >
                  Enter Email
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

              {/* Password Field */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full bg-teal-500 text-white font-semibold py-2 rounded mt-4 `}
              >
                {loading ? "loading..." : "Login"}
              </button>
              <Link to='/register' >
                <h1 className="text-white mt-5 text-center">
                  Don&apos;t have account yet ?{" "}
                  <strong className="underline" >Register for Free</strong>
                </h1>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
