import { useForm } from "react-hook-form";
import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { FiSave } from "react-icons/fi";

const TestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Here, you can make an API call or handle the data as needed
  };

  return (
    <div className="container mt-5 mb-5">
      <Card className="p-4 shadow-sm rounded">
        <Card.Body>
          <h4 className="col-lg-3 col-9 mx-auto text-center py-2 rounded-2 mb-5 bg-secondary bg-opacity-25">
            Create Test Attributes
          </h4>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
                {/* test id */}
              <Form.Group as={Col} md={6} controlId="testId">
                <Form.Label>Test ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unique identifier for each test"
                  {...register("testId", { required: "Test ID is required" })}
                  isInvalid={!!errors.testId}
                />
                {errors.testId && (
                  <Form.Control.Feedback type="invalid">
                    {errors.testId.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="testName">
                {/* test name */}
                <Form.Label>Test Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name of the test (e.g., Blood Test, X-ray)"
                  {...register("testName", {
                    required: "Test Name is required",
                  })}
                  isInvalid={!!errors.testName}
                />
                {errors.testName && (
                  <Form.Control.Feedback type="invalid">
                    {errors.testName.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="testCategory">
                {/* test category */}
                <Form.Label>Test Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Category under which the test falls (e.g., Hematology, Radiology)"
                  {...register("testCategory", {
                    required: "Test Category is required",
                  })}
                  isInvalid={!!errors.testCategory}
                />
                {errors.testCategory && (
                  <Form.Control.Feedback type="invalid">
                    {errors.testCategory.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="testCode">
                {/* test code */}
                <Form.Label>Test Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Optional code for the test (used for billing or internal purposes)"
                  {...register("testCode", {
                    required: "Test Code is required",
                  })}
                  isInvalid={!!errors.testCategory}
                />
                {errors.testCode && (
                  <Form.Control.Feedback type="invalid">
                    {errors.testCode.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="testDescription">
                {/* test description */}
              <Form.Label>Test Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Detailed description of the test"
                {...register("testDescription", {
                  required: "Test Description is required",
                })}
                isInvalid={!!errors.testDescription}
              />
              {errors.testDescription && (
                <Form.Control.Feedback type="invalid">
                  {errors.testDescription.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="sampleRequired">
                {/* sample required */}
                <Form.Label>Sample Required</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type of sample required (e.g., blood, urine)"
                  {...register("sampleRequired", {
                    required: "Sample Required is required",
                  })}
                  isInvalid={!!errors.sampleRequired}
                />
                {errors.sampleRequired && (
                  <Form.Control.Feedback type="invalid">
                    {errors.sampleRequired.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
               {/* preparation required */}
              <Form.Group as={Col} md={6} controlId="preparationRequired">
                <Form.Label>Preparation Required</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Any special instructions for the patient before the test (e.g., fasting)"
                  {...register("preparationRequired", {
                    required: "Preparation Required is required",
                  })}
                  isInvalid={!!errors.preparationRequired}
                />
                {errors.preparationRequired && (
                  <Form.Control.Feedback type="invalid">
                    {errors.preparationRequired.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Row>

            <Row className="mb-3">
                {/* test price */}
              <Form.Group as={Col} md={6} controlId="testPrice">
                <Form.Label>Test Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Cost associated with the test"
                  {...register("testPrice", {
                    required: "Test Price is required",
                  })}
                  isInvalid={!!errors.testPrice}
                />
                {errors.testPrice && (
                  <Form.Control.Feedback type="invalid">
                    {errors.testPrice.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="department">
                {/* department */}
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Department responsible for conducting the test"
                  {...register("department", {
                    required: "Department is required",
                  })}
                  isInvalid={!!errors.department}
                />
                {errors.department && (
                  <Form.Control.Feedback type="invalid">
                    {errors.department.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="testDuration">
                {/* test duration */}
                <Form.Label>Test Duration</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Approximate time to complete the test"
                  {...register("testDuration", {
                    required: "Test Duration is required",
                  })}
                  isInvalid={!!errors.testDuration}
                />
                {errors.testDuration && (
                  <Form.Control.Feedback type="invalid">
                    {errors.testDuration.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="testProcedure">
                {/* test procedure */}
                <Form.Label>Test Procedure</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Detailed steps or procedures for the test"
                  {...register("testProcedure", {
                    required: "Test Procedure is required",
                  })}
                  isInvalid={!!errors.testProcedure}
                />
                {errors.testProcedure && (
                  <Form.Control.Feedback type="invalid">
                    {errors.testProcedure.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="associatedEquipment">
                {/* Associated Equipment */}
              <Form.Label>Associated Equipment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Any equipment required for the test"
                {...register("associatedEquipment", {
                  required: "Associated Equipment is required",
                })}
                isInvalid={!!errors.associatedEquipment}
              />
              {errors.associatedEquipment && (
                <Form.Control.Feedback type="invalid">
                  {errors.associatedEquipment.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="labTechnician">
                {/* Lab Technician Assigned */}
              <Form.Label>Lab Technician Assigned</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name or ID of the lab technician responsible for the test"
                {...register("labTechnician", {
                  required: "Lab Technician Assigned is required",
                })}
                isInvalid={!!errors.labTechnician}
              />
              {errors.labTechnician && (
                <Form.Control.Feedback type="invalid">
                  {errors.labTechnician.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="testStatus">
                {/* Test Status */}
              <Form.Label>Test Status</Form.Label>
              <Form.Control
                as="select"
                {...register("testStatus")}
                defaultValue="Active"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Control>
            </Form.Group>

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

export default TestForm;
