
import { Button, Table } from 'react-bootstrap';

const TestTable = () => {
  const testData = [
    { id: 1, code: '1011', name: 'CBC', price: 200 },
    { id: 2, code: '1012', name: 'HBAC', price: 300 },
    // Add more test data as needed
  ];

  return (
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
            <td>
              <Button variant="primary" size="sm" className="mr-2">View Details</Button>
              <Button variant="warning" size="sm" className="mr-2">Edit</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TestTable;
