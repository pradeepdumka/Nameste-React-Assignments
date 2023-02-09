import { useState, useEffect } from "react";
import { API_CDN_URL } from "../Constant";
const useFetchAllRestaurant = () => {
  const [allRestaurant, setallRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [isShowCards, setIsShowCards] = useState(false);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
  
    try{
        setIsShowCards(true);
        let data = await fetch(API_CDN_URL);
        let RES = await data.json();
        if(RES){
            setallRestaurant(RES?.data?.cards[2]?.data?.data?.cards);
            setfilteredRestaurant(RES?.data?.cards[2]?.data?.data?.cards);
        }else{
            setIsShowCards("false");
        }
    }catch(err){
        setIsShowCards("false");
    }
  
  };

  return {
    isShowCards,
    setIsShowCards,
    allRestaurant,
    filteredRestaurant,
    setfilteredRestaurant,
    
  };
};

export default useFetchAllRestaurant;
