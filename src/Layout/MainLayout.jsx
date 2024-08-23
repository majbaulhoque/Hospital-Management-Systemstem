import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";
import Navbar from "../Component/Navbar/Navabar";
import "../assets/styles/sidebar/index.css"

const MainLayout = () => {
  return (
    <div className="  gap-2 w-100">
      <div className="w-100 position-sticky z-3 top-0">
      <Navbar/>
       
      </div>
      <div className="d-flex gap-2 w-100">
         <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
