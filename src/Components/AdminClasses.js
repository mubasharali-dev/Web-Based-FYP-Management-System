import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function AdminClasses({
  show,
  onHide,
  onAddClass,
  className,
  totalStudents,
  totalProjects,
  totalSupervisors,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const [program, setProgram] = useState("");
  const [shift, setShift] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [minGroupStrength, setMinGroupStrength] = useState("");
  const [maxGroupStrength, setMaxGroupStrength] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onAddClass({
        program,
        shift,
        supervisor,
        minGroupStrength,
        maxGroupStrength,
      });
      onHide();
    }
    setValidated(true);
  };

  return (
    <>
      <div
        style={{
          margin: "30px",
          //   padding: "30px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        onClick={handleModalShow}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            // backgroundColor: "blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="#6759D1"
            opacity="100%"
          >
            <path d="M9273 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </div>
      </div>
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "regular",
          fontSize: "20px",
          textAlign: "left",
          //   marginTop: "1px",
          color: "#464646",
          marginLeft: "60px",
          //   backgroundColor: "blue",
        }}
      >
        Add Class
      </p>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formProgram">
              <Form.Label>Select Program*</Form.Label>
              <Form.Control
                required
                as="select"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
              >
                <option value="">Select Program</option>
                <option value="Program A">Program A</option>
                <option value="Program B">Program B</option>
                <option value="Program C">Program C</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a program.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formShift">
              <Form.Label>Select Shift*</Form.Label>
              <Form.Control
                required
                as="select"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
              >
                <option value="">Select Shift</option>
                <option value="Shift 1">Shift 1</option>
                <option value="Shift 2">Shift 2</option>
                <option value="Shift 3">Shift 3</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a shift.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="formSupervisor">
                <Form.Label>Select Supervisor</Form.Label>
                <Form.Control
                  as="select"
                  value={supervisor}
                  onChange={(e) => setSupervisor(e.target.value)}
                >
                  <option value="">Select Supervisor</option>
                  <option value="Supervisor A">Supervisor A</option>
                  <option value="Supervisor B">Supervisor B</option>
                  <option value="Supervisor C">Supervisor C</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formMinGroupStrength">
                <Form.Label>Select Min*</Form.Label>
                <Form.Control
                  required
                  as="select"
                  value={minGroupStrength}
                  onChange={(e) => setMinGroupStrength(e.target.value)}
                >
                  <option value="">Select Min</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Form.Col}>
                <Form.Control
                  as="select"
                  value={maxGroupStrength}
                  onChange={(e) => setMaxGroupStrength(e.target.value)}
                  required
                >
                  <option value="">Select Max</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button variant="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Card
        style={{
          fontFamily: "Poppins, sans-serif",
          maxWidth: "16em",
          display: "flex",
          wrap: "flex-wrap",
          border: 0,
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* <Card.Header className="text-primary">{className}</Card.Header> */}
        <Card.Body>
          <Card.Title
            style={{
              color: "#6759D1",
              font: "24px",
            }}
          >
            BSIT-Mor-Fall (2019-23)
          </Card.Title>
          <Card.Text
            style={{
              marginLeft: "2em",
              marginTop: "1em",
              font: "20px",
            }}
          >
            <p>Total Students: {totalStudents}</p>
            <p>Total Projects: {totalProjects}</p>
            <p>Total Supervisors: {totalSupervisors}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            justifyContent: "center",
            alignItems: "center",
            outline: "none",
            border: 0,
            //   margin: "1em",
            backgroundColor: "white",
            font: "24px",
            padding: "1em",
          }}
        >
          <Button
            style={{
              backgroundColor: "#464646",
              color: "white",
              marginLeft: "0.5em",
              borderRadius: 0,
            }}
            className="mr-2"
          >
            Delete
          </Button>
          <Button
            style={{
              backgroundColor: "#6759D1",
              marginLeft: "3.5em",
              borderRadius: 0,
            }}
          >
            Passed
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
