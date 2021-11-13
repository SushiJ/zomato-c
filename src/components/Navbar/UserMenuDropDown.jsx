import { FaUserCircle } from "react-icons/fa";

export const IsUser = () => {
  return (
    <>
      <div className="relative w-20">
        <div className="text-4xl cursor-pointer text-zomato-secondary-500">
          <FaUserCircle onClick={userHandler} />
        </div>
        <div className="absolute"></div>
      </div>
    </>
  );
};

export const IsUserNot = () => {
  return (
    <div className="flex ml-4 space-x-4 ">
      <button className="text-xl text-gray-400 transition ease-in-out hover:text-gray-800">
        Login
      </button>
      <button className="text-xl text-gray-400 transition ease-in-out hover:text-gray-800 whitespace-nowrap">
        Sign Up
      </button>
    </div>
  );
};
