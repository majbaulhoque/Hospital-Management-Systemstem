
import { Card, Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestDetails = () => {
  const result = {
    resultId: 'R12345',
    patientId: 'P67890',
    testId: 'T54321',
    sampleId: 'S98765',
    testDate: '2024-08-28',
    resultDate: '2024-08-30',
    testResult: '5.1 mmol/L',
    normalRange: '4.0-6.0 mmol/L',
    labTechnician: 'John Doe',
    remarks: 'No additional remarks.',
    doctorComments: 'Results are within normal range.',
    resultStatus: 'Finalized',
    authorizedBy: 'Dr. Smith',
    attachment: 'https://example.com/results.pdf'
  };

  return (
    <div className="container mt-5 mb-5">
      <Card className="shadow-lg border-light rounded">
        <Card.Header as="h4" className="custom-bg-main text-white text-center py-3 rounded-top">
          Patient Test Report
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={12} className="mb-4">
              <Card className="border-light">
                <Card.Body>
                  <Card.Title className="mb-4">Test Information</Card.Title>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td><strong>Result ID:</strong></td>
                        <td>{result.resultId}</td>
                      </tr>
                      <tr>
                        <td><strong>Patient ID:</strong></td>
                        <td>{result.patientId}</td>
                      </tr>
                      <tr>
                        <td><strong>Test ID:</strong></td>
                        <td>{result.testId}</td>
                      </tr>
                      <tr>
                        <td><strong>Sample ID:</strong></td>
                        <td>{result.sampleId}</td>
                      </tr>
                      <tr>
                        <td><strong>Test Date:</strong></td>
                        <td>{result.testDate}</td>
                      </tr>
                      <tr>
                        <td><strong>Result Date:</strong></td>
                        <td>{result.resultDate}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} className="mb-4">
              <Card className="border-light">
                <Card.Body>
                  <Card.Title className="mb-4">Test Results</Card.Title>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td><strong>Test Result:</strong></td>
                        <td>{result.testResult}</td>
                      </tr>
                      <tr>
                        <td><strong>Normal Range:</strong></td>
                        <td>{result.normalRange}</td>
                      </tr>
                      <tr>
                        <td><strong>Lab Technician:</strong></td>
                        <td>{result.labTechnician}</td>
                      </tr>
                      <tr>
                        <td><strong>Remarks:</strong></td>
                        <td>{result.remarks}</td>
                      </tr>
                      <tr>
                        <td><strong>Doctor Comments:</strong></td>
                        <td>{result.doctorComments}</td>
                      </tr>
                      <tr>
                        <td><strong>Result Status:</strong></td>
                        <td>{result.resultStatus}</td>
                      </tr>
                      <tr>
                        <td><strong>Authorized By:</strong></td>
                        <td>{result.authorizedBy}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            {result.attachment && (
              <Col md={12}>
                <div className="text-center">
                  <Button className='custom-bg-main border-0' href={result.attachment} target="_blank" rel="noopener noreferrer">
                    View Attachment
                  </Button>
                </div>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestDetails;
