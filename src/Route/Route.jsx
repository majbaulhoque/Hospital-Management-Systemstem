import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import LoginPage from '../Pages/Login/LoginPage';
import SignUpPage from '../Pages/SignUp/SignUpPage';


const Route = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/sign-up',
        element:<SignUpPage/>
    },
])

export default Route;