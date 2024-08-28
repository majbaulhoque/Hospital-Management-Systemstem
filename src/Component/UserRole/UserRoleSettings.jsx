import  { useState } from 'react';
import { Form } from 'react-bootstrap';

const CheckboxesExample = () => {
  // State for parent checkboxes
  const [doctorChecked, setDoctorChecked] = useState(false);
  const [labTestChecked, setLabTestChecked] = useState(false);
  const [patientChecked, setPatientChecked] = useState(false);
  const [accountsChecked, setAccountsChecked] = useState(false);
  const [reportChecked, setReportChecked] = useState(false);
  const [hrChecked, setHrChecked] = useState(false);

  // State for child checkboxes
  const [doctorChildChecked, setDoctorChildChecked] = useState({
    doctorManagement: false,
    commissionTracking: false,
    patientReferralTracking: false,
    doctorLedger: false,
  });

  const [labTestChildChecked, setLabTestChildChecked] = useState({
    testManagement: false,
    invoiceGeneration: false,
    testResultInput: false,
    reportGeneration: false,
  });

  const [patientChildChecked, setPatientChildChecked] = useState({
    patientRegistration: false,
    appointmentScheduling: false,
    patientHistory: false,
    paymentTracking: false,
  });

  const [accountsChildChecked, setAccountsChildChecked] = useState({
    incomeManagement: false,
    expenseManagement: false,
    dueCollection: false,
    doctorCommissionPayment: false,
    ledgerManagement: false,
  });

  const [reportChildChecked, setReportChildChecked] = useState({
    profitLossTracking: false,
    salesTracking: false,
    expenseTracking: false,
    commissionTracking: false,
    incomeStatement: false,
  });

  const [hrChildChecked, setHrChildChecked] = useState({
    employeeManagement: false,
    attendanceTracking: false,
    payrollManagement: false,
    performanceTracking: false,
  });

  // Handle parent checkbox change
  const handleParentCheckboxChange = (setParentChecked, setChildChecked, childState) => {
    const newChecked = !childState.some((checked) => !checked);
    setParentChecked(!newChecked);
    setChildChecked((prev) => {
      const updated = {};
      for (let key in prev) {
        updated[key] = !newChecked;           
      }
      return updated;
    });
  };

  // Handle individual child checkbox change
  const handleChildCheckboxChange = (setParentChecked, setChildChecked, childState, name) => {
    setChildChecked((prev) => ({ ...prev, [name]: !prev[name] }));
    if (Object.values({ ...childState, [name]: !childState[name] }).every((checked) => checked)) {
      setParentChecked(true);
    } else {
      setParentChecked(false);
    }
  };

  return (
    <div className="container mb-5">
          {/* Dashboard */}
      <div className="row border border-dark-subtle mt-3 rounded-3">
        <div className="col border border-dark-subtle p-3 fw-bold">
          <Form.Check
            type="checkbox"
            label={<span>Dashboard</span>}
          />
        </div>
        
      </div>
      {/* Doctor Section */}
      <div className="row border border-dark-subtle mt-3 rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          <Form.Check
            type="checkbox"
            label={<span>Doctor</span>}
            checked={doctorChecked}
            onChange={() => handleParentCheckboxChange(setDoctorChecked, setDoctorChildChecked, Object.values(doctorChildChecked))}
          />
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          <Form.Check
            type="checkbox"
            label={<span>Doctor Management</span>}
            checked={doctorChildChecked.doctorManagement}
            onChange={() => handleChildCheckboxChange(setDoctorChecked, setDoctorChildChecked, doctorChildChecked, 'doctorManagement')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Commission Tracking</span>}
            checked={doctorChildChecked.commissionTracking}
            onChange={() => handleChildCheckboxChange(setDoctorChecked, setDoctorChildChecked, doctorChildChecked, 'commissionTracking')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Patient Referral Tracking</span>}
            checked={doctorChildChecked.patientReferralTracking}
            onChange={() => handleChildCheckboxChange(setDoctorChecked, setDoctorChildChecked, doctorChildChecked, 'patientReferralTracking')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Doctor Ledger</span>}
            checked={doctorChildChecked.doctorLedger}
            onChange={() => handleChildCheckboxChange(setDoctorChecked, setDoctorChildChecked, doctorChildChecked, 'doctorLedger')}
          />
        </div>
      </div>

      {/* Lab Test Section */}
      <div className="row border border-dark-subtle mt-3 rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          <Form.Check
            type="checkbox"
            label={<span>Lab Test</span>}
            checked={labTestChecked}
            onChange={() => handleParentCheckboxChange(setLabTestChecked, setLabTestChildChecked, Object.values(labTestChildChecked))}
          />
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          <Form.Check
            type="checkbox"
            label={<span>Test Management</span>}
            checked={labTestChildChecked.testManagement}
            onChange={() => handleChildCheckboxChange(setLabTestChecked, setLabTestChildChecked, labTestChildChecked, 'testManagement')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Invoice Generation</span>}
            checked={labTestChildChecked.invoiceGeneration}
            onChange={() => handleChildCheckboxChange(setLabTestChecked, setLabTestChildChecked, labTestChildChecked, 'invoiceGeneration')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Test Result Input</span>}
            checked={labTestChildChecked.testResultInput}
            onChange={() => handleChildCheckboxChange(setLabTestChecked, setLabTestChildChecked, labTestChildChecked, 'testResultInput')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Report Generation</span>}
            checked={labTestChildChecked.reportGeneration}
            onChange={() => handleChildCheckboxChange(setLabTestChecked, setLabTestChildChecked, labTestChildChecked, 'reportGeneration')}
          />
        </div>
      </div>

      {/* Patient Section */}
      <div className="row border border-dark-subtle mt-3 rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          <Form.Check
            type="checkbox"
            label={<span>Patient</span>}
            checked={patientChecked}
            onChange={() => handleParentCheckboxChange(setPatientChecked, setPatientChildChecked, Object.values(patientChildChecked))}
          />
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          <Form.Check
            type="checkbox"
            label={<span>Patient Registration</span>}
            checked={patientChildChecked.patientRegistration}
            onChange={() => handleChildCheckboxChange(setPatientChecked, setPatientChildChecked, patientChildChecked, 'patientRegistration')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Appointment Scheduling</span>}
            checked={patientChildChecked.appointmentScheduling}
            onChange={() => handleChildCheckboxChange(setPatientChecked, setPatientChildChecked, patientChildChecked, 'appointmentScheduling')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Patient History</span>}
            checked={patientChildChecked.patientHistory}
            onChange={() => handleChildCheckboxChange(setPatientChecked, setPatientChildChecked, patientChildChecked, 'patientHistory')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Payment Tracking</span>}
            checked={patientChildChecked.paymentTracking}
            onChange={() => handleChildCheckboxChange(setPatientChecked, setPatientChildChecked, patientChildChecked, 'paymentTracking')}
          />
        </div>
      </div>

      {/* Accounts Section */}
      <div className="row border border-dark-subtle mt-3 rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          <Form.Check
            type="checkbox"
            label={<span>Accounts</span>}
            checked={accountsChecked}
            onChange={() => handleParentCheckboxChange(setAccountsChecked, setAccountsChildChecked, Object.values(accountsChildChecked))}
          />
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          <Form.Check
            type="checkbox"
            label={<span>Income Management</span>}
            checked={accountsChildChecked.incomeManagement}
            onChange={() => handleChildCheckboxChange(setAccountsChecked, setAccountsChildChecked, accountsChildChecked, 'incomeManagement')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Expense Management</span>}
            checked={accountsChildChecked.expenseManagement}
            onChange={() => handleChildCheckboxChange(setAccountsChecked, setAccountsChildChecked, accountsChildChecked, 'expenseManagement')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Due Collection</span>}
            checked={accountsChildChecked.dueCollection}
            onChange={() => handleChildCheckboxChange(setAccountsChecked, setAccountsChildChecked, accountsChildChecked, 'dueCollection')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Doctor Commission Payment</span>}
            checked={accountsChildChecked.doctorCommissionPayment}
            onChange={() => handleChildCheckboxChange(setAccountsChecked, setAccountsChildChecked, accountsChildChecked, 'doctorCommissionPayment')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Ledger Management</span>}
            checked={accountsChildChecked.ledgerManagement}
            onChange={() => handleChildCheckboxChange(setAccountsChecked, setAccountsChildChecked, accountsChildChecked, 'ledgerManagement')}
          />
        </div>
      </div>

      {/* Report Section */}
      <div className="row border border-dark-subtle mt-3 rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          <Form.Check
            type="checkbox"
            label={<span>Report</span>}
            checked={reportChecked}
            onChange={() => handleParentCheckboxChange(setReportChecked, setReportChildChecked, Object.values(reportChildChecked))}
          />
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          <Form.Check
            type="checkbox"
            label={<span>Profit/Loss Tracking</span>}
            checked={reportChildChecked.profitLossTracking}
            onChange={() => handleChildCheckboxChange(setReportChecked, setReportChildChecked, reportChildChecked, 'profitLossTracking')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Sales Tracking</span>}
            checked={reportChildChecked.salesTracking}
            onChange={() => handleChildCheckboxChange(setReportChecked, setReportChildChecked, reportChildChecked, 'salesTracking')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Expense Tracking</span>}
            checked={reportChildChecked.expenseTracking}
            onChange={() => handleChildCheckboxChange(setReportChecked, setReportChildChecked, reportChildChecked, 'expenseTracking')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Commission Tracking</span>}
            checked={reportChildChecked.commissionTracking}
            onChange={() => handleChildCheckboxChange(setReportChecked, setReportChildChecked, reportChildChecked, 'commissionTracking')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Income Statement</span>}
            checked={reportChildChecked.incomeStatement}
            onChange={() => handleChildCheckboxChange(setReportChecked, setReportChildChecked, reportChildChecked, 'incomeStatement')}
          />
        </div>
      </div>

      {/* HR Section */}
      <div className="row border border-dark-subtle mt-3 rounded-3">
        <div className="col-lg-2 border border-dark-subtle p-3 fw-bold">
          <Form.Check
            type="checkbox"
            label={<span>HR</span>}
            checked={hrChecked}
            onChange={() => handleParentCheckboxChange(setHrChecked, setHrChildChecked, Object.values(hrChildChecked))}
          />
        </div>
        <div className="col border d-flex flex-wrap gap-4 border-dark-subtle p-3">
          <Form.Check
            type="checkbox"
            label={<span>Employee Management</span>}
            checked={hrChildChecked.employeeManagement}
            onChange={() => handleChildCheckboxChange(setHrChecked, setHrChildChecked, hrChildChecked, 'employeeManagement')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Attendance Tracking</span>}
            checked={hrChildChecked.attendanceTracking}
            onChange={() => handleChildCheckboxChange(setHrChecked, setHrChildChecked, hrChildChecked, 'attendanceTracking')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Payroll Management</span>}
            checked={hrChildChecked.payrollManagement}
            onChange={() => handleChildCheckboxChange(setHrChecked, setHrChildChecked, hrChildChecked, 'payrollManagement')}
          />
          <Form.Check
            type="checkbox"
            label={<span>Performance Tracking</span>}
            checked={hrChildChecked.performanceTracking}
            onChange={() => handleChildCheckboxChange(setHrChecked, setHrChildChecked, hrChildChecked, 'performanceTracking')}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckboxesExample;
