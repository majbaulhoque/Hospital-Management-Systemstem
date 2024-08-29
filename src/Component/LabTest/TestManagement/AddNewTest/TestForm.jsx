/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Card, Button, Col, Row, Form } from "react-bootstrap";
import { FiSave } from "react-icons/fi";
import FormInput from "../../../From/FormInput";

const TestForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Here, you can make an API call or handle the data as needed
  };

  return (
    <div className="container mt-5 mb-5">
      <Card className="shadow-md custom-bg-main-light  rounded border-0">
        <Card.Header
          as="h5"
          className="custom-text-main text-center py-3 rounded-top"
        >
          Create New Test
        </Card.Header>
        <Card.Body className="p-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
              <Col md={4}>
                <FormInput
                  name="testId"
                  control={control}
                  label="Test ID"
                  placeholder="Unique identifier for each test"
                  rules={{ required: "Test ID is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="testName"
                  control={control}
                  label="Test Name"
                  placeholder="Name of the test (e.g., Blood Test, X-ray)"
                  rules={{ required: "Test Name is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="testCategory"
                  control={control}
                  label="Test Category"
                  placeholder="Category under which the test falls (e.g., Hematology, Radiology)"
                  rules={{ required: "Test Category is required" }}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <FormInput
                  name="testCode"
                  control={control}
                  label="Test Code"
                  placeholder="Optional code for the test (used for billing or internal purposes)"
                  rules={{ required: "Test Code is required" }}
                />
              </Col>

              <Col md={6}>
                <FormInput
                  name="sampleRequired"
                  control={control}
                  label="Sample Required"
                  placeholder="Type of sample required (e.g., blood, urine)"
                  rules={{ required: "Sample Required is required" }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormInput
                  name="testDescription"
                  control={control}
                  label="Test Description"
                  placeholder="Detailed description of the test"
                  as="textarea"
                  rows={3}
                  rules={{ required: "Test Description is required" }}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <FormInput
                  name="preparationRequired"
                  control={control}
                  label="Preparation Required"
                  placeholder="Any special instructions for the patient before the test (e.g., fasting)"
                  rules={{ required: "Preparation Required is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="testPrice"
                  control={control}
                  label="Test Price"
                  placeholder="Cost associated with the test"
                  type="number"
                  rules={{ required: "Test Price is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="department"
                  control={control}
                  label="Department"
                  placeholder="Department responsible for conducting the test"
                  rules={{ required: "Department is required" }}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <FormInput
                  name="testDuration"
                  control={control}
                  label="Test Duration"
                  placeholder="Approximate time to complete the test"
                  rules={{ required: "Test Duration is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="testProcedure"
                  control={control}
                  label="Test Procedure"
                  placeholder="Detailed steps or procedures for the test"
                  rules={{ required: "Test Procedure is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="associatedEquipment"
                  control={control}
                  label="Associated Equipment"
                  placeholder="Any equipment required for the test"
                  rules={{ required: "Associated Equipment is required" }}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <FormInput
                  name="labTechnician"
                  control={control}
                  label="Lab Technician Assigned"
                  placeholder="Name or ID of the lab technician responsible for the test"
                  rules={{ required: "Lab Technician Assigned is required" }}
                />
              </Col>
              <Col md={8}>
                <Form.Group className="fw-medium" controlId="testStatus">
                  <Form.Label>Test Status</Form.Label>
                  <div className="mt-2">
                    <Form.Check
                      type="radio"
                      label="Active"
                      value="Active"
                      name="testStatus"
                      id="testStatusActive"
                      control={control}
                      inline
                    />
                    <Form.Check
                      type="radio"
                      label="Inactive"
                      value="Inactive"
                      name="testStatus"
                      id="testStatusInactive"
                      control={control}
                      inline
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center w-100">
              <Button
                className="custom-bg-main border-0 d-flex align-items-center mx-auto gap-2 justify-content-center"
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

export default TestForm;
