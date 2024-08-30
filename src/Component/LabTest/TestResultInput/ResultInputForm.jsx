import { useForm } from "react-hook-form";
import { Form, Button, Card, Row, Col, Table } from "react-bootstrap";
import FormInput from "../../From/FormInput";
import { FiSave } from "react-icons/fi";

const ResultInputForm = () => {
  const { handleSubmit, control } = useForm();
  // const [testData , setTestData] = useState([])

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Handle form submission (e.g., API call)
  };
  const onSubmit2 = (data) => {
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
          Test Result Input
        </Card.Header>
        <Card.Body className="p-4">
          {/* <h4 className="col-lg-3 col-9 mx-auto text-center py-2 rounded-2 mb-5 bg-secondary bg-opacity-25">
            Result Input Details
          </h4> */}
          <Form onSubmit={handleSubmit(onSubmit2)}>
            <Row>
              <Col md={4}>
                <FormInput
                  name="testDate"
                  control={control}
                  label="Test Date"
                  type="date"
                  rules={{ required: "Test Date is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="resultDate"
                  control={control}
                  label="Result Date"
                  type="date"
                  rules={{ required: "Result Date is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="labTechnician"
                  control={control}
                  label="Lab Technician"
                  placeholder="Name or ID of the lab technician who entered the results"
                  rules={{ required: "Lab Technician is required" }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormInput
                  name="resultId"
                  control={control}
                  label="Result ID"
                  placeholder="Unique identifier for each test result"
                  rules={{ required: "Result ID is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="patientId"
                  control={control}
                  label="Patient ID"
                  placeholder="Identifier for the patient who took the test"
                  rules={{ required: "Patient ID is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="sampleId"
                  control={control}
                  label="Sample ID"
                  placeholder="Identifier for the sample provided by the patient"
                  rules={{ required: "Sample ID is required" }}
                />
              </Col>
            </Row>
          </Form>

          {/* test result */}

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
                    <td className="col-3">
                        <Form.Control
                          defaultValue={test.result}
                          type="text"
                          className="text-center  bg-transparent border-0"
                        />
                      </td>
                      <td className="col-3">
                        <Form.Control
                          defaultValue={"300-400 ml"}
                          type="text"
                          className="text-center  bg-transparent border-0"
                        />
                      </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <FormInput
                
                  name="remarks"
                  control={control}
                  label="Remarks"
                  placeholder="Any additional notes or remarks related to the result"
                  as="textarea"
                  rows={3}
                />
              </Col>

              <Col md={6}>
                <FormInput
                  name="doctorComments"
                  control={control}
                  label="Doctor Comments"
                  placeholder="Comments or observations by the doctor reviewing the result"
                  as="textarea"
                  rows={3}
                />
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <FormInput
                  name="resultStatus"
                  control={control}
                  label="Result Status"
                  as="select"
                  rules={{ required: "Result Status is required" }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Finalized">Finalized</option>
                </FormInput>
              </Col>
              <Col md={4}>
                <FormInput

                  name="authorizedBy"
                  control={control}
                  label="Authorized By"
                  placeholder="Name or ID of the person authorizing the result"
                  rules={{ required: "Authorization is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="attachment"
                  control={control}
                  label="Attachment"
                  type="file"
                  rules={{ required: "Attachment is required" }}
                />
              </Col>
            </Row>

            <div className="text-center w-100">
              <Button
                className="custom-bg-main border-0 d-flex align-items-center  mx-auto  gap-2 justify-content-center"
                variant="primary"
                type="submit"
                size="md"
              >
                <FiSave />
                Save
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ResultInputForm;