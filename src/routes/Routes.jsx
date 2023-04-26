import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import SingleNews from "../pages/Home/SingleNews/SingleNews";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
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
                element: <SingleNews />,
                loader: ()=> fetch("/news.json")
            }
        ]
    }
]);

export default router;