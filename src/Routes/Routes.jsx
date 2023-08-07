import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Details from "../Pages/Details";


// Router Setup
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path:"/:name",
        element: <Details/>
    }
])