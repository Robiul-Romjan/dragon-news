import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import SingleNews from "../pages/Home/SingleNews/SingleNews";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: ()=> fetch("news.json")
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ()=> fetch("/news.json"),
            }
        ], 
    },
    {
        path: "/news",
        element: <NewsLayout />,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><SingleNews /> </PrivateRoute>,
                loader: ()=> fetch("/news.json")
            }
        ]
    },
    {
        path: "/",
        element: <LoginLayout />,
        children: [
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/register",
                element: <Register />
            },
            {
                path: "/terms",
                element: <Terms />
            }
        ]
    }
]);

export default router;