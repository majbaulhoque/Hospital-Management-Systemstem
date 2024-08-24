import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";
import Navbar from "../Component/Navbar/Navabar";
import "../assets/styles/sidebar/index.css";
import { useState } from "react";

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="d-flex">
      <div className="">
        <Sidebar setOpen={setOpen} open={open} />
      </div>
      <div className="flex-grow-1 d-flex flex-column">
        <div className="w-100 position-sticky flex-1 z-2 top-0">
          <Navbar />
        </div>
        <div
         
          className={` ${open && "ms-auto custom-outlet-size "} px-3 flex-grow-1 `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
