import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";
import Navbar from "../Component/Navbar/Navabar";
import "../assets/styles/sidebar/index.css"

const MainLayout = () => {
  return (
    <div className="d-lg-flex w-100">
      <div className="custom-sidebar-width">
        <Sidebar />
      </div>
      <div className=" w-100">
        <Navbar/>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
