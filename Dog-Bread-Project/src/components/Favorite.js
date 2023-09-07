import React from "react";

import { useDispatch, useSelector } from "react-redux";
import store from "../constants/slice.js";
import CatCard from "./CatCard.js";
import { clearAll } from "../constants/appFav.js";

const Favorite = () => {
  const favList = useSelector((store) => store.fav.favorite);
  // console.log(favList);
  const dispatch = useDispatch();
  function clearHandler() {
    dispatch(clearAll());
  }
  if (favList?.length == 0) {
    return;
  }
  console.log("reaced");
  return (
    <div className="w-1/2 mx-auto  bg-gray-200 mt-3">
      <button
        className="mx-auto bg-red-600 m-4 ml-[55px] p-2 rounded-lg"
        onClick={clearHandler}
      >
        Clear All
      </button>
      <div className="o  gap-2 flex justify-center mt-3">
        <hr />

        {favList?.map((fav) => {
          return <CatCard key={fav.id} info={fav} />;
        })}
      </div>
    </div>
  );
};

export default Favorite;
