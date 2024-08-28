

import { useForm } from "react-hook-form";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import FormInput from "../../From/FormInput";
import { FiSave } from "react-icons/fi";

const ResultInputForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="container mt-5">
      <Card className="p-4 shadow-sm rounded">
        <Card.Body>
          <h4 className="col-lg-3 col-9 mx-auto text-center py-2 rounded-2 mb-5 bg-secondary bg-opacity-25">
            Result Input Details
          </h4>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <FormInput
                  name="resultId"
                  control={control}
                  label="Result ID"
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

            <Row>
              <Col md={6}>
                <FormInput
                  name="testId"
                  control={control}
                  label="Test ID"
                  placeholder="Identifier for the test conducted"
                  rules={{ required: "Test ID is required" }}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  name="sampleId"
                  control={control}
                  label="Sample ID"
                  placeholder="Identifier for the sample provided by the patient"
                  rules={{ required: "Sample ID is required" }}
                />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormInput
                  name="testDate"
                  control={control}
                  label="Test Date"
                  type="date"
                  rules={{ required: "Test Date is required" }}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  name="resultDate"
                  control={control}
                  label="Result Date"
                  type="date"
                  rules={{ required: "Result Date is required" }}
                />
              </Col>
            </Row>

            <FormInput
              name="testResult"
              control={control}
              label="Test Result"
              placeholder="Actual result values (e.g., 5.1 mmol/L for glucose level)"
              rules={{ required: "Test Result is required" }}
            />
            <Row>
              <Col md={6}>
                <FormInput
                  name="normalRange"
                  control={control}
                  label="Normal Range"
                  placeholder="Reference range for the test result"
                  rules={{ required: "Normal Range is required" }}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  name="labTechnician"
                  control={control}
                  label="Lab Technician"
                  placeholder="Name or ID of the lab technician who entered the results"
                  rules={{ required: "Lab Technician is required" }}
                />
              </Col>
            </Row>

            <FormInput
              name="remarks"
              control={control}
              label="Remarks"
              placeholder="Any additional notes or remarks related to the result"
              as="textarea"
              rows={3}
            />

            <FormInput
              name="doctorComments"
              control={control}
              label="Doctor Comments"
              placeholder="Comments or observations by the doctor reviewing the result"
              as="textarea"
              rows={3}
            />

            <Row>
              <Col md={6}>
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
              <Col md={6}>
                <FormInput
                  name="authorizedBy"
                  
                  control={control}
                  label="Authorized By"
                  placeholder="Name or ID of the person authorizing the result"
                  rules={{ required: "Authorization is required" }}
                />
              </Col>
            </Row>

            <FormInput
              name="attachment"
              control={control}
              label="Attachment"
              type="file"
              rules={{ required: "Attachment is required" }}
            />
            <div className="text-center w-100">
              <Button
                className="custom-bg-main border-0 d-flex align-items-center  mx-auto  gap-2 justify-content-center"
                variant="primary"
                type="submit"
                size="lg"
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
