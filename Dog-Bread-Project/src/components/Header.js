import { AiFillHeart } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className="flex items-center w-1/2 mx-auto mt-10 justify-between p-4 bg-gray-300 rounded-md ">
        <p className="font-semibold">DOG BREAD</p>
        <AiFillHeart className="text-red-700" />
      </div>
    </header>
  );
};
export default Header;
