import {Link} from 'react-router-dom'
const Title = () => {
    return (
      <img
        id="logo"
        alt="image"
        src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      />
    );
  };
  
  const Header  = () => {
    return (
      <div className="container">
        <Title />
        <ul className="nav-item">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className="searchBar">
          <Link to='/about'>About</Link>
          </li>
          <li className="user">
            <Link to='/contact'>Contact</Link>  
          </li>
        </ul>
      </div>
    );
  };
  export default Header