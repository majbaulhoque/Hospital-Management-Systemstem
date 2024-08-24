import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Login/Login';
import CreateUser from '../Pages/CreateUser/CreateUser';
import Dashboard from '../Pages/Dashboard/Dashboard';
import UserRole from '../Pages/UserRole/UserRole';


const Routes = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard/>,
            },
            {
                path:'/user-role',
                element:<UserRole/>
            }
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