import "../../assets/styles/form/index.css"
const CreateUserForm = () => {

    return (
      <div style={{height:"100vh"}} className="d-flex container justify-content-center align-items-center">
        <div  className=" p-3 shadow-lg rounded-3 ">
            <h3 className="text-center mb-3 text-black">Create  <span className="custom-text-main fw-bold">User</span></h3>
            {/* form */}
          <form   className="addUserForm    d-flex justify-content-center align-items-center">
            <div className=" d-flex custom-form-width  justify-content-center  flex-column gap-3 ">
              {/* name */}
              <label htmlFor="name">Name <span className="text-danger">*</span></label>
              <input
                type="text"
                // custom css included
                className="form-control-custom"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Enter your name"
              />
                {/* user name */}
                <label htmlFor="userName">User Name <span className="text-danger">*</span></label>
              <input
                type="text"
                // custom css included
                className="form-control-custom"
                id="userName"
                name="userName"
                autoComplete="off"
                placeholder="Enter your user name"
              />
              {/* email */}
               <label htmlFor="email">Email <span className="text-danger">*</span></label>
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
              <label htmlFor="Password">Password <span className="text-danger">*</span></label>
              
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
               <label htmlFor="confirmPassword">Confirm Password <span className="text-danger">*</span></label>
              <input
                type="confirmPassword"
                // custom css included
                className="form-control-custom"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="off"
                placeholder="Confirm your password"
              />
              {/* Contact no */}
              <label htmlFor="contactNumber">Contact Number <span className="text-danger">*</span></label>
              <input
                type="number"
                // custom css included
                className="form-control-custom"
                id="contactNumber"
                name="contactNumber"
                autoComplete="off"
                placeholder="Enter your contact number"
              />
              {/* NID no */}
              <label htmlFor="nidNumber">NID Number <span className="text-danger">*</span></label>
              <input
                type="number"
                // custom css included
                className="form-control-custom"
                id="nidNumber"
                name="nidNumber"
                autoComplete="off"
                placeholder="Enter your NID number"
              />
              {/* submit button */}
              <button type="submit" className="btn custom-bg-main shadow-lg border-0 btn-primary">
               Sign up
              </button>
            </div>
          </form>
          <div className="d-flex justify-content-center gap-2 align-items-center">
            <p className="text-center mt-3">Already have account? </p>
            <span className="custom-text-main fw-medium">Sign in</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreateUserForm;
  