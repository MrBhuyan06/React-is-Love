import { AiOutlineSearch } from "react-icons/ai";
import CatCard from "./CatCard.js";
import { useState } from "react";
import { render } from "react-dom";
const Hero = () => {
  const [search, setSearch] = useState("");
  console.log("render", search);
  return (
    <main>
      <div className="  w-1/2 mx-auto mt-10  p-4 bg-gray-100 rounded-md ">
        <div className="relative w-1/2 0 mx-auto">
          <input
            type="text"
            className="w-full p-2 outline-none border-2 rounded-l-full border-black"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="absolute bg-blue-500 p-2.5 rounded-r-full font-semibold">
            search
          </button>
        </div>
        <div>
          <CatCard />
        </div>
      </div>
    </main>
  );
};
export default Hero;
