import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant.js";
import useRestaurant from "../utills/useRestaurant.js";
 
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant =  useRestaurant(id)
    
  return !restaurant ? (
    "Loading..."
  ) : (
    <>
      <div className="flex px-4 justify-evenly">
        <div>
          <h1>{restaurant?.name}</h1>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRatingString} Str</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <ul>
            <h2>Menu</h2>
            {Object.values(restaurant?.menu?.items).map((item, i) => {
             
              return <li key={item["id"]}>{item["name"]}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
