import { useState, useEffect } from "react";
import { RESTRAU_DETAILS_URL } from "../Constant";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState();

  let fetchRestaurantMenu = async () => {
    const data = await fetch(RESTRAU_DETAILS_URL + id);
    const json = await data.json();
    setRestaurant(json?.data);
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  return restaurant;
};

export default useRestaurant;
