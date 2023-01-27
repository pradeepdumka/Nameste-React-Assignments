import { IMG_CDN_URL } from "../Constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <li className="card">
      <div className="card-item">
        <div className="card-image">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h5>{lastMileTravelString} </h5>
        </div>
      </div>
    </li>
  );
};

export default RestaurantCard;
