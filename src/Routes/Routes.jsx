import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Login/Login';
import CreateUser from '../Pages/CreateUser/CreateUser';
import Dashboard from '../Pages/Dashboard/Dashboard';


const Routes = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard/>,
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