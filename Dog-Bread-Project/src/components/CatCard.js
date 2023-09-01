import { AiFillHeart } from "react-icons/ai";

const CatCard = () => {
  return (
    <div>
      <div className="relative w-[120px]">
        <img
          className=""
          src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
          alt=""
        />
        <AiFillHeart className="absolute bottom-0 right-2 text-red-600 text-xl  cursor-pointer" />
      </div>
    </div>
  );
};
export default CatCard;
