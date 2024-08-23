import "../../styles/form/index.css"
const CreateUserForm = () => {

    return (
      <div style={{height:"100vh"}} className="d-flex container justify-content-center align-items-center">
        <div  className=" p-3 shadow-lg rounded-3 ">
            <h3 className="text-center mb-3 text-black">Sign  <span className="text-main fw-bold">up</span></h3>
            {/* form */}
          <form   className="addUserForm    d-flex justify-content-center align-items-center">
            <div className=" d-flex custom-form-width  justify-content-center  flex-column gap-3 ">
              {/* name */}
              <label htmlFor="name">Name <span className="text-danger">*</span></label>
              <input
                type="text"
                className="form-control-custom"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Enter your name"
              />
              {/* email */}
               <label htmlFor="email">Email <span className="text-danger">*</span></label>
              <input
                type="email"
                className="form-control-custom"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your Email"
              />
              {/* password */}
              <label htmlFor="Password">Password <span className="text-danger">*</span></label>
              <input
                type="password"
                className="form-control-custom"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Enter your Password"
              />
              {/* confirm password */}
               <label htmlFor="confirmPassword">Confirm Password <span className="text-danger">*</span></label>
              <input
                type="confirmPassword"
                className="form-control-custom"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="off"
                placeholder="Confirm your password"
              />
              {/* submit button */}
              <button type="submit" className="btn bg-main shadow-lg border-0 btn-primary">
               Sign up
              </button>
            </div>
          </form>
          <div className="d-flex justify-content-center gap-2 align-items-center">
            <p className="text-center mt-3">Already have account? </p>
            <span className="text-main fw-medium">Sign in</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreateUserForm;
  