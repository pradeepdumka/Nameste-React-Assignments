import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SimmerUI from "./SimmerUI";

import { Link } from "react-router-dom";
import { filterData } from "../utills/helpers";
import useFetchAllRestaurant from "../utills/useFetchAllRestaurant";
import useISOnlinne from "../utills/useISOnlinne";
import { Carousel } from "@trendyol-js/react-carousel";
import { useContext } from "react";
import UserContext from "../utills/useContext";

const Body = ({ name }) => {
  const [searchText, setSearchText] = useState("");
  // const { user, setUser } = useContext(UserContext);
  const {
    isShowCards,
    setIsShowCards,
    allRestaurant,
    filteredRestaurant,
    setfilteredRestaurant,
  } = useFetchAllRestaurant();
  console.log(allRestaurant);
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
      <div className=" flex flex-col bg-[#171a29] h-44 md:h-64 justify-center items-center shadow-lg mt-10">
        <h1 className="text-white text-[15px] sm:text-xl md:text-2xl m-3  ">
          Nameste are you hungry! <span>Find Your favourite food hear.</span>
        </h1>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="p-2  w-[275px]  sm:w-[500px] focus:outline-none  "
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-400 text-xl hover:bg-yellow-600  p-2 rounded-r-sm   text-white"
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
            Find
          </button>
          {/* <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            value={user.email}
            onChange={(e) =>  setUser({ ...user, email: e.target.value })}
          /> */}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center  items-start  py-12">
          {filteredRestaurant?.map((restaurant) => (
            <Link
              key={restaurant.data.id}
              to={"/restaurant/" + restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant.data} pname={name} />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Body;
