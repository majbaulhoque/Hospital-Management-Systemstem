/* eslint-disable no-unused-vars */
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import FormInput from "../../../From/FormInput";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";

const EditTestForm = () => {
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
          Edit Test
        </Card.Header>
        <Card.Body className="p-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
              <Col md={4}>
                {/* Test ID input with a default value */}
                <FormInput
                  defaultValue="T54321"
                  name="testId"
                  control={control}
                  label="Test ID"
                  placeholder="Unique identifier for each test"
                  rules={{ required: "Test ID is required" }}
                />
              </Col>
              <Col md={4}>
                {/* Test Name input with a default value */}
                <FormInput
                  defaultValue="Lipid Profile"
                  name="testName"
                  control={control}
                  label="Test Name"
                  placeholder="Name of the test (e.g., Blood Test, X-ray)"
                  rules={{ required: "Test Name is required" }}
                />
              </Col>
              <Col md={4}>
                {/* Test Category input with a default value */}
                <FormInput
                  defaultValue="Radiology"
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
                {/* Test Code input with a default value */}
                <FormInput
                  defaultValue="1012"
                  name="testCode"
                  control={control}
                  label="Test Code"
                  placeholder="Optional code for the test (used for billing or internal purposes)"
                  rules={{ required: "Test Code is required" }}
                />
              </Col>
              <Col md={6}>
                {/* Sample Required input with a default value */}
                <FormInput
                  defaultValue="Blood"
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
                {/* Test Description textarea with a default value */}
                <FormInput
                  defaultValue="A detailed analysis of blood components."
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
                {/* Preparation Required input with a default value */}
                <FormInput
                  defaultValue="Fasting for 12 hours"
                  name="preparationRequired"
                  control={control}
                  label="Preparation Required"
                  placeholder="Any special instructions for the patient before the test (e.g., fasting)"
                  rules={{ required: "Preparation Required is required" }}
                />
              </Col>
              <Col md={4}>
                {/* Test Price input with a default value */}
                <FormInput
                  defaultValue="300"
                  name="testPrice"
                  control={control}
                  label="Test Price"
                  placeholder="Cost associated with the test"
                  type="number"
                  rules={{ required: "Test Price is required" }}
                />
              </Col>
              <Col md={4}>
                {/* Department input with a default value */}
                <FormInput
                  defaultValue="Radiology"
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
                {/* Test Duration input with a default value */}
                <FormInput
                  defaultValue="30 minutes"
                  name="testDuration"
                  control={control}
                  label="Test Duration"
                  placeholder="Approximate time to complete the test"
                  rules={{ required: "Test Duration is required" }}
                />
              </Col>
              <Col md={4}>
                {/* Test Procedure input with a default value */}
                <FormInput
                  defaultValue="Blood draw"
                  name="testProcedure"
                  control={control}
                  label="Test Procedure"
                  placeholder="Detailed steps or procedures for the test"
                  rules={{ required: "Test Procedure is required" }}
                />
              </Col>
              <Col md={4}>
                {/* Associated Equipment input with a default value */}
                <FormInput
                  defaultValue="Syringe, test tubes"
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
                {/* Lab Technician input with a default value */}
                <FormInput
                  defaultValue="John Doe"
                  name="labTechnician"
                  control={control}
                  label="Lab Technician Assigned"
                  placeholder="Name or ID of the lab technician responsible for the test"
                  rules={{ required: "Lab Technician Assigned is required" }}
                />
              </Col>
              <Col md={8}>
                {/* Test Status radio buttons with default values */}
                <Form.Group className="fw-medium" controlId="testStatus">
                  <Form.Label>Test Status</Form.Label>
                  <div className="mt-2">
                    <Form.Check
                      type="radio"
                      label="Active"
                      value="Active"
                      name="testStatus"
                      id="testStatusActive"
                      defaultChecked
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

            {/* Submit button */}
            <div className="text-center w-100">
              <Button
                className="custom-bg-main border-0 d-flex align-items-center mx-auto gap-2 justify-content-center"
                variant="primary"
                type="submit"
                size="lg"
              >
                <FiEdit />
                Edit Test
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditTestForm;
