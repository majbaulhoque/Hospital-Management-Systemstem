import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import CreateUser from '../Pages/CreateUser/CreateUser';


const Routes = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/create-user',
        element:<CreateUser/>
    },
])

export default Routes;