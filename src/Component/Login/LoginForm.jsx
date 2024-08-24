import "../../assets/styles/form/index.css";

const LoginForm = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-lg-row flex-column container justify-content-center align-items-center"
    >
      <div>
        <img className="custom-big-form-width" src="/images/login.png" alt="" />
      </div>
      <div className=" p-3  ">
        <h3 className="text-center mb-3 ">
          <span className="custom-text-main fw-bold">Login</span>
        </h3>
        {/* form */}
        <form className="addUserForm custom-big-form-width   d-flex justify-content-center align-items-center">
          <div className=" d-flex col-lg-6 col-12  justify-content-center  flex-column gap-3 ">
            {/* email */}
            <label htmlFor="email">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              // custom css included
              className="form-control-custom"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
            {/* password */}
            <label htmlFor="Password">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              // custom css included
              className="form-control-custom"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your Password"
            />
             <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                                // checked={rememberMe}
                                // onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>
            {/* submit button  */}
            <button
              type="submit"
              className="btn custom-bg-main  shadow-lg border-0 btn-primary"
            >
              Login
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <p className="text-center mt-3">Don not have Account? </p>
          <span className="custom-text-main fw-medium">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
