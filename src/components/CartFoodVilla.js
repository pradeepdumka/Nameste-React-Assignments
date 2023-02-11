import { useDispatch, useSelector } from "react-redux";

import { IMG_CDN_URL } from "../Constant";
import { removeItem, clearCart } from "../utills/cartSlice";
const CartFoodVilla = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const removeItemHandler = (index) => {
    dispatch(removeItem(index));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  if (cartItems.length === 0)
    return (
      <h1 className="font-bold text-3xl p-10">No Items Added On the Cart...</h1>
    );
  return (
    <>
      <div className="flex justify-between">
        <h1 className="p-2 font-bold text-xl">
          Cart ({cartItems.length}) Items
        </h1>
        <button
          onClick={() => clearCartHandler()}
          className="font-bold bg-yellow-300 p-2 m-2 hover:bg-yellow-600 w-24"
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-wrap">
        {cartItems.map((item, i) => (
          <div
            key={item?.id}
            className="flex flex-wrap p-2 m-3  border border-gray-200 shadow-lg   w-60"
          >
            <div className="">
              <img
                className="w-[100%]"
                src={IMG_CDN_URL + item?.cloudinaryImageId}
              />
            </div>
            <div className="p-4 flex  flex-col ">
              <h3 className="font-bold text-xl ">{item?.name}</h3>
              <h4 className="text-sm ">{item?.category} </h4>
              <h5 className="text-sm mb-3 ">Rs {item?.price / 100} </h5>
              <button
                onClick={() => removeItemHandler(i)}
                className="font-bold bg-yellow-300 p-2 m-2 hover:bg-yellow-600 w-24"
              >
                -Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartFoodVilla;
