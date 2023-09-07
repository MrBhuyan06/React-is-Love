import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addFav } from "../constants/appFav.js";

const CatCard = ({ info }) => {
  //   console.log(props.dog);
  const dispatch = useDispatch();
  function addFavHandler() {
    dispatch(addFav(info));
  }
  return (
    <div>
      <div className="relative mt-2 overflow-hidden w-[280px] h-[220px] border-2 p-2">
        <div className="flex items-center justify-center gap-2 font-semibold">
          <p>{info.name}</p>
          <p>{info.price}</p>
        </div>
        <img className=" w-full object-fill" src={info.img} alt="" />
        <AiFillHeart
          className="absolute bottom-2 right-2 text-red-600 text-xl  cursor-pointer"
          onClick={addFavHandler}
        />
      </div>
    </div>
  );
};
export default CatCard;
