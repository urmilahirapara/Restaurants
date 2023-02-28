import Title from "./Title";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [isloggedin, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  const {user}=useContext(UserContext);
  return (
    <>
      <div className="flex justify-between border h-28 bg-pink-50  sm:bg-blue-50 md:bg-yellow-50">
        <Title />
        <div className="nav-items my-0.5">
          <ul className="flex py-4 px-4">
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/"
            >
              <li className="px-2">
                <b>Home</b>
              </li>
            </Link>
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/AboutUs"
            >
              <li>
                <b>About</b>
              </li>
            </Link>
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/ContactUs"
            >
              <li>
                <b>Contact</b>
              </li>
            </Link>
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/Cart"
            >
              <li>
                <b>Cart</b>
              </li>
            </Link>
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/Instamart"
            >
              <li>
                <b>Instamart</b>
              </li>
            </Link>
            <h4>{isOnline ? "💹" : "🟠"}</h4>
          </ul>
        </div>
        <h1 className="p-10 font-bold text-red-900 ">{user.name}</h1>
        
        {isloggedin ? (
          <button
            className="px-5  py-2 mx-2 my-7 h-14 bg-yellow-900 text-white rounded-lg"
            onClick={() => setLoggedIn(false)}
          >
            Login
          </button>
        ) : (
          <button
            className="px-10 py-2 mx-2 my-7 h-14 bg-yellow-900 text-white rounded-lg"
            onClick={() => setLoggedIn(true)}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};
export default Header;
