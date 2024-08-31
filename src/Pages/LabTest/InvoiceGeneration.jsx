
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";


const InvoiceGeneration = () => {

  const testData = [
    { id: 1, code: "1011", name: "CBC", price: 200 },
    { id: 2, code: "1012", name: "HBAC", price: 300 },
    { id: 3, code: "1013", name: "Lipid Profile", price: 500 },
    { id: 4, code: "1014", name: "LFT", price: 400 },
    // Add more test data as needed
  ];
  return (
    <div className="invoice-container custom-bg-main-light border p-3 my-5 rounded-3  container">
      <h2 className="text-center fw-bolder mb-5">Invoice</h2>
      <div className="row mb-3">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
            <Form.Group className="d-md-flex " controlId="billNumber">
              <Form.Label className="fw-bold m-2 ">Bill No :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Bill No"
                className="w-50 p-2"
              />
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
            <Form.Group className="d-md-flex" controlId="patientId">
              <Form.Label className="fw-bold m-2">Patient ID :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Patient ID"
                className="w-50 p-2"
              />
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
            <Form.Group className="d-md-flex " controlId="sampleId">
              <Form.Label className="fw-bold m-2 ">Sample ID :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Sample ID"
                className="w-50 p-2"
              />
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
            <Form.Group className="d-md-flex mb-3" controlId="billDate">
              <Form.Label className="fw-bold m-2 col-2">Date :</Form.Label>
              <Form.Control type="date" className="w-50 p-2" />
            </Form.Group>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row gap-2">
        <div className="border  col-12 col-md-6 px-2">
          <Form.Group
            className="d-flex flex-column flex-md-row my-3"
            controlId="patientName"
          >
            <Form.Label className="fw-bold m-2 col-12 col-md-4">
              Patient{`'`}s Name:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Patient's Name"
              className="w-100 w-md-50 p-2"
            />
          </Form.Group>

          <Form.Group
            className="d-flex flex-column flex-md-row my-3"
            controlId="address"
          >
            <Form.Label className="fw-bold m-2 col-12 col-md-4">
              Address:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              className="w-100 w-md-50 p-2"
            />
          </Form.Group>

          <Form.Group
            className="d-flex flex-column flex-md-row my-3"
            controlId="contactNo"
          >
            <Form.Label className="fw-bold m-2 col-12 col-md-4">
              Contact No:
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Contact No"
              className="w-100 w-md-50 p-2"
            />
          </Form.Group>

          <Form.Group
            className="d-flex flex-column flex-md-row my-3"
            controlId="regNo"
          >
            <Form.Label className="fw-bold m-2 col-12 col-md-4">
              Reg No:
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Reg No"
              className="w-100 w-md-50 p-2"
            />
          </Form.Group>

          <div className="d-flex flex-column flex-md-row">
            <Form.Group
              className="d-flex flex-column flex-md-row my-3 col-md-6"
              controlId="age"
            >
              <Form.Label className="fw-bold m-2 col-12 col-md-4">
                Age :
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Age"
                className="w-100 w-md-50 p-2"
              />
            </Form.Group>

            <Form.Group
              className="d-flex flex-column flex-md-row my-3 col-md-6"
              controlId="gender"
            >
              <Form.Label className="fw-bold m-2 col-12 col-md-4">
                Gender :
              </Form.Label>
              <select name="" id="" className="form-control w-100 w-md-50 p-2">
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </Form.Group>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <Form.Group
              className="d-flex flex-column flex-md-row my-3 col-md-6"
              controlId="district"
            >
              <Form.Label className="fw-bold m-2 col-12 col-md-4">
                District :
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="District"
                className="w-100 w-md-50 p-2"
              />
            </Form.Group>
            <Form.Group
              className="d-flex flex-column flex-md-row my-3 col-md-6"
              controlId="union"
            >
              <Form.Label className="fw-bold m-2 col-12 col-md-4">
                Union :
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Union"
                className="w-100 w-md-50 p-2"
              />
            </Form.Group>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6 border rounded  p-3">
          <Form.Group
            className="d-flex flex-column flex-md-row"
            controlId="docTitle"
          >
            <Form.Label className="fw-bold mb-2 m-2 col-12 col-md-3">
              Doc Title :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Doc Title"
              className="w-100 w-md-50 p-2"
            />
          </Form.Group>
          <Form.Group
            className="d-flex flex-column flex-md-row my-3"
            controlId="refIdDoctor"
          >
            <Form.Label className="fw-bold mb-2 m-2 col-12 col-md-3">
              RefId Doctor :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="RefId Doctor"
              className="w-100 w-md-50 p-2"
            />
          </Form.Group>
          <Form.Group
            className="d-flex flex-column flex-md-row my-3"
            controlId="qualification"
          >
            <Form.Label className="fw-bold mb-2 m-2 col-12 col-md-3">
              Qualification :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Qualification"
              className="w-100 w-md-50 p-2"
            />
          </Form.Group>
          <Form.Group
            className="d-flex flex-column flex-md-row my-3"
            controlId="docCode"
          >
            <Form.Label className="fw-bold mb-2 m-2 col-12 col-md-3">
              Doc Code :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Doc Code"
              className="w-100 w-md-50 p-2"
            />
          </Form.Group>
          <Form.Group
            className="d-flex flex-column flex-md-row my-3"
            controlId="docAddress"
          >
            <Form.Label className="fw-bold mb-2 m-2 col-12 col-md-3">
              Address :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              className="w-100 w-md-50 p-2"
            />
          </Form.Group>
        </div>
      </div>

      {/* table */}
      <div  className="table-responsive mb-3 mt-3">
            <Table
              striped
              responsive
              bordered
              hover
              className="text-center mt-3 mb-4   Custom-bg-main-light"
            >
              <thead className="thead-dark">
                <tr>
                  <th className="text-nowrap" >SL NO</th>
                  <th className="text-nowrap">Test Id</th>
                  <th className="text-nowrap">Test Name</th>
                  <th className="text-nowrap">Test Result</th>
                  <th className="text-nowrap">Reference</th>
                </tr>
              </thead>
              <tbody>
                {testData?.map((test, index) => (
                  <tr key={test.id}>
                    <td className="text-nowrap">{index + 1}</td>
                    <td className="text-nowrap">{test.code}</td>
                    <td className="text-nowrap">{test.name}</td>
                    <td className="col-3 text-nowrap">
                        <Form.Control
                          defaultValue={test.result}
                          type="text"
                          className="text-center  bg-transparent border-0"
                        />
                      </td>
                      <td className="col-3 text-nowrap">
                        <Form.Control
                          defaultValue={"300-400 ml"}
                          type="text"
                          className="text-center  bg-transparent border-0"
                        />
                      </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

      <div className="row  m-0">
        <div className="col-12 col-md-9">
          <div className="row">
            <div className="col-12 col-md-5">
              <Form.Group className="d-flex mb-3" controlId="totalAmount">
                <Form.Label className="fw-bold m-2 col-3">Total :</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Total Amount"
                  className="w-75 p-2"
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="d-flex mb-3" controlId="discount1">
                <Form.Label className="fw-bold m-2 col-3">
                  Discount :
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Discount"
                  className="w-75 p-2"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5">
              <Form.Group className="d-flex mb-3" controlId="discount2">
                <Form.Label className="fw-bold m-2 col-3">
                  Discount :
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Discount"
                  className="w-75 p-2"
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="d-flex mb-3" controlId="netPayable1">
                <Form.Label className="fw-bold m-2 col-3">
                  Net Payable :
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Net Payable"
                  className="w-75 p-2"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5">
              <Form.Group className="d-flex mb-3" controlId="amountPaid">
                <Form.Label className="fw-bold m-2 col-3">Paid :</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Amount Paid"
                  className="w-75 p-2"
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="d-flex mb-3" controlId="dueAmount">
                <Form.Label className="fw-bold m-2 col-3">Due :</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Due Amount"
                  className="w-75 p-2"
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <Form.Group className="flex-col mb-3" controlId="remark">
            <Form.Label className="fw-bold">Remark :</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGeneration;
