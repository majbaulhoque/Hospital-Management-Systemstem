import { Form } from "react-bootstrap";

const UserRoleSettings = () => {
  return (
    <div className="container mb-5">
      {/* doctor */}
      <div className="row border border-dark-subtle mt-3  rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
         <p > Doctors</p>
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          {/* doctor management */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Doctor Management</span>}
              className=""
            />
          </div>
          {/*  Commission Tracking */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Commission Tracking</span>}
              className="custom-checkbox"
            />
          </div>
          {/*  Patient Referral Tracking */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Patient Referral Tracking</span>}
              className="custom-checkbox"
            />
          </div>
          {/* dDoctor Ledger */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Doctor Ledger</span>}
              className="custom-checkbox"
            />
          </div>
        </div>
      </div>
      {/* Lab Test */}
      <div className="row border border-dark-subtle mt-3  rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          Lab Test
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          {/* Test Management */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Test Management</span>}
              className=""
            />
          </div>
          {/*  Invoice Generation*/}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Invoice Generation</span>}
              className="custom-checkbox"
            />
          </div>
          {/*  Test Result Input */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Test Result Input</span>}
              className="custom-checkbox"
            />
          </div>
          {/* Report Generation */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Report Generation</span>}
              className="custom-checkbox"
            />
          </div>
        </div>
      </div>
      {/* Patient */}
      <div className="row border border-dark-subtle mt-3  rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          Patient
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          {/* Patient Registration */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Patient Registration</span>}
              className=""
            />
          </div>
          {/*  Appointment Scheduling: */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Appointment Scheduling</span>}
              className="custom-checkbox"
            />
          </div>
          {/*  Patient History */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Patient History</span>}
              className="custom-checkbox"
            />
          </div>
          {/* Payment Tracking */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Payment Tracking</span>}
              className="custom-checkbox"
            />
          </div>
        </div>
      </div>
      {/* Accounts */}
      <div className="row border border-dark-subtle mt-3  rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          Accounts
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          {/* Income Management */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Income Management</span>}
              className=""
            />
          </div>
          {/*  Expense Management */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Expense Management</span>}
              className="custom-checkbox"
            />
          </div>
          {/*  Due Collection */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Due Collection</span>}
              className="custom-checkbox"
            />
          </div>
          {/* Doctor Commission Payment */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Doctor Commission Payment</span>}
              className="custom-checkbox"
            />
          </div>
          {/* Ledger Management */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Ledger Management</span>}
              className="custom-checkbox"
            />
          </div>
        </div>
      </div>
      {/* Report */}
      <div className="row border border-dark-subtle mt-3  rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          Report
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          {/*Profit/Loss Tracking */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Profit/Loss Tracking</span>}
              className=""
            />
          </div>
          {/*  Sales Tracking */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Sales Tracking</span>}
              className="custom-checkbox"
            />
          </div>
          {/* Expense Tracking */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Expense Tracking</span>}
              className="custom-checkbox"
            />
          </div>
          {/* Commission Tracking */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Commission Tracking</span>}
              className="custom-checkbox"
            />
          </div>
          {/* Income Statement */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Income Statement</span>}
              className="custom-checkbox"
            />
          </div>
        </div>
      </div>
      {/* HR */}
      <div className="row border border-dark-subtle mt-3  rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">HR</div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          {/* Employee Management */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Employee Management</span>}
              className=""
            />
          </div>
          {/*  Attendance Tracking */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Attendance Tracking</span>}
              className="custom-checkbox"
            />
          </div>
          {/* Payroll Management */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Payroll Management</span>}
              className="custom-checkbox"
            />
          </div>
          {/* Performance Tracking */}
          <div>
            <Form.Check
              type="checkbox"
              id="beautifulCheckbox"
              label={<span>Performance Tracking</span>}
              className="custom-checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoleSettings;
