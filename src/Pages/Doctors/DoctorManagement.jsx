/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Button, Card, Col, Row, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
 // Make sure the path is correct
import { FiSave } from 'react-icons/fi';
import FormInput from '../../Component/From/FormInput';
import { useForm } from 'react-hook-form';

const DoctorManagement = () => {
  const [selectedDate, setSelectedDate] = useState(null);

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
    <div className='container mt-5 mb-5'>
      <Card className="shadow-md custom-bg-main-light rounded border-0">
        <Card.Header
          as="h5"
          className="custom-text-main text-center py-3 rounded-top"
        >
          Doctor Management
        </Card.Header>
        <Card.Body className="p-lg-5 p-3">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
              <Col md={4}>
                <FormInput
                  name="doctorId"
                  control={control}
                  label="Doctor ID"
                  placeholder="Doctor ID"
                  type="number"
                  rules={{ required: "Doctor ID is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="title"
                  control={control}
                  label="Title"
                  placeholder="Title"
                  rules={{ required: "Title is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="doctorName"
                  control={control}
                  label="Doctor Name"
                  placeholder="Doctor Name"
                  rules={{ required: "Doctor Name is required" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormInput
                  name="fathersName"
                  control={control}
                  label="Father’s Name"
                  placeholder="Father’s Name"
                  rules={{ required: "Father’s Name is required" }}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  name="attachment"
                  control={control}
                  label="Attachment"
                  placeholder="Attachment"
                  rules={{ required: "Attachment is required" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormInput
                  name="permanentAddress"
                  control={control}
                  label="Permanent Address"
                  placeholder="Permanent Address"
                  rules={{ required: "Permanent Address is required" }}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  name="presentAddress"
                  control={control}
                  label="Present Address"
                  placeholder="Present Address"
                  rules={{ required: "Present Address is required" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
              <FormInput
                  name="DateOfBirth"
                  type='date'
                  control={control}
                  label="Date of Birth"
                  placeholder="Enter Date of Birth"
                  rules={{ required: "Date of Birth is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="code"
                  control={control}
                  label="Code"
                  placeholder="Code"
                  rules={{ required: "Code is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="age"
                  control={control}
                  label="Age"
                  placeholder="Age"
                  rules={{ required: "Age is required" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <FormInput
                  name="email"
                  control={control}
                  label="Email"
                  placeholder="Email"
                  type="email"
                  rules={{ required: "Email is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="nationality"
                  control={control}
                  label="Nationality"
                  placeholder="Nationality"
                  rules={{ required: "Nationality is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="contactNumber"
                  control={control}
                  label="Contact Number"
                  placeholder="Contact Number"
                  rules={{ required: "Contact Number is required" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group className='mb-3' controlId="formBloodGroup">
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <FormInput
                  name="genderNumber"
                  control={control}
                  label="Gender Number"
                  placeholder="Gender Number"
                  rules={{ required: "Gender Number is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="qualification"
                  control={control}
                  label="Qualification"
                  placeholder="Qualification"
                  rules={{ required: "Qualification is required" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormInput
                  name="bankAccount"
                  control={control}
                  label="Bank Account"
                  placeholder="Bank Account"
                  type="number"
                  rules={{ required: "Bank Account is required" }}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  name="discount"
                  control={control}
                  label="Discount"
                  placeholder="Discount"
                  type="number"
                  rules={{ required: "Discount is required" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group className='mb-3' controlId="formDoctorArea">
                  <Form.Label>Doctor Area</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Area 1</option>
                    <option>Area 2</option>
                    <option>Area 3</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <FormInput
                  name="rateOfVisit"
                  control={control}
                  label="Rate of Visit"
                  placeholder="Rate of Visit"
                  rules={{ required: "Rate of Visit is required" }}
                />
              </Col>
              <Col md={4}>
                <FormInput
                  name="ob"
                  control={control}
                  label="OB"
                  placeholder="OB"
                  type="number"
                  rules={{ required: "OB is required" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FormInput
                  name="balance"
                  control={control}
                  label="Balance"
                  placeholder="Balance"
                  type="number"
                />
              </Col>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" required />
            </Form.Group>
            <div className="text-center w-100">
              <Button
                className="custom-bg-main border-0 d-flex align-items-center mx-auto gap-2 justify-content-center"
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

export default DoctorManagement;
