import { IMG_CDN_URL } from "../Constant";

const RestaurantMenuList = ({ restaurant }) => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid grid-flow-col">
        <div className="col-span-1   ml-1 shadow-lg hidden md:flex">
          <ul className=" flex flex-col items-end w-64 ">
            {/* <h1 className="text-xs text-orange-500 font-bold  pr-5 mr-4">
              Recommended
            </h1> */}
            {Object.values(restaurant?.menu?.widgets).map((item, i) => (
              <li key={item["id"]} className="text-[#282c3f] text-[15px] font-normal cursor-pointer pt-1 pr-5 mr-4  ">
              {item["name"]}
              </li>
            ))}
            
          </ul>
        </div>
        <div className="col-span-1  shadow-lg px-2 md:px-10 ">
          <h1 className="font-semibold  text-black text-[18.2px]">
            Recommended
          </h1>
          <span className="text-[13px] font-medium uppercase text-[#686b78] mt-0">
            75 Items
          </span>
          {Object.values(restaurant?.menu?.items).map((item, i) => (
            <div className="flex flex-row pb-1 md:pb-5 mb-5 border-b-2 border-b-gray-400  "  key={item["id"]}>
              <div className="w-[200px] md:w-[300px]">
                <p></p>
                <h1 className="text-[17.8px] font-bold text-[#3e4152] pb-0 mb-0">
                {item["name"]}
                </h1>
                <p className="text-[14px] font-semibold">219</p>
                <p className="text-[16px] pt-2">
                  Serve 1-2 | Medium Spicy | Pasta prepared in a chef special
                  mixed sauce for a lips smocking taste.
                </p>
              </div>
              <div className="pl-10">
                <img
                  className=" h-24 rounded-sm mb-2 "
                  src={IMG_CDN_URL + item?.cloudinaryImageId}
                  alt="i-h"
                />
                <button className="p-1 m-2 border-2 w-20 border-blue-400 mt-1  ml-[40px] ] hover:text-white hover:bg-yellow-500 uppercase">
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-4 shadow-lg pl-2 hidden md:flex ">
          <h1 className="font-semibold  text-black text-[18.2px]">Cart</h1>
          <span>2 Items</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuList;
