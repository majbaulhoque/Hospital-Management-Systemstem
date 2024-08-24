import { useState } from "react";
import "../../assets/styles/form/index.css";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";

const CreateUserForm = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  console.log(image);
  // console.log(previewUrl);

  // handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="d-flex  container justify-content-center align-items-center">
      <div className=" p-4 shadow-lg rounded-3 ">
        <h3 className="text-center mb-3 text-black">
          Create <span className="custom-text-main fw-bold">User</span>
        </h3>
        {/* form */}
        <form className="addUserForm    d-flex justify-content-center align-items-center">
          <div className=" d-flex custom-big-form-width  flex-wrap justify-content-center  flex-column gap-3 ">
            {/* name */}
            <div className="d-flex flex-column gap-3  ">
              <label htmlFor="name">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                // custom css included
                className="form-control-custom"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Enter your name"
              />
            </div>
            {/* user name */}
            <div className="d-flex flex-column gap-3  ">
              <label htmlFor="userName">
                User Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                // custom css included
                className="form-control-custom"
                id="userName"
                name="userName"
                autoComplete="off"
                placeholder="Enter your user name"
              />
            </div>
            {/* email */}
            <div className="d-flex flex-column gap-3  ">
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
            </div>
            {/* password */}
            <div className="d-flex flex-column gap-3  ">
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
            </div>
            {/* confirm password */}
            <div className="d-flex flex-column gap-3  ">
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
            </div>
            {/* Contact no */}
            <div className="d-flex flex-column gap-3  ">
              <label htmlFor="contactNumber">
                Contact Number <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                // custom css included
                className="form-control-custom"
                id="contactNumber"
                name="contactNumber"
                autoComplete="off"
                placeholder="Enter your contact number"
              />
            </div>
            {/* NID no */}
            <div className="d-flex flex-column gap-3  ">
              <label htmlFor="nidNumber">
                NID Number <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                // custom css included
                className="form-control-custom"
                id="nidNumber"
                name="nidNumber"
                autoComplete="off"
                placeholder="Enter your NID number"
              />
            </div>
            {/* Address */}
            <div className="d-flex flex-column gap-3  ">
              <label htmlFor="address">
                Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                // custom css included
                className="form-control-custom"
                id="address"
                name="address"
                autoComplete="off"
                placeholder="Enter your address"
              />
            </div>
            {/* role */}
            <div className="d-flex flex-column gap-3  ">
              <label htmlFor="">Role</label>
              <Form.Select aria-label="Default select example">
                <option>Select role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </div>
            {/* designation */}
            <div className="d-flex flex-column gap-3  ">
              <label htmlFor="">Designation</label>
              <Form.Select aria-label="Default select example">
                <option>Select designation</option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Nurse</option>
                <option value="receptionist">Receptionist</option>
                <option value="cleaner">Cleaner</option>
                <option value="computerOperator">Computer operator</option>
                <option value="testOperator">Test operator</option>
              </Form.Select>
            </div>
            {/* image upload */}
            <Card className="p-4 mb-4 shadow-sm">
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label
                    htmlFor="imageUpload"
                    className="d-block text-center"
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="img-fluid rounded-circle ms-auto me-auto shadow-sm"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        className="image-placeholder ms-auto me-auto d-flex align-items-center justify-content-center bg-light  rounded-circle border border-dark-subtle shadow-sm"
                        style={{ width: "150px", height: "150px" }}
                      >
                        <span className="text-muted text-body-tertiary">
                          Upload Image
                        </span>
                      </div>
                    )}
                  </Form.Label>
                  <Form.Control
                    type="file"
                    id="imageUpload"
                    onChange={handleImageUpload}
                    className="d-none"
                  />
                </Form.Group>
                {image ? (
                  <Button
                    variant="danger"
                    onClick={handleImageRemove}
                    className="w-100"
                  >
                    Remove Image
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() =>
                      document.getElementById("imageUpload").click()
                    }
                    className="w-100 custom-bg-main border-0"
                  >
                    Upload Image
                  </Button>
                )}
              </Card.Body>
            </Card>
            {/* submit button */}
            <button
              type="submit"
              className="btn custom-bg-main shadow-lg border-0 btn-primary"
            >
              Create
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
