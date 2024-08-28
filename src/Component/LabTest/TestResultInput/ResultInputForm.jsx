import { useForm } from "react-hook-form";
import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { FiSave } from "react-icons/fi";

const ResultInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="resultId">
                <Form.Label>Result ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unique identifier for each test result"
                  {...register("resultId", {
                    required: "Result ID is required",
                  })}
                  isInvalid={!!errors.resultId}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.resultId?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="patientId">
                <Form.Label>Patient ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Identifier for the patient who took the test"
                  {...register("patientId", {
                    required: "Patient ID is required",
                  })}
                  isInvalid={!!errors.patientId}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.patientId?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="testId">
                <Form.Label>Test ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Identifier for the test conducted"
                  {...register("testId", { required: "Test ID is required" })}
                  isInvalid={!!errors.testId}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.testId?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="sampleId">
                <Form.Label>Sample ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Identifier for the sample provided by the patient"
                  {...register("sampleId", {
                    required: "Sample ID is required",
                  })}
                  isInvalid={!!errors.sampleId}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.sampleId?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="testDate">
                <Form.Label>Test Date</Form.Label>
                <Form.Control
                  type="date"
                  {...register("testDate", {
                    required: "Test Date is required",
                  })}
                  isInvalid={!!errors.testDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.testDate?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="resultDate">
                <Form.Label>Result Date</Form.Label>
                <Form.Control
                  type="date"
                  {...register("resultDate", {
                    required: "Result Date is required",
                  })}
                  isInvalid={!!errors.resultDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.resultDate?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="testResult">
              <Form.Label>Test Result</Form.Label>
              <Form.Control
                type="text"
                placeholder="Actual result values (e.g., 5.1 mmol/L for glucose level)"
                {...register("testResult", {
                  required: "Test Result is required",
                })}
                isInvalid={!!errors.testResult}
              />
              <Form.Control.Feedback type="invalid">
                {errors.testResult?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="normalRange">
                <Form.Label>Normal Range</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Reference range for the test result"
                  {...register("normalRange", {
                    required: "Normal Range is required",
                  })}
                  isInvalid={!!errors.normalRange}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.normalRange?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="labTechnician">
                <Form.Label>Lab Technician</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name or ID of the lab technician who entered the results"
                  {...register("labTechnician", {
                    required: "Lab Technician is required",
                  })}
                  isInvalid={!!errors.labTechnician}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.labTechnician?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="remarks">
              <Form.Label>Remarks</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Any additional notes or remarks related to the result"
                {...register("remarks")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="doctorComments">
              <Form.Label>Doctor Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Comments or observations by the doctor reviewing the result"
                {...register("doctorComments")}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="resultStatus">
                <Form.Label>Result Status</Form.Label>
                <Form.Control
                  as="select"
                  {...register("resultStatus", {
                    required: "Result Status is required",
                  })}
                  isInvalid={!!errors.resultStatus}
                >
                  <option value="Pending">Pending</option>
                  <option value="Finalized">Finalized</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.resultStatus?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="attachment">
                <Form.Label>Attachment</Form.Label>
                <Form.Control type="file" {...register("attachment")} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="authorizedBy">
              <Form.Label>Authorized By</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name or ID of the person authorizing the result"
                {...register("authorizedBy", {
                  required: "Authorization is required",
                })}
                isInvalid={!!errors.authorizedBy}
              />
              <Form.Control.Feedback type="invalid">
                {errors.authorizedBy?.message}
              </Form.Control.Feedback>
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

export default ResultInputForm;
