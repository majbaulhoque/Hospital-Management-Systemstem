import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const InvoiceGeneration = () => {
    return (
        <div className=''>
            <div className="invoice-container border p-3 my-5 rounded-3 shadow-lg container">
                <h2 className='text-center fw-bolder mb-5'>Invoice</h2>
                <div className="row">
                    <div className='d-flex justify-content-between'>
                        <div className="col-12 col-md-6 col-lg-4">
                            <Form.Group className="d-flex  mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='fw-bold m-2'>Bill No : </Form.Label>
                                <Form.Control type="number" placeholder="Bill ID" className='w-75 p-2' />
                            </Form.Group>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Form.Group className="d-flex  mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='fw-bold m-2'>Date : </Form.Label>
                                <Form.Control type="date" className='w-75 p-2' />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <div className='border shadow col-12 col-md-6 px-2'>
                            <Form.Group className="d-flex flex-column flex-md-row my-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='fw-bold m-2 col-12 col-md-4'>Patient{`'`}s Name:</Form.Label>
                                <Form.Control type="text" placeholder="Patient's Name" className='w-100 w-md-50 p-2' />
                            </Form.Group>

                            <Form.Group className="d-flex flex-column flex-md-row my-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='fw-bold m-2 col-12 col-md-4'>Address:</Form.Label>
                                <Form.Control type="text" placeholder="Address" className='w-100 w-md-50 p-2' />
                            </Form.Group>

                            <Form.Group className="d-flex flex-column flex-md-row my-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='fw-bold m-2 col-12 col-md-4'>Contact No:</Form.Label>
                                <Form.Control type="number" placeholder="Contact No" className='w-100 w-md-50 p-2' />
                            </Form.Group>

                            <Form.Group className="d-flex flex-column flex-md-row my-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='fw-bold m-2 col-12 col-md-4'>Reg No:</Form.Label>
                                <Form.Control type="number" placeholder="Reg No" className='w-100 w-md-50 p-2' />
                            </Form.Group>

                            <div className='d-flex flex-column flex-md-row'>
                                <Form.Group className="d-flex flex-column flex-md-row my-3 col-md-6" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='fw-bold m-2 col-12 col-md-4'>Age :</Form.Label>
                                    <Form.Control type="number" placeholder="Age" className='w-100 w-md-50 p-2' />
                                </Form.Group>

                                <Form.Group className="d-flex flex-column flex-md-row my-3 col-md-6" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='fw-bold m-2 col-12 col-md-4'>Gender :</Form.Label>
                                    <select name="" id="" className="form-control w-100 w-md-50 p-2">
                                        <option value="">Select...</option>
                                        <option value="">Male</option>
                                        <option value="">Female</option>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className='d-flex flex-column flex-md-row'>
                                <Form.Group className="d-flex flex-column flex-md-row my-3 col-md-6" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='fw-bold m-2 col-12 col-md-4'>District :</Form.Label>
                                    <Form.Control type="text" placeholder="District" className='w-100 w-md-50 p-2' />
                                </Form.Group>
                                <Form.Group className="d-flex flex-column flex-md-row my-3 col-md-6" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='fw-bold m-2 col-12 col-md-4'>Union :</Form.Label>
                                    <Form.Control type="text" placeholder="Union" className='w-100 w-md-50 p-2' />
                                </Form.Group>

                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 border rounded shadow p-3">
                            <Form.Group className="d-flex " controlId="exampleForm.ControlInput1">
                                <Form.Label className="fw-bold mb-2 m-2 col-3">Doc Title :</Form.Label>
                                <Form.Control type="text" placeholder="Doc Title" className="w-50 p-2" />
                            </Form.Group>
                            <Form.Group className="d-flex  my-3" controlId="exampleForm.ControlInput2">
                                <Form.Label className="fw-bold mb-2 m-2 col-3">RefId Doctor :</Form.Label>
                                <Form.Control type="text" placeholder="RefId Doctor" className="w-50 p-2" />
                            </Form.Group>
                            <Form.Group className="d-flex  my-3" controlId="exampleForm.ControlInput3">
                                <Form.Label className="fw-bold mb-2 m-2 col-3">Qualification :</Form.Label>
                                <Form.Control type="text" placeholder="Qualification" className="w-50 p-2" />
                            </Form.Group>
                            <Form.Group className="d-flex  my-3" controlId="exampleForm.ControlInput4">
                                <Form.Label className="fw-bold mb-2 m-2 col-3">Doc Code :</Form.Label>
                                <Form.Control type="text" placeholder="Doc Code" className="w-50 p-2" />
                            </Form.Group>
                            <Form.Group className="d-flex  my-3" controlId="exampleForm.ControlInput5">
                                <Form.Label className="fw-bold mb-2 m-2 col-3">Address :</Form.Label>
                                <Form.Control type="text" placeholder="Address" className="w-50 p-2" />
                            </Form.Group>
                        </div>
                    </div>


                </div>
                <div className=''>
                    <div className='mt-3 shadow col-12 col-md-8 col-lg-8'>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr className='common-table'>
                                    <th>SL.</th>
                                    <th>Items</th>
                                    <th>Rate</th>
                                    <th>Qty</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-start'>
                        <button className='custom-bg-main text-white border-0 px-4 py-2 rounded-3 me-2'>Referrel</button>
                        <button className='custom-bg-main text-white border-0 px-4 py-2 rounded-3'>Requisition</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default InvoiceGeneration;