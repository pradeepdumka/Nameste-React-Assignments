import { IMG_CDN_URL } from "../Constant";
import { useContext, useState } from "react";
import UserContext from '../utills/useContext';
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
  pname
}) => {
  const {user} = useContext(UserContext)
  return (
    <li className="flex flex-col p-2  bg-white w-80 min-h-[350px]">
     
        <div className="">
          <img className="w-[100%]" src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
        <div className="p-4 flex  flex-col ">
          <h3 className="font-bold text-xl ">{name}</h3>
          <h4 className="text-sm ">{cuisines.join(",")}</h4>
          <h5 className="text-sm ">{lastMileTravelString} </h5>
          <h1>{pname}</h1>
          <h1>{user.name}/{user.email}</h1>
        </div>
    </li>
  );
};

export default RestaurantCard;
