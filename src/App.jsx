import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Authentication/Authentication";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      {/* footer section  */}
      <footer className=" p-5">
        <div className="lg:flex justify-between gap-5 items-center grid grid-cols-1">
          <div className="flex-1">
            <img
              src="https://raw.githubusercontent.com/mehhed/assignment-img/main/Black%20and%20Blue%20Retro%20Illustrated%20Automotive%20Technology%20Logo.png"
              alt=""
              className="w-28 h-28 rounded-full "
            />
            <div className="text-5xl ">Auto Revolve Hub</div>
            <p className=" pt-5 italic">
              Your Ultimate Automotive Hub for Innovation and Inspiration!
              Explore the latest in automotive technology, design, and
              performance. Join us on a journey of discovery and stay in the
              driver's seat of the future!"
            </p>
          </div>
          <div className=" flex-1 flex justify-center gap-5">
            <Link to={"/"} className="underline">
              Home
            </Link>
            <Link
              to={currentUser ? "/AddProduct" : "logIn"}
              className="underline">
              Add Product
            </Link>
            <Link to={currentUser ? "/MyCart" : "logIn"} className="underline">
              My Cart
            </Link>
          </div>
        </div>

        <div className="text-center  pt-5 mt-5 border-t-2">
          © 2023 AutoRevolveHub. All rights reserved. Privacy Policy | Terms of
          Service | Contact Us
        </div>
      </footer>
    </div>
  );
}

export default App;
