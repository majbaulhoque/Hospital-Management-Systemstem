import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";


const MainLayout = () => {
    return (
        <div className="d-flex">
            <Sidebar/>
            <div className="p-lg-4">
            <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;