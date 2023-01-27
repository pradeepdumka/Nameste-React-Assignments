import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProfileC from "./ProfileClass.js";
import ProfileFunctional from "./Profile";
import { Component } from "react";
// const AboutUs=()=>{
//     return(
//         <>
//             <h1>About Us Page</h1>
//             <ProfileFunctional  name='Swati' age='24'/>
//             <ProfileC  name='pradeep' age='23'/>

//          </>
//     )
// }

class AboutUs extends Component {
  constructor(props) {
    super(props);
     console.log('Parent Constructor!')
  }

  componentDidMount(){
    console.log('Parent Did Mount!')
  }
  render() {
    console.log('Parent Render!')
    return (
      <>
        <h1>About Us Page</h1>
        
        <ProfileC name="FirstChild" age="23" />
        <ProfileC name="SecondChild" age="23" />
      </>
    );
  }
}
export default AboutUs;
