import { AiOutlineLogin } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav className="d-flex shadow-lg  gap-3 bg-white position-sticky me-2 pt-3 pe-3 pb-3 top-0   justify-content-end align-items-center custom-bg-main text-white text-end w-100">
      <div className="d-flex gap-3 align-items-center">
        <button onClick={() => navigate('/login')} className="btn btn-primary custom-bg-main text-white border-0 ">
          <AiOutlineLogin className="me-1" />
          Login
        </button>
        <div role="button">
          <FaRegCircleUser className="fs-2 text-main" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
