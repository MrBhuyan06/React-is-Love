import { AiFillHeart } from "react-icons/ai";

const CatCard = ({ name, price, img }) => {
  //   console.log(props.dog);
  return (
    <div>
      <div className="relative mt-2 overflow-hidden w-[280px] h-[220px] border-2 p-2">
        <div className="flex items-center justify-center gap-2 font-semibold">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <img className=" w-full object-fill" src={img} alt="" />
        <AiFillHeart className="absolute bottom-2 right-2 text-red-600 text-xl  cursor-pointer" />
      </div>
    </div>
  );
};
export default CatCard;
