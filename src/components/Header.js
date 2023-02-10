import {Link} from 'react-router-dom'
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
    return (
      <div className="flex justify-between py-2 bg-blue-400 shadow-md">
        <Title />
        <ul className="flex items-center">
          <li className=' text-white  text-xl uppercase p-2 m-2 hover:bg-yellow-600 hover:underline'>
            <Link to='/' className=''>Home</Link>
          </li>
          <li className=' text-white  uppercase text-xl p-2 m-2 hover:bg-yellow-600 hover:underline text-white p-2 m-2'>
          <Link to='/about'>About</Link>
          </li>
          <li className=' text-white uppercase text-xl p-2 m-2 hover:bg-yellow-600 hover:underline text-white'>
            <Link to='/contact'>Contact</Link>  
          </li>
        </ul>
      </div>
    );
  };
  export default Header