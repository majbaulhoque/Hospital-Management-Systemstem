import { useState, useRef } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaInfoCircle, FaUserFriends } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { IoCreateSharp } from "react-icons/io5";
import { PiSignOutLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const hoverRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHovered(false);
    }, 200);
    setTimeoutId(id);
  };

  return (
    <nav className="d-flex shadow-lg gap-3 bg-white position-sticky me-2 pt-3 pe-3 pb-3 top-0 justify-content-end align-items-center custom-bg-main-light text-black text-end w-100">
      <div className="d-flex gap-3 align-items-center">
        <button
          onClick={() => navigate("/login")}
          className="btn btn-primary custom-bg-main text-white border-0"
        >
          <AiOutlineLogin className="me-1" />
          Login
        </button>
        <div
          className="position-relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={hoverRef}
        >
          <FaRegCircleUser className="fs-2 text-main" />
          {isHovered && (
            <div
              className="dropdown-menu position-absolute end-0 mt-2 p-2 bg-dark-subtle rounded shadow"
              style={{ display: "block" }}
            >
              <div
                role="button"
                className="d-flex align-items-center gap-2 justify-content-center custom-btn-hover text-center"
              >
                <FiUsers /> Users
              </div>
              <div
                role="button"
                className="d-flex align-items-center gap-2 justify-content-center custom-btn-hover text-center"
              >
                <FaInfoCircle />
                Your Info
              </div>
              <div
                onClick={() => navigate("/create-user")}
                role="button"
                className="d-flex align-items-center gap-2 justify-content-center custom-btn-hover text-center"
              >
                <IoCreateSharp />
                Make User
              </div>
              <div
                role="button"
                className="d-flex align-items-center gap-2 justify-content-center custom-btn-hover text-center"
              >
                <FaUserFriends />
                All User
              </div>
              <hr className="dropdown-divider" />
              <div
                role="button"
                className="d-flex align-items-center gap-2 justify-content-center text-danger text-center"
              >
                <PiSignOutLight />
                Sign Out
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
