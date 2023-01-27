import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constant.js";
 
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
   
  let fetchRestaurantMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.4594965&lng=77.0266383&menuId=" +
        id
    );
    const json = await data.json();
    
    setRestaurant(json?.data);
    
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  console.log("Render Called");
  return !restaurant ? (
    "Rendering"
  ) : (
    <>
      <div className="restaurant_menu">
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
