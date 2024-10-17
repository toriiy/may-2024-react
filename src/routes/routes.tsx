import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PostsPage from "../pages/PostsPage";
import UsersShortInfoPage from "../pages/UsersShortInfoPage";
import ErrorLayout from "../layouts/eror-layout/ErrorLayout";
import CommentsPage from "../pages/CommentsPage";
import HomePage from "../pages/HomePage";
import CurrentUserInfoPage from "../pages/CurrentUserInfoPage";
import PostsOfCurrentUserPage from "../pages/PostsOfCurrentUserPage";
import CurrentPostCommentsPage from "../pages/CurrentPostCommentsPage";
import CurrentPostPage from "../pages/CurrentPostPage";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersShortInfoPage/>},
            {path: 'users/:id', element: <CurrentUserInfoPage/>},
            {path: 'users/:id/user-posts', element: <PostsOfCurrentUserPage/>},
            {path: 'users/:id/user-posts/:id', element: <CurrentPostPage/>},
            {path: 'users/:id/user-posts/:id/post-comments', element: <CurrentPostCommentsPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ],
        errorElement: <ErrorLayout/>
    }
]);