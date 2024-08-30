// import { useState } from "react";
// import { Button, Table } from "react-bootstrap";
// import { AiOutlineEdit } from "react-icons/ai";
// import { GrView } from "react-icons/gr";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import DeleteModal from "./DeleteModal";
// import { useNavigate } from "react-router-dom";
// // import DeleteModal from "./DeleteModal";
// // import { useState } from "react";

// const TestTable = () => {
//   const [modalShow, setModalShow] = useState(false);
//   const navigate = useNavigate();
//   const testData = [
//     { id: 1, code: "1011", name: "CBC", price: 200 },
//     { id: 2, code: "1012", name: "HBAC", price: 300 },
//     { id: 1, code: "1011", name: "CBC", price: 200 },
//     { id: 2, code: "1012", name: "HBAC", price: 300 },
//     // Add more test data as needed
//   ];

//   return (
//     <>
//       {/* table */}
//       <Table striped bordered hover responsive className="text-center">
//         <thead className="thead-dark">
//           <tr>
//             <th>SL NO</th>
//             <th>Test Code</th>
//             <th>Test Name</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {testData.map((test, index) => (
//             <tr key={test.id}>
//               <td>{index + 1}</td>
//               <td>{test.code}</td>
//               <td>{test.name}</td>
//               <td>{test.price}</td>
//               <td className="d-flex gap-3 justify-content-center">
//                 <Button
//                 onClick={() => navigate('/lab-test/view-test-details/11')}
//                   variant="primary"
//                   size="sm"
//                   className="mr-2 d-flex custom-bg-main border-0 align-items-center gap-2"
//                 >
//                   <GrView />
//                   View Details
//                 </Button>
//                 <Button
//                   variant="warning"
//                   size="sm"
//                   className="mr-2 d-flex align-items-center gap-2"
//                 >
//                   {" "}
//                   <AiOutlineEdit />
//                   Edit
//                 </Button>
//                 <Button
//                   variant="danger"
//                   onClick={() => setModalShow(true)}
//                   size="sm"
//                   className="mr-2 d-flex align-items-center gap-2"
//                 >
//                   {" "}
//                   <RiDeleteBin6Line />
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       {/* delete modal */}
//       <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   );
// };

// export default TestTable;
import { useState } from "react";
import { Button, Table, Form, InputGroup } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";

const TestTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const testData = [
    { id: 1, code: "1011", name: "CBC", price: 200 },
    { id: 2, code: "1012", name: "HBAC", price: 300 },
    { id: 3, code: "1013", name: "Lipid Profile", price: 500 },
    { id: 4, code: "1014", name: "LFT", price: 400 },
    // Add more test data as needed
  ];

  // const filteredData = testData.filter(
  //   (test) =>
  //     test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     test.code.includes(searchQuery)
  // );

  return (
    <>
      {/* Search bar */}
      <InputGroup className="mb-3 z-0">
        <Form.Control
          type="text"
          placeholder="Search by Test Name or Code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button className="custom-bg-main text-white border-0">
          Search
        </Button>
      </InputGroup>

      {/* table */}
      <div style={{ overflowX: 'auto', width: '100%' }}>
        <Table striped bordered hover className="text-center striped-table shadow-md">
          <thead className="thead-dark">
            <tr>
              <th style={{ minWidth: '80px' }}>SL NO</th>
              <th style={{ minWidth: '150px' }}>Test Code</th>
              <th style={{ minWidth: '200px' }}>Test Name</th>
              <th style={{ minWidth: '100px' }}>Price</th>
              <th style={{ minWidth: '250px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {testData.map((test, index) => (
              <tr key={test.id}>
                <td>{index + 1}</td>
                <td>{test.code}</td>
                <td>{test.name}</td>
                <td>{test.price}</td>
                <td className="d-flex gap-3 justify-content-center">
                  <Button
                    onClick={() => navigate('/lab-test/view-test-details/' + test.id)}
                    variant="primary"
                    size="sm"
                    className="mr-2 d-flex custom-bg-main border-0 align-items-center gap-2"
                  >
                    <GrView />
                    View Details
                  </Button>
                  <Button
                  onClick={() => navigate(`/lab-test/edit-test-details/${index}`)}
                    variant="warning"
                    size="sm"
                    className="mr-2 d-flex custom-bg-main border-0 text-white align-items-center gap-2"
                  >
                    <AiOutlineEdit />
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => setModalShow(true)}
                    size="sm"
                    className="mr-2 d-flex align-items-center gap-2"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
  

      {/* delete modal */}
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default TestTable;
