import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/styles/Doctor Management/DoctorManagementForm.css';
import { Button } from 'react-bootstrap';
// import { IoIosArrowDropdown } from "react-icons/io";

const DoctorManagement = () => {
    const [selectedDate, setSelectedDate] = useState(null);


    return (
        <div className='container mx-lg-auto'>
            <h2 className="fw-bolder m-3">Personal Information:</h2>
            <div className='doctor-management-form mx-3 mx-md-5 border p-3 rounded'>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <FloatingLabel
                            controlId="floatingDoctorId"
                            label="Doctor ID"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Doctor ID" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <FloatingLabel controlId="floatingTitle" label="Title" className='mb-3'>
                            <Form.Control type="text" placeholder="Title" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <FloatingLabel
                            controlId="floatingDocName"
                            label="Doctor Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Doctor Name" />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <FloatingLabel
                            controlId="floatingFatherName"
                            label="Father’s Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Father’s Name" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-6">
                        <FloatingLabel
                            controlId="floatingAttachment"
                            label="Attachment"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Attachment" />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <FloatingLabel
                            controlId="floatingPermanentAddress"
                            label="Permanent Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Permanent Address" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-6">
                        <FloatingLabel
                            controlId="floatingPresentAddress"
                            label="Present Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Present Address" />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 date-container">
                        <div className="date-wrapper">
                            {/* <p className='date-title'>Date of Birth</p> */}
                            <DatePicker
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className='date-picker mb-3 p-2'
                                showYearDropdown
                                scrollableMonthYearDropdown
                                placeholderText='Date of Birth'
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <FloatingLabel
                            controlId="floatingCode"
                            label="Code"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Code" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <FloatingLabel
                            controlId="floatingAge"
                            label="Age"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Age" />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <FloatingLabel
                            controlId="floatingEmail"
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="Email" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-4">
                        <FloatingLabel
                            controlId="floatingNationality"
                            label="Nationality"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Nationality" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-4">
                        <FloatingLabel
                            controlId="floatingNumber"
                            label="Contact Number"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Contact Number" />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 gender-container">
                        <Form.Group className='mb-3 ' controlId="formBloodGroup">
                            <Form.Select defaultValue="Choose..." className='blood-group'>
                                <option>Blood Group</option>
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
                    </div>
                    <div className="col-12 col-md-4">
                        <FloatingLabel
                            controlId="floatingNationality"
                            label="Nationality"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Nationality" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-4">
                        <FloatingLabel
                            controlId="floatingGenderNumber"
                            label="Gender Number"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Gender Number" />
                        </FloatingLabel>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 col-md-6 col-lg-7">
                        <FloatingLabel
                            controlId="floatingQualification"
                            label="Qualification"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Qualification" />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <FloatingLabel
                            controlId="floatingBankAccount"
                            label="Bank Account"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Bank Account" />
                        </FloatingLabel>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 col-md-6 col-lg-4">
                        <FloatingLabel
                            controlId="floatingDiscount"
                            label="Discount"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Discount" required />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Form.Group className='mb-3' controlId="formDoctorArea">
                            <Form.Select defaultValue="Doctor Area" className='blood-group'>
                                <option>Doctor Area</option>
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
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <FloatingLabel
                            controlId="floatingRateOfVisit"
                            label="Rate of Visit"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Rate of Visit" required />
                        </FloatingLabel>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 col-md-6 col-lg-6">
                        <FloatingLabel
                            controlId="floatingOb"
                            label="OB"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="OB" required />
                        </FloatingLabel>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <FloatingLabel
                            controlId="floatingBalance"
                            label="Balance"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Balance" />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 ">
                        <div className='border'>

                        </div>
                    </div>
                </div>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default DoctorManagement;
