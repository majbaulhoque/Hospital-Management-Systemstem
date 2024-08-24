import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Login/Login';
import CreateUser from '../Pages/CreateUser/CreateUser';
import Dashboard from '../Pages/Dashboard/Dashboard';
import UserRole from '../Pages/UserRole/UserRole';
import DoctorManagement from '../Pages/DoctorManagement/DoctorManagement';


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
            },
            {
                path:'doctor-management',
                element:<DoctorManagement/>
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