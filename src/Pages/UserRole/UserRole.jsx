import UserRoleSettings from "../../Component/UserRole/UserRoleSettings";
import UserSelection from "../../Component/UserRole/UserSelection";


const UserRole = () => {
    return (
        <div className="container">
          <UserSelection/>
          <UserRoleSettings/>
        </div>
    );
};

export default UserRole;