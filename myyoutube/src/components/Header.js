import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appNavigator.js";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col items-center justify-between p-4 shadow-lg">
      {/* Section */}
      <div className="flex gap-4 col-span-1">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu"
          className="h-10 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
          className="h-10"
        />
      </div>
      {/* section 2 */}
      <div className="col-span-10">
        <div className="">
          <input
            type="text"
            placeholder=""
            className="w-1/2 p-2 rounded-l-full border-2 border-gray-200"
          />
          <button className=" bg-gray-300 border-2 rounded-r-full p-2">
            Search
          </button>
        </div>
      </div>
      {/* section 3 */}
      <div className="col-span-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknXPAlzcu3hpgKYZ-Olaj-9IxgNcCYjXwDQ&usqp=CAU"
          alt=""
          className="w-10"
        />
      </div>
    </div>
  );
};

export default Header;
