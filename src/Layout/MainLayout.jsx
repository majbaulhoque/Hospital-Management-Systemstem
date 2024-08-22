import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";


const MainLayout = () => {
    return (
        <div className="d-flex">
            <Sidebar/>
            <Outlet />
        </div>
    );
};

export default MainLayout;