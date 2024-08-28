/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure? you want to delete this report!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="bg-secondary bg-opacity-25 text-black border-0" >Cancel</Button>
        <Button variant="danger" >Yes! Delete it</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
