import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./componants/AboutUs";
import ContactUs from "./componants/ContactUs";
import Error from "./componants/Error";
import RestaurantMenu from "./componants/RestaurantMenu";
import Body from "./componants/Body";
import Profile from "./componants/Profile";
import Shimmer from "./componants/Shimmer";
import UserContext from "./utils/UserContext";

const Instamart = lazy(() => import("/componants/Instamart"));
const AppLayout = () => {
  const[user,setUser]=useState({
    name:"urmi hirapara",
          email:"urvihirapara@gmail.com",
  });

  return (
    <>
    
    <UserContext.Provider value={{user:user,setUser:setUser}}>
    <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/aboutus",
        element: <AboutUs />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body user={{
          name:"urmi hirapara",
          email:"urvihirapara@gmail.com",
        }} />,
      },

      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
