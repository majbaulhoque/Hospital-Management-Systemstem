import { FaBedPulse, FaUserDoctor, FaUserNurse } from "react-icons/fa6";
import { GiDoctorFace } from "react-icons/gi";
import { MdOutlineSick } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";

const Cards = () => {
  const data = [
    {
      id: 1,
      name: "Total Doctors",
      count: 100,
      icon: <FaUserDoctor />,
    },
    {
      id: 2,
      name: "Total Patients",
      count: 3000,
      icon: <MdOutlineSick />,
    },
    {
      id: 3,
      name: "Nurse Available",
      count: 137,
      icon: <FaUserNurse />,
    },
    {
      id: 4,
      name: "Bed Available",
      count: 50,
      icon: <FaBedPulse />,
    },
    {
      id: 5,
      name: "Ongoing Surgery",
      count: 14,
      icon: <GiDoctorFace />,
    },
    {
      id: 6,
      name: "Today Revenue",
      count: "$14000",
      icon: <TfiWallet />,
    },
    {
      id: 7,
      name: "Total Doctors",
      count: 100,
      icon: <FaUserDoctor />,
    },
    {
      id: 8,
      name: "Total Doctors",
      count: 100,
      icon: <FaUserDoctor />,
    },
    {
      id: 9,
      name: "Total Doctors",
      count: 100,
      icon: <FaUserDoctor />,
    },
    {
      id: 10,
      name: "Total Doctors",
      count: 100,
      icon: <FaUserDoctor />,
    },
  ];
  return (
    <div className="row">
      {data?.map((item) => (
        <div className="col-lg-4 col-md-6 col-12 col-xl-3 gy-3 " key={item?.id}>
          <div className="custom-bg-main justify-content-center d-flex gap-4  p-3 rounded-3  text-white">
            <div className="">
              <h5>{item?.name}</h5>
              <p className="fs-4">{item?.count}+</p>
            </div>
            <div className="fs-1">{item?.icon}</div>
          </div>
        </div>
      ))}
      {/* card */}
    </div>
  );
};

export default Cards;
