import { useParams } from "react-router-dom";

import useRestaurant from "../utills/useRestaurant.js";
import { useDispatch } from "react-redux";
import { addItems } from "../utills/cartSlice.js";

import RestaurantMenuInfoHeader from "./RestaurantMenuInfoHeader";
import RestaurantMenuList from "./RestaurantMenuList.js";
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  console.log(restaurant);
  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    dispatch(addItems(item));
  };

  return !restaurant ? (
    "Loading..."
  ) : (
    <>
      <div className=" bg-[#171a29] h-72 md:h-64 shadow-lg mt-10">
        <RestaurantMenuInfoHeader restaurant={restaurant} />
      </div>
      <RestaurantMenuList restaurant={restaurant} />
    </>
  );
};
export default RestaurantMenu;
