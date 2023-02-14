import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import UserContext from "./utills/useContext";
import store from "./utills/store";
import CartFoodVilla from "./components/CartFoodVilla";

const InstaMartComponent = lazy(() => import("./components/InstaMart"));
const About = lazy(() => import("./components/About"));

const AppLayOut = () => {
  const [user, setUser] = useState({
    name: "Mr Pradeep",
    email: "pradeepdumka007@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Body name={"Pradeep "} />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Lazy Loading Hear....</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Instamart is Now Loading .....</h1>}>
            <InstaMartComponent />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <CartFoodVilla />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
