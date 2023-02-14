import { IMG_CDN_URL } from "../Constant.js";
const RestaurantMenuInfoHeader = ({restaurant}) => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 ">
      <div className="grid grid-flow-col">
        <div className="col-span-1  w-[100%] hidden md:flex">
          <img
            className="w-64 p-1"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt="menu-item-img"
          />
        </div>
        <div className="col-span-8   w-[100%] ">
          <h1 className="text-white text-[32px] font-light">{restaurant?.name}</h1>
          <p className="text-gray-400 text-[15px] mt-1">
          {restaurant?.cuisines.join(' , ')}
          </p>
          <p className="text-gray-400 text-[15px] mt-1">
          {restaurant?.locality}
          </p>

          <ul className="flex flex-row">
            <li className="text-white  mt-1  mr-4 w-20  border-r-2  border-gray-400  ">
              <p className="font-normal ">{restaurant?.avgRatingString} Star</p>
              <span className="text-gray-400 text-xs mt-0 pt-0">{restaurant?.totalRatingsString} </span>
            </li>
            <li className="text-white  mt-1 w-20 border-r-2 border-gray-400 mr-4">
              <p className="font-normal">{restaurant?.sla?.slaString}</p>
              <span className="text-gray-400 text-xs">Delivery Time</span>
            </li>
            <li className="text-white mt-1 ">
              <p className="font-normal">{ restaurant?.costForTwoMsg}</p>
              <span className="text-gray-400 text-xs">Cost For two</span>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
         
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuInfoHeader;
