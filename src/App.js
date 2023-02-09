import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";

import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import useISOnlinne from "./utills/useISOnlinne";

const About = lazy(()=>import('./components/About'))
const AppLayOut = () => {
  const isOnline = useISOnlinne();
console.log(isOnline)
  return (
    <>
      <Header />
       <Outlet />
      <Footer />
    </>
  );
};

const appRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<AppLayOut />,
      errorElement:<Error />,
      children:[
        {
          path:'',
          element:<Body />
        },
        {
          path:'/about',
          element:<Suspense fallback={<h1>Lazy Loading Hear....</h1>}>
            <About />
          </Suspense>,
          children:[
            {
            path:'profile',
            element:<Profile />
           }
          ]
        },
        {
          path:'/contact',
          element:<ContactUs />
        },
        {
          path:'/restaurant/:id',
          element:<RestaurantMenu />
        }
      ]
    }
    
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRoutes}/>);
