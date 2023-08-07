import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";


// Router Setup
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    }
])