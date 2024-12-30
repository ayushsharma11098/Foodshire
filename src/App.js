import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"; 
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";
import Grocery from "./components/Grocery";
import Cart from "./components/Cart";

const About = lazy(()=> import("./components/About"));

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");


const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </Provider>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about", 
                element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>
            },
            {
                path: "/contact", 
                element: <Contact />
            },
            {
                path: "/grocery", 
                element: <Grocery />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart />
            },

        ]
    },
    
]);
    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);