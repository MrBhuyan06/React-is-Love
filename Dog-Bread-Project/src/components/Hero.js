import { AiOutlineSearch } from "react-icons/ai";
import CatCard from "./CatCard.js";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { dogData } from "../constants/mockdata.js";
const Hero = () => {
  const [allDog, setallDog] = useState(dogData);
  const [filterDog, setAllFilterDog] = useState(dogData);
  const [search, setSearch] = useState("");

  function searchHandler(allgod, name) {
    const filterDog = allDog.filter((dog) => {
      return dog.name.toLowerCase().includes(name.toLowerCase());
    });
    return filterDog;
  }

  //   async function getDog() {
  //     const stream = await fetch("https://dog.ceo/api/breed/hound/images");
  //     const data = await stream.json();
  //     console.log(data);
  //     setallDog(data.message?.[1]);
  //     console.log(allDog);
  //   }
  //   useEffect(() => {
  //     getDog();
  //   }, []);
  //   if (!allDog.length) {
  //     return;
  //   }
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
          <button
            className="absolute bg-blue-500 p-2.5 rounded-r-full font-semibold"
            onClick={() => {
              const filterData = searchHandler(allDog, search);
              setAllFilterDog(filterData);
            }}
          >
            search
          </button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="bg-red-600 p-2 mt-1 rounded-md">
            Low to High
          </button>
          <button className="bg-blue-600 p-2 mt-1 rounded-md">
            High to Low
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterDog.map((dog, id) => {
            return <CatCard key={id} {...dog} />;
          })}
        </div>
      </div>
    </main>
  );
};
export default Hero;
