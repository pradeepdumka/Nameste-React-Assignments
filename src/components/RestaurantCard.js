import { IMG_CDN_URL } from "../Constant";
import { useContext, useState } from "react";
import UserContext from "../utills/useContext";
import { AiOutlineStar } from "react-icons/ai";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => {
  const { user } = useContext(UserContext);

  return (
    <li className="flex flex-col m-2 shadow-lg shadow-white  bg-white w-36 sm:w-56 md:w-64 md:min-h-[345px] hover:mt-1 border-2 ">
      <div className="p-2">
        <img className="w-[100%]" src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="p-4 flex  flex-col ">
        <p className="font-medium break-words text-base text-ellipsis overflow-hidden whitespace-nowrap ">
          {name}
        </p>
        <p className="text-sm mt-1  text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap min-h-fit">
          {cuisines.join(",")}
        </p>
        <ul className="text-sm mt-4   flex  mb-2  border-b-2 ">
          <li
            key={avgRating}
            className={
              "flex justify-center items-center border w-10 text-white text-md " +
              (avgRating && parseFloat(avgRating) > 4
                ? "bg-[#48c479] "
                : "bg-[#db7c38] ")
            }
          >
            <AiOutlineStar />
            {avgRating}
          </li>
          <li key={"1"} className="mx-2 hidden md:flex">
            {deliveryTime} min
          </li>
          <li key={"2"} className="ml-2">
            {costForTwoString}
          </li>
        </ul>
        <button className=" text-md border-2 border-blue-400 p-2 m-2 hover:bg-yellow-500 hover:text-white">
          View Item
        </button>
      </div>
    </li>
  );
};

export default RestaurantCard;
