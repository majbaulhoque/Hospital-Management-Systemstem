import "../../assets/styles/form/index.css"

const LoginForm = () => {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex container justify-content-center align-items-center"
      >
        <div className=" p-3  ">
          <h3 className="text-center mb-3 "><span className="custom-text-main fw-bold">Login</span></h3>
          {/* form */}
          <form className="addUserForm    d-flex justify-content-center align-items-center">
            <div className=" d-flex custom-form-width  justify-content-center  flex-column gap-3 ">
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
              {/* confirm password */}
              <label htmlFor="confirmPassword">
                Confirm Password <span className="text-danger">*</span>
              </label>
              <input
                type="confirmPassword"
                // custom css included
                className="form-control-custom"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="off"
                placeholder="Confirm your password"
              />
              {/* submit button  */}
              <button type="submit" className="btn custom-bg-main  shadow-lg border-0 btn-primary">
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