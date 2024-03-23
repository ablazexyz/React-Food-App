import ReactDOM from "react-dom/client";
import Body from "./src/Body";
import Footer from "./src/Footer";
import Header from "./src/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./src/Error";
import About from "./src/About";
import Contact from "./src/Contact";
import RestaurantMenu from "./src/RestaurantMenu";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);