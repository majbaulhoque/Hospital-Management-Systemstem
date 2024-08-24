/* eslint-disable react/prop-types */
import { RiMenu3Fill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserDoctor, FaUserPen, FaChrome } from "react-icons/fa6";
import { FaParking, FaRegHospital } from "react-icons/fa";
import {
  MdOutlineEventAvailable,
  MdOutlineKeyboardArrowRight,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import { TbReport } from "react-icons/tb";
import Dropdown from "react-bootstrap/Dropdown";
import Collapse from "react-bootstrap/Collapse";
// custom css included.all then class where custom word included are custom class
import "../../assets/styles/sidebar/index.css";
import { Link } from "react-router-dom";

const Sidebar = ({setOpen , open}) => {
  // toggle state
  // const [open, setOpen] = useState(true);

  return (
    <div
      className="position-fixed z-3 custom-position-fixed-mobile custom-bg-main h-100  custom-z-index"
      style={{ top: 0, left: 0, bottom: 0, minHeight: "100vh"  }}
    >
      {/* Toggle Button  */}
      {!open && (
        <button
          style={{ top: 0 }}
          className="mb-3 position-fixed custom-bg-main   ms-3 mt-3 border-0"
          onClick={() => setOpen(!open)}
          aria-controls="sidebar"
          aria-expanded={open}
        >
          <RiMenu3Fill className="fs-3 text-white custom-bg-main " />
        </button>
      )}

      {/* Sidebar Content */}
      <Collapse
        in={open}
        className="position-relative  custom-position-absolute-mobile  "
        dimension="width"
      >
        <div
          id="sidebar"
          className="custom-sidebar-width overflow-y-scroll  text-white px-4 pb-4 custom-bg-main "
          style={{
            height: "100vh",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* sidebar header */}
          <div className=" position-sticky custom-bg-main py-4 z-3 top-0">
            {/* Toggle cross Button  */}
            <button
              style={{ right: 2, top: 12 }}
              className="  position-absolute text-white  custom-bg-main fs-3 text-white border-0"
              onClick={() => setOpen(!open)}
              aria-controls="sidebar"
              aria-expanded={open}
            >
              <MdOutlineKeyboardArrowRight />
              {/* <RxCross1 className="fw-bold" /> */}
            </button>
            {/* company */}
            <div className=" custom-bg-main z-3 top-0">
              <h4 className="d-flex gap-2 text-white  ">
                <FaRegHospital className="mt-1" /> Diagnostic CP
              </h4>
            </div>
          </div>
          <div className="d-flex flex-column  gap-4">
            {/* dashboard */}
            <div className="mt-1">
              <Link to="/" className=" text-decoration-none text-white">
                <LuLayoutDashboard  />
                <span className="ms-2 mt-2">Dashboard</span>
              </Link>
            </div>
            {/* doctor */}
            <div className="d-flex ">
              <FaUserDoctor className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Doctors</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="/doctor-management">
                    Doctor Management
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">
                    Commission Tracking
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Patient Referral Tracking
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Doctor Ledge
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* patient */}
            <div className="d-flex ">
              <FaParking className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Patient</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">
                    Patient Registration
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">
                    Appointment Scheduling
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Patient History
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Payment Tracking
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* lab test */}
            <div className="d-flex ">
              <MdOutlineEventAvailable className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Lab Test</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">
                    Test Management
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">
                    Invoice Generation
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Test Result Input
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Report Generation
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* accounts */}
            <div className="d-flex ">
              <MdOutlineSupervisorAccount className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Accounts</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">
                    Income Management
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">
                    Expense Management
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Due Collection
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Doctor Commission Payment
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Ledger Management
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* report */}
            <div className="d-flex ">
              <TbReport className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">Report</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">
                    Profit/Loss Tracking
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">
                    Sales Tracking
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Expense Tracking
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Commission Tracking
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Income Statement
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* hr */}
            <div className="d-flex ">
              <FaChrome className="mt-2" />
              <Dropdown bsPrefix="custom-dropDown">
                <Dropdown.Toggle id="dropdown-basic">HR</Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item className="" href="#/Item1-1">
                    Employee Management
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-2">
                    Attendance Tracking
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Payroll Management
                  </Dropdown.Item>
                  <Dropdown.Item className="mt-3" href="#/Item1-3">
                    Performance Tracking
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* user role */}
            <Link
              to="/user-role"
              className="d-flex gap-2 text-decoration-none text-white"
            >
              <FaUserPen className="mt-1" /> <p>User Role</p>
            </Link>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Sidebar;
