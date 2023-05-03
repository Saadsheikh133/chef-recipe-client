/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Blog from "../pages/shared/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";
import About from "../pages/shared/about/About";
import ChefRecipes from "../pages/chefRecipes/ChefRecipes";
import RecipeLayout from "../layout/RecipeLayout";
import PrivateRoute from "../privateRoutes/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    },
    {
        path: 'recipe',
        element: <PrivateRoute>
            <RecipeLayout></RecipeLayout>
        </PrivateRoute>,
        children: [
            {
                path: ':id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefInfo/${params.id}`)
            }
        ]
    }
]);
export default router;