import {Link} from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utills/useContext';
import {useSelector} from 'react-redux';
const Title = () => {
    return (
      <img
      className='h-14 px-4'
        id="logo"
        alt="image"
        src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      />
    );
  };
  
  const Header  = () => {
   const {user} = useContext(UserContext);
   const cartItems = useSelector((store)=>store.cart.items);
   console.log(cartItems)
    return (
      <div className="flex justify-between py-2 bg-blue-400 shadow-md">
        <Title />
        <ul className="flex items-center">
          <li className=' text-white  text-xl uppercase p-2 m-2 hover:bg-yellow-600 hover:underline'>
            <Link to='/' className=''>Home</Link>
          </li>
          <li className='text-white  uppercase text-xl p-2 m-2 hover:bg-yellow-600 hover:underline'>
          <Link to='/about'>About</Link>
          </li>
          <li className=' text-white uppercase text-xl p-2 m-2 hover:bg-yellow-600 hover:underline'>
            <Link to='/contact'>Contact</Link>  
          </li>
          <li className=' text-white uppercase text-xl p-2 m-2 hover:bg-yellow-600 hover:underline'>
            <Link to='/instamart'>InstaMart</Link>  
          </li>
          <li className=' text-white uppercase text-xl p-2 m-2 hover:bg-yellow-600 hover:underline'>
          <Link to='/cart'>Cart ( {cartItems.length} ) Items</Link>
          </li>
        </ul>
        <h4> {user.name}/ {user.email}</h4>
      </div>
    );
  };
  export default Header