import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CommentsPage from "../pages/CommentsPage";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]
    }
]);