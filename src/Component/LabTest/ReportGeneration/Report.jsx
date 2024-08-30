import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import FormInput from "../../From/FormInput";
import { useForm } from "react-hook-form";
import { IoPrintOutline } from "react-icons/io5";

const Report = () => {
  const { handleSubmit, control } = useForm();
  // const [testData , setTestData] = useState([])

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Handle form submission (e.g., API call)
  };

  const testData = [
    { id: 1, code: "1011", name: "CBC", result: 200 },
    { id: 2, code: "1012", name: "HBAC", result: 300 },
    { id: 3, code: "1013", name: "Lipid Profile", result: 500 },
    { id: 4, code: "1014", name: "LFT", result: 400 },
    // Add more test data as needed
  ];

  return (
    <div className="container mt-5 mb-5">
      <Card className=" shadow-md custom-bg-main-light border-0 rounded">
        <Card.Header
          as="h5"
          className=" text-black text-center py-3 rounded-top"
        >
         Generate Report
        </Card.Header>
        <Card.Body className="p-4">
          {/* <h4 className="col-lg-3 col-9 mx-auto text-center py-2 rounded-2 mb-5 bg-secondary bg-opacity-25">
              Result Input Details
            </h4> */}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <FormInput
                  name="TestId"
                  control={control}
                  label="Test ID"
                  placeholder="Unique identifier for each test result"
                  rules={{ required: "Result ID is required" }}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  name="patientId"
                  control={control}
                  label="Patient ID"
                  placeholder="Identifier for the patient who took the test"
                  rules={{ required: "Patient ID is required" }}
                />
              </Col>
            </Row>
            <div className="table-responsive ">
              <Table
                striped
                responsive
                bordered
                hover
                className="text-center mt-3 mb-4  shadow-md Custom-bg-main-light"
              >
                <thead className="thead-dark">
                  <tr>
                    <th>SL NO</th>
                    <th>Test Id</th>
                    <th>Test Name</th>
                    <th>Test Result</th>
                    <th>Reference</th>
                  </tr>
                </thead>
                <tbody>
                  {testData?.map((test, index) => (
                    <tr key={test.id}>
                      <td>{index + 1}</td>
                      <td>{test.code}</td>
                      <td>{test.name}</td>
                      <td>
                      {test.result} mmol/L
                    </td>
                    <td>
                      400-500  mmol/L
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="text-center w-100">
              <Button
                className="custom-bg-main border-0 d-flex align-items-center  mx-auto  gap-2 justify-content-center"
                variant="primary"
                type="submit"
                size="md"
              >
                <IoPrintOutline />
                Print Report
              </Button>
            </div>
          </Form>

          {/* test result */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Report;
