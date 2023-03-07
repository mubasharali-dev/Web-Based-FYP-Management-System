import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AdminModal() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="programSelect">
              <Form.Label>Select Program</Form.Label>
              <Form.Control as="select" required>
                <option value="">Choose...</option>
                <option>Program A</option>
                <option>Program B</option>
                <option>Program C</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="shiftSelect">
              <Form.Label>Select Shift</Form.Label>
              <Form.Control as="select" required>
                <option value="">Choose...</option>
                <option>Shift A</option>
                <option>Shift B</option>
                <option>Shift C</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="supervisorSelect">
              <Form.Label>Select Supervisors</Form.Label>
              <Form.Control as="select" required>
                <option value="">Choose...</option>
                <option>Supervisor A</option>
                <option>Supervisor B</option>
                <option>Supervisor C</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="groupStrength">
              <Form.Label>Select Group Strength</Form.Label>
              <Form.Row>
                <Form.Group controlId="minSelect" as={Form.Col}>
                  <Form.Control as="select" required>
                    <option value="">Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                  <Form.Label>Minimum</Form.Label>
                </Form.Group>
                <Form.Group controlId="maxSelect" as={Form.Col}>
                  <Form.Control as="select" required>
                    <option value="">Choose...</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Form.Control>
                  <Form.Label>Maximum</Form.Label>
                </Form.Group>
              </Form.Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminModal;
