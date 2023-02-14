import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant.js";
import useRestaurant from "../utills/useRestaurant.js";
import {useDispatch} from 'react-redux';
import { addItems } from "../utills/cartSlice.js";
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  const dispatch =useDispatch()
  const addToCartHandler = (item) => {
      dispatch(addItems(item))
  };
  
  return !restaurant ? (
    "Loading..."
  ) : (
    <>
          <div className=" flex flex-col bg-[#171a29] h-44 md:h-64 justify-center items-center shadow-lg mt-10"></div>
      <div className="flex py-4 justify-evenly  ">
        <div className="bg-gray-300 mt-6 h-[600px]">
          
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <h1 className="font-bold text-2xl pb-2">{restaurant?.name}</h1>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRatingString} Str</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <ul>
            <h2 className="font-bold text-xl ml-4">Menu Items</h2>
            {Object.values(restaurant?.menu?.items).map((item, i) => {
              return (
                
                <div key={item["id"]} className="flex mx-5 border border-solid  justify-between items-center mt-2" >
                <li className="px-5" >{item["name"]}</li>
                  <button
                    className="bg-yellow-300 my-2 mx-2 py-1 px-1"
                    onClick={()=>addToCartHandler(item)}
                  >
                    + Add To Cart
                  </button>
                </div>
                 
               
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
