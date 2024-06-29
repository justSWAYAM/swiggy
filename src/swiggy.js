import React , {lazy , Suspense, useState , useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import RestaurantMenu from "./components/ResaturantMenu.js";  // Corrected import
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from './utils/UserContext.js';
import {Provider} from "react-redux";
import appStore from './utils/appStore.js';
import Cart from './components/Cart';


const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

 
const AppLayout = () => {

  const [userName , setuserName] = useState();

  useEffect(() =>{
    const data = {
      name : "Swayam mishra", 
    };
    setuserName(data.name);
  },[]);
  return (
    <Provider  store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName , setuserName }}>
    
    <div className="App">
     <Header />
    <Outlet />
    </div>

    </UserContext.Provider>
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback = {<h1>Loading ...</h1>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,  // Corrected component name
      },
      {
         path: "/grocery",
         element: <Suspense fallback = {<h1>Loading ...</h1>}><Grocery /></Suspense>
      },
      {
        path : "/cart",
        element :<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// Removed duplicate component declaration

