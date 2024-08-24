import { useState } from "react";
import { Form } from "react-bootstrap";
import { IoSettingsOutline } from "react-icons/io5";

const UserSelection = () => {
  // State to track the selected user role
  const [userRole, setUserRole] = useState("");
  const [isUserNameDisabled, setIsUserNameDisabled] = useState(true);

  // Handle the change event for the User Role select field
  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setUserRole(selectedRole);

    // Enable the User Name field if a valid role is selected
    if (selectedRole) {
      setIsUserNameDisabled(false);
    } else {
      setIsUserNameDisabled(true);
    }
  };
  return (
    <div className="mt-3">
      <h5 className="p-3 bg-secondary bg-opacity-25 rounded-3 d-flex align-items-center gap-2">
        <IoSettingsOutline /> User role settings
      </h5>
      {/* User Role */}
      <div className="d-flex w-lg-25 mt-3 justify-content-center align-items-center gap-2">
        <label className="d-flex text-nowrap" htmlFor="userRole">
          User role <span className="text-danger">*</span>
        </label>
        <Form.Select
          className="rounded-3"
          aria-label="Select user role"
          id="userRole"
          value={userRole}
          onChange={handleRoleChange}
        >
          <option className="text-body-tertiary" value="">
            Select user role
          </option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Form.Select>
      </div>

      {/* User Name */}
      <div className="d-flex w-lg-25 mt-3 justify-content-center align-items-center gap-2">
        <label className="d-flex text-nowrap" htmlFor="userName">
          User name <span className="text-danger">*</span>
        </label>
        <Form.Select
          className="rounded-3"
          aria-label="Select user name"
          id="userName"
          disabled={isUserNameDisabled} // Disable until role is selected
        >
          <option className="text-body-tertiary" value="">
            Select user name
          </option>
          {/* Example options; replace with your actual options */}
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default UserSelection;
