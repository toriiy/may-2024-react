import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import ErrorLayout from "../layouts/eror-layout/ErrorLayout";
import CommentsPage from "../pages/CommentsPage";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ],
        errorElement: <ErrorLayout/>
    }
]);