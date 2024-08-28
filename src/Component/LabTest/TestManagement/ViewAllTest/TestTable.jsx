import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "./DeleteModal";
// import DeleteModal from "./DeleteModal";
// import { useState } from "react";

const TestTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const testData = [
    { id: 1, code: "1011", name: "CBC", price: 200 },
    { id: 2, code: "1012", name: "HBAC", price: 300 },
    { id: 1, code: "1011", name: "CBC", price: 200 },
    { id: 2, code: "1012", name: "HBAC", price: 300 },
    // Add more test data as needed
  ];

  return (
    <>
    {/* table */}
    <Table striped bordered hover responsive className="text-center">
      <thead className="thead-dark">
        <tr>
          <th>SL NO</th>
          <th>Test Code</th>
          <th>Test Name</th>
          <th>Price</th>
          <th>Action</th>
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
                variant="primary"
                size="sm"
                className="mr-2 d-flex custom-bg-main border-0 align-items-center gap-2"
              >
                <GrView />
                View Details
              </Button>
              <Button
                variant="warning"
                size="sm"
                className="mr-2 d-flex align-items-center gap-2"
              >
                {" "}
                <AiOutlineEdit />
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => setModalShow(true)}
                size="sm"
                className="mr-2 d-flex align-items-center gap-2"
              >
                {" "}
                <RiDeleteBin6Line />
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    {/* delete modal */}
    <DeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TestTable;
