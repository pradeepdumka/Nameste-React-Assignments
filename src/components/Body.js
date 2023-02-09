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
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
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
      <ul className="restaurant-list">
        {filteredRestaurant?.map((restaurant) => (
          <Link
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
