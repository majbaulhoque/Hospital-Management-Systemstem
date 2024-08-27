import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/styles/Doctor Management/DoctorManagementForm.css';
import { IoIosArrowDropdown } from "react-icons/io";

const DoctorManagement = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className='container mx-lg-auto'>
            <h2 className="fw-bolder m-3">Personal Information:</h2>
            <div className='mx-3 mx-md-5 '>
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
                            <p className='date-title'>Date of Birth</p>
                            <DatePicker
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className='date-picker mb-3'
                                showYearDropdown
                                scrollableMonthYearDropdown
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
                        <input className='gender-input' />
                        <IoIosArrowDropdown className='gender-icon h3' />
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
            </div>
        </div>
    );
};

export default DoctorManagement;
