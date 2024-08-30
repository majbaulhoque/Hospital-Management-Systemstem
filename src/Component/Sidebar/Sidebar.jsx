/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserDoctor, FaUserPen, FaChrome } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import {
  MdOutlineEventAvailable,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import { TbReport } from "react-icons/tb";
import Collapse from "react-bootstrap/Collapse";
import "../../assets/styles/sidebar/index.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ setOpen, open }) => {
  const [dropdownStates, setDropdownStates] = useState({
    doctors: false,
    patients: false,
    labTests: false,
    accounts: false,
    testManagement: false,
    reports: false,
    hr: false,
  });

  const toggleDropdown = (dropdownName) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [dropdownName]: !prevStates[dropdownName],
    }));
  };

  return (
    <div
      className="position-fixed shadow-md z-3 custom-position-fixed-mobile custom-bg-main-light text-black h-100 custom-z-index"
      style={{ top: 0, left: 0, bottom: 0, minHeight: "100vh" }}
    >
      {!open && (
        <button
          style={{ top: 0 }}
          className="mb-3 position-fixed bg-transparent  text-black ms-3 mt-3 border-0"
          onClick={() => setOpen(!open)}
          aria-controls="sidebar"
          aria-expanded={open}
        >
          <RiMenu3Fill className="fs-3 bg-transparent  text-black" />
        </button>
      )}

      <Collapse
        in={open}
        className="position-relative custom-position-fixed-mobile"
        dimension="width"
      >
        <div
          id="sidebar"
          className="custom-sidebar-width  overflow-y-scroll  px-4 pb-4  text-black"
          style={{
            height: "100vh",
            overflowY: "scroll",
            // backdropFilter:'blur(30px)',
            scrollbarWidth: "none",
            scrollbarColor: "#696cff #f1f1f1",
          }}
        >
          <div
            
            className="position-sticky custom-blur-lg text-black py-2 z-3 top-0"
          >
            <button
              style={{ right: 2, top: 15 }}
              className="position-absolute rounded-circle  custom-bg-main  text-white   border-0"
              onClick={() => setOpen(!open)}
              aria-controls="sidebar"
              aria-expanded={open}
            >
              <MdOutlineKeyboardArrowRight />
            </button>
            <div className="text-black z-3 top-0">
              <h4 className="d-flex align-items-center  gap-2 ">
                <svg
                  width="25"
                  viewBox="0 0 25 42"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  // {...props}
                >
                  <defs>
                    <path
                      d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                      id="path-1"
                      fill="#696cff" // Set the color here
                    />
                    <path
                      d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                      id="path-3"
                      fill="#696cff" // Set the color here
                    />
                    <path
                      d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                      id="path-4"
                      fill="#696cff" // Set the color here
                    />
                    <path
                      d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                      id="path-5"
                      fill="#696cff" // Set the color here
                    />
                  </defs>
                  <g
                    id="g-app-brand"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Brand-Logo"
                      transform="translate(-27.000000, -15.000000)"
                    >
                      <g id="Icon" transform="translate(27.000000, 15.000000)">
                        <g id="Mask" transform="translate(0.000000, 8.000000)">
                          <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1" />
                          </mask>
                          <use fill="#696cff" xlinkHref="#path-1" />
                          <g id="Path-3" mask="url(#mask-2)">
                            <use fill="#696cff" xlinkHref="#path-3" />
                            <use
                              fillOpacity="0.2"
                              fill="#FFFFFF"
                              xlinkHref="#path-3"
                            />
                          </g>
                          <g id="Path-4" mask="url(#mask-2)">
                            <use fill="#696cff" xlinkHref="#path-4" />
                            <use
                              fillOpacity="0.2"
                              fill="#FFFFFF"
                              xlinkHref="#path-4"
                            />
                          </g>
                        </g>
                        <g
                          id="Triangle"
                          transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000)"
                        >
                          <use fill="#696cff" xlinkHref="#path-5" />
                          <use
                            fillOpacity="0.2"
                            fill="#FFFFFF"
                            xlinkHref="#path-5"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                Diagnostic CP
              </h4>
            </div>
          </div>

          <div className="d-flex flex-column gap-4 mt-3">
            {/* Dashboard */}
            <NavLink
              to="/"
              className="d-flex ms-3 text-black align-items-center text-decoration-none  gap-2"
            >
              <LuLayoutDashboard />
              <span>Dashboard</span>
            </NavLink>

            {/* Doctors Dropdown */}
            <div className="d-flex flex-column">
              <div
                className="custom-dropDown-toggle d-flex align-items-center gap-2 cursor-pointer"
                onClick={() => toggleDropdown("doctors")}
              >
                <FaUserDoctor />
                <span>Doctors</span>
                {dropdownStates.doctors ? (
                  <MdOutlineKeyboardArrowDown className="ms-3" />
                ) : (
                  <MdOutlineKeyboardArrowRight className="ms-3" />
                )}
              </div>
              {dropdownStates.doctors && (
                <Collapse in={dropdownStates.doctors}>
                  {/* test management dropdown button */}
                  <div className="custom-dropdown-menu d-flex flex-column mt-2 ms-3 gap-3">
                    <NavLink
                      to="/doctors/doctor-management"
                      className="text-black"
                    >
                      Doctors Management
                    </NavLink>

                    <NavLink
                      to="/doctors/commission-tracking"
                      className="text-black"
                    >
                      Commission Tracking
                    </NavLink>
                    <NavLink
                      to="/doctors/patient-referral-tracking"
                      className="text-black"
                    >
                      Patient Referral Tracking
                    </NavLink>
                    <NavLink to="/doctors/doctor-ledger" className="text-black">
                      Doctor Ledger
                    </NavLink>
                  </div>
                </Collapse>
              )}
            </div>

            {/* Patients Dropdown */}
            <div className="d-flex flex-column">
              <div
                className="custom-dropDown-toggle d-flex align-items-center gap-2 cursor-pointer"
                onClick={() => toggleDropdown("patients")}
              >
                <FaParking />
                <span>Patients</span>
                {dropdownStates.patients ? (
                  <MdOutlineKeyboardArrowDown className="ms-3" />
                ) : (
                  <MdOutlineKeyboardArrowRight className="ms-3" />
                )}
              </div>
              {dropdownStates.patients && (
                <Collapse in={dropdownStates.patients}>
                  <div className="custom-dropdown-menu d-flex flex-column mt-2 ms-3 gap-3">
                    <NavLink
                      to="/patient/patient-registration"
                      className="text-black"
                    >
                      Patient Registration
                    </NavLink>
                    <NavLink
                      to="/patient/appointment-scheduling"
                      className="text-black"
                    >
                      Appointment Scheduling
                    </NavLink>
                    <NavLink
                      to="/patient/patient-history"
                      className="text-black"
                    >
                      Patient History
                    </NavLink>
                    <NavLink
                      to="/patient/payment-tracking"
                      className="text-black"
                    >
                      Payment Tracking
                    </NavLink>
                  </div>
                </Collapse>
              )}
            </div>

            {/* Lab Test Dropdown */}

            <div className="d-flex flex-column">
              <div
                className="custom-dropDown-toggle d-flex align-items-center gap-2 cursor-pointer"
                onClick={() => toggleDropdown("labTests")}
              >
                <MdOutlineEventAvailable />
                <span>Lab Tests</span>
                {dropdownStates.labTests ? (
                  <MdOutlineKeyboardArrowDown className="ms-3" />
                ) : (
                  <MdOutlineKeyboardArrowRight className="ms-3" />
                )}
              </div>
              {dropdownStates.labTests && (
                <Collapse in={dropdownStates.labTests}>
                  <div className="custom-dropdown-menu d-flex flex-column mt-2 ms-3 gap-3">
                    {/* Test Management Dropdown */}
                    <div className="d-flex flex-column">
                      <div
                        className="custom-dropDown-toggle d-flex text-black align-items-center gap-2 cursor-pointer"
                        onClick={() => toggleDropdown("testManagement")}
                      >
                        <span>Test Management</span>
                        {dropdownStates.testManagement ? (
                          <MdOutlineKeyboardArrowDown className="ms-2" />
                        ) : (
                          <MdOutlineKeyboardArrowRight className="ms-2" />
                        )}
                      </div>
                      {dropdownStates.testManagement && (
                        <Collapse in={dropdownStates.testManagement}>
                          <div className="custom-dropdown-menu d-flex flex-column mt-2 ms-5 gap-2">
                          <NavLink
                            to="/lab-test/test-management/add-new-test"
                            className="text-black"
                          >
                            Add New Test
                          </NavLink>
                          <NavLink
                            to="/lab-test/test-management/view-all-test"
                            className="text-black"
                          >
                            View All Test
                          </NavLink>
                          </div>
                        </Collapse>
                      )}
                    </div>

                    <NavLink
                      to="/lab-test/invoice-generation"
                      className="text-black"
                    >
                      Invoice Generation
                    </NavLink>
                    <NavLink
                      to="/lab-test/test-result-input"
                      className="text-black"
                    >
                      Test Result Input
                    </NavLink>
                    <NavLink
                      to="/lab-test/report-generation"
                      className="text-black"
                    >
                      Report Generation
                    </NavLink>
                  </div>
                </Collapse>
              )}
            </div>

            {/* Accounts Dropdown */}
            <div className="d-flex flex-column">
              <div
                className="custom-dropDown-toggle d-flex align-items-center gap-2 cursor-pointer"
                onClick={() => toggleDropdown("accounts")}
              >
                <MdOutlineSupervisorAccount />
                <span>Accounts</span>
                {dropdownStates.accounts ? (
                  <MdOutlineKeyboardArrowDown className="ms-3" />
                ) : (
                  <MdOutlineKeyboardArrowRight className="ms-3" />
                )}
              </div>
              {dropdownStates.accounts && (
                <Collapse in={dropdownStates.accounts}>
                  <div className="custom-dropdown-menu d-flex flex-column mt-2 ms-3 gap-3">
                    <NavLink
                      to="/accounts/income-management"
                      className="text-black"
                    >
                      Income Management
                    </NavLink>
                    <NavLink
                      to="/accounts/expense-management"
                      className="text-black"
                    >
                      Expense Management
                    </NavLink>
                    <NavLink
                      to="/accounts/due-collection"
                      className="text-black"
                    >
                      Due Collection
                    </NavLink>
                    <NavLink
                      to="/accounts/doctor-commission-payment"
                      className="text-black"
                    >
                      Doctor Commission Payment
                    </NavLink>
                    <NavLink
                      to="/accounts/ledger-management"
                      className="text-black"
                    >
                      Ledger Management
                    </NavLink>
                  </div>
                </Collapse>
              )}
            </div>

            {/* Reports Dropdown */}
            <div className="d-flex flex-column">
              <div
                className="custom-dropDown-toggle d-flex align-items-center gap-2 cursor-pointer"
                onClick={() => toggleDropdown("reports")}
              >
                <TbReport />
                <span>Reports</span>
                {dropdownStates.reports ? (
                  <MdOutlineKeyboardArrowDown className="ms-3" />
                ) : (
                  <MdOutlineKeyboardArrowRight className="ms-3" />
                )}
              </div>
              {dropdownStates.reports && (
                <Collapse in={dropdownStates.reports}>
                  <div className="custom-dropdown-menu d-flex flex-column mt-2 ms-3 gap-3">
                    <NavLink
                      className="text-black"
                      to="/report/profit-loss-tracking"
                    >
                      Profit/Loss Tracking
                    </NavLink>
                    <NavLink className="text-black" to="/report/sales-tracking">
                      Sales Tracking
                    </NavLink>
                    <NavLink
                      className="text-black"
                      to="/report/expense-tracking"
                    >
                      Expense Tracking
                    </NavLink>
                    <NavLink
                      className="text-black"
                      to="/report/commission-tracking"
                    >
                      Commission Tracking
                    </NavLink>
                    <NavLink
                      className="text-black"
                      to="/report/income-statement"
                    >
                      Income Statement
                    </NavLink>
                  </div>
                </Collapse>
              )}
            </div>

            {/* HR Dropdown */}
            <div className="d-flex flex-column">
              <div
                className="custom-dropDown-toggle d-flex align-items-center gap-2 cursor-pointer"
                onClick={() => toggleDropdown("hr")}
              >
                <FaChrome className="mt-2" />
                <span>HR</span>
                {dropdownStates.hr ? (
                  <MdOutlineKeyboardArrowDown className="ms-3" />
                ) : (
                  <MdOutlineKeyboardArrowRight className="ms-3" />
                )}
              </div>
              {dropdownStates.hr && (
                <Collapse in={dropdownStates.hr}>
                  <div className="custom-dropdown-menu d-flex flex-column mt-2 ms-3 gap-3">
                    <NavLink
                      to="/hr/employee-management"
                      className="text-black"
                    >
                      Employee Management
                    </NavLink>
                    <NavLink to="/hr/payroll-management" className="text-black">
                      Payroll Management
                    </NavLink>
                    <NavLink to="/hr/leave-management" className="text-black">
                      Leave Management
                    </NavLink>
                    <NavLink
                      to="/hr/performance-tracking"
                      className="text-black"
                    >
                      Performance Tracking
                    </NavLink>
                  </div>
                </Collapse>
              )}
            </div>
            {/* user role */}
            <NavLink
              to="/user-role"
              className="d-flex gap-2 text-black ms-3 text-decoration-none "
            >
              <FaUserPen className="mt-1" /> <p>User Role</p>
            </NavLink>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Sidebar;

