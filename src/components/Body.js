import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SimmerUI from "./SimmerUI";

import { Link } from "react-router-dom";
import { filterData } from "../utills/helpers";
import useFetchAllRestaurant from "../utills/useFetchAllRestaurant";
import useISOnlinne from "../utills/useISOnlinne";
const Body = () => {

  const [searchText, setSearchText] = useState("");
 
  const {
    isShowCards,
    setIsShowCards,
    allRestaurant,
    filteredRestaurant,
    setfilteredRestaurant,
  } = useFetchAllRestaurant();
  
  const isOnline = useISOnlinne();
  if (!isOnline) {
    return (
      <>
        <h2>Hey! You are offline ❌</h2>
        <h3>Pleace check your internet connection</h3>
      </>
    );
  }


  if (!isShowCards) {
    <h3>No restaurant found in your area! </h3>;
  }

  return filteredRestaurant?.length === 0 && isShowCards ? (
    <SimmerUI />
  ) : (
    <>
      <div className=" flex  bg-gray-300 justify-center items-center py-4" >
        <div className="flex justify-center items-center">
        <input
          type="text"
          className="p-2 m-2 w-[500px]  focus:outline-none focus:ring focus:border-blue-500 "
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
        className="bg-blue-400 text-xl hover:bg-yellow-600 p-2 m-2 text-white"
          onClick={() => {
            let data = filterData(searchText, allRestaurant);
            setfilteredRestaurant(data);
            if (data.length === 0) {
              setIsShowCards(false);
            } else {
              setIsShowCards(true);
            }
          }}
        >
          Search
        </button>
        </div>
     
      </div>
      <ul className="flex flex-wrap justify-center bg-gray-300 items-start shadow-lg shadow-white pb-12">
        {filteredRestaurant?.map((restaurant) => (
          <Link
          className="m-4"
            key={restaurant.data.id}
            to={"/restaurant/" + restaurant?.data?.id}
          >
            <RestaurantCard {...restaurant.data} />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Body;
