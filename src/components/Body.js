import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SimmerUI from "./SimmerUI";
 
import {Link} from 'react-router-dom'
import { API_CDN_URL } from "../Constant";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setallRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [isShowCards, setIsShowCards] = useState(false);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    setIsShowCards("false");
    console.log(isShowCards)
    let data = await fetch(API_CDN_URL);
    let RES = await data.json();
    console.log(RES)
    setallRestaurant(RES?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(RES?.data?.cards[2]?.data?.data?.cards);
    setIsShowCards("true");
  };

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
            if(data.length === 0 ){
              setIsShowCards(false)
            }
            else{
              setIsShowCards(true)
            }
          }}
        >
          Search
        </button>
      </div>

      {!isShowCards ? (
        <h3>No recored Found! </h3>
      ) : (
        <ul className="restaurant-list">
          {filteredRestaurant?.map((restaurant) => (
            <Link to={'/restaurant/' + restaurant?.data?.id} key={restaurant.data.id} ><RestaurantCard {...restaurant.data} /></Link>
            
          ))}
        </ul>
        
      )}
    </>
  );
};

export default Body;
