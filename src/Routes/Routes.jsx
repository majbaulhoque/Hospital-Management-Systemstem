import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import CreateUser from "../Pages/CreateUser/CreateUser";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserRole from "../Pages/UserRole/UserRole";
import DoctorManagement from "../Pages/DoctorManagement/DoctorManagement";
import CommissionTracking from "../Pages/Doctors/CommissionTracking";
import PatientReferralTracking from "../Pages/Doctors/PatientReferralTracking";
import DoctorLedger from "../Pages/Doctors/DoctorLedger";
import InvoiceGeneration from "../Pages/LabTest/InvoiceGeneration";
import TestResultInput from "../Pages/LabTest/TestResultInput";
import ReportGeneration from "../Pages/LabTest/ReportGeneration";
import PatientRegistration from "../Pages/Patient/PatientRegistration";
import AppointmentScheduling from "../Pages/Patient/AppointmentScheduling";
import PatientHistory from "../Pages/Patient/PatientHistory";
import PaymentTracking from "../Pages/Patient/PaymentTracking";
import IncomeManagement from "../Pages/Accounts/IncomeManagement";
import ExpenseManagement from "../Pages/Accounts/ExpenseManagement";
import DueCollection from "../Pages/Accounts/DueCollection";
import DoctorCommissionPayment from "../Pages/Accounts/DoctorCommissionPayment";
import LedgerManagement from "../Pages/Accounts/LedgerManagement";
import ProfitLossTracking from "../Pages/Report/ProfitLossTracking";
import SalesTracking from "../Pages/Report/SalesTracking";
import ExpenseTracking from "../Pages/Report/ExpenseTracking";
import CommissionTrackingReport from "../Pages/Report/CommissionTrackingReport";
import IncomeStatement from "../Pages/Report/IncomeStatement";
import EmployeeManagement from "../Pages/HR/EmployeeManagement";
import AttendanceTracking from "../Pages/HR/AttendanceTracking";
import PayrollManagement from "../Pages/HR/PayrollManagement";
import PerformanceTracking from "../Pages/HR/PerformanceTracking";
import AddNewTest from "../Pages/LabTest/TestManagement/AddNewTest";
import ViewAllTest from "../Pages/LabTest/TestManagement/ViewAllTest";
import ViewTestDetails from "../Pages/LabTest/TestManagement/ViewTestDetails";
import EditTestForm from "../Component/LabTest/TestManagement/EditTestDetails/EditTestForm";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/user-role",
        element: <UserRole />,
      },
      // doctors
      {
        path: "doctors/doctor-management",
        element: <DoctorManagement />,
      },
      {
        path: "doctors/commission-tracking",
        element: <CommissionTracking />,
      },
      {
        path: "doctors/patient-referral-tracking",
        element: <PatientReferralTracking />,
      },
      {
        path: "doctors/doctor-ledger",
        element: <DoctorLedger />,
      },

      // lab test
      {
        path: "lab-test/invoice-generation",
        element: <InvoiceGeneration />,
      },
      {
        path: "lab-test/test-result-input",
        element: <TestResultInput />,
      },
      {
        path: "lab-test/report-generation",
        element: <ReportGeneration />,
      },

      // lab test/test management
      {
        path: "/lab-test/test-management/add-new-test",
        element: <AddNewTest />,
      },
      {
        path: "/lab-test/test-management/view-all-test",
        element: <ViewAllTest />,
      },
      {
        path: "/lab-test/view-test-details/:id",
        element: <ViewTestDetails />,
      },
      {
        path: "/lab-test/edit-test-details/:id",
        element: <EditTestForm/>,
      },

      // patient
      {
        path: "patient/patient-registration",
        element: <PatientRegistration />,
      },
      {
        path: "patient/appointment-scheduling",
        element: <AppointmentScheduling />,
      },
      {
        path: "patient/patient-history",
        element: <PatientHistory />,
      },
      {
        path: "patient/payment-tracking",
        element: <PaymentTracking />,
      },
      // accounts
      {
        path: "accounts/income-management",
        element: <IncomeManagement />,
      },
      {
        path: "accounts/expense-management",
        element: <ExpenseManagement />,
      },
      {
        path: "accounts/due-collection",
        element: <DueCollection />,
      },
      {
        path: "accounts/doctor-commission-payment",
        element: <DoctorCommissionPayment />,
      },
      {
        path: "accounts/ledger-management",
        element: <LedgerManagement />,
      },
      // report

      {
        path: "report/profit-loss-tracking",
        element: <ProfitLossTracking />,
      },
      {
        path: "report/sales-tracking",
        element: <SalesTracking />,
      },
      {
        path: "report/expense-tracking",
        element: <ExpenseTracking />,
      },
      {
        path: "report/commission-tracking",
        element: <CommissionTrackingReport />,
      },
      {
        path: "report/income-statement",
        element: <IncomeStatement />,
      },

      //   hr,
      {
        path: "hr/employee-management",
        element: <EmployeeManagement />,
      },
      {
        path: "hr/attendance-tracking",
        element: <AttendanceTracking />,
      },
      {
        path: "hr/payroll-management",
        element: <PayrollManagement />,
      },
      {
        path: "hr/performance-tracking",
        element: <PerformanceTracking />,
      },
    ],
  },
  // login
  {
    path: "/login",
    element: <Login />,
  },
  // create user
  {
    path: "/create-user",
    element: <CreateUser />,
  },
]);

export default Routes;
