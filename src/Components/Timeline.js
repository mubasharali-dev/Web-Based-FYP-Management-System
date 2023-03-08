import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import { Card, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import "./timeline.css";

function Timeline() {
  // USE STATE HOOK TO MANAGE THE DATA PICKER INDIVIDUALLY FOR EACH

  const [selectedDate, setSelectedDate] = useState(null);
  const [projectSubmissionDate, setProjectSubmissionDate] = useState(null);
  const [projectDefence, setProjectDefence] = useState(null);
  const [deliverableOne, setDeliverableOne] = useState(null);
  const [deliverableOneEvaluation, setDeliverableOneEvaluation] =
    useState(null);
  const [deliverableTwo, setDeliverableTwo] = useState(null);
  const [deliverableTwoEvaluation, setDeliverableTwoEvaluation] =
    useState(null);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card
        style={{
          margin: "2em",
          outline: "none",
          border: "0",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
          maxWidth: "62.75em",
          maxHeight: "50em",
        }}
      >
        <Card.Header className="d-flex justify-content-between heading">
          <h4 className="main-heading">Update Deadlines and Timeline</h4>
          <button className="btn btn-link">
            <i className="bi bi-x-lg"></i>
          </button>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <div className="d-flex align-items-center">
                <Form.Label className="title datepicker-title">
                  Project Title:
                </Form.Label>
                <div
                  className="date-picker-container"
                  style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)" }}
                >
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Pick Date"
                    className="form-control datepicker-project"
                  />
                  <i className="bi bi-calendar mx-2"></i>
                </div>
              </div>
            </Form.Group>
            <Form.Group>
              <div className="d-flex align-items-center">
                <Form.Label className="title datepicker-title">
                  Project Submission:
                </Form.Label>
                <div
                  className="date-picker-container"
                  style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)" }}
                >
                  <DatePicker
                    selected={projectSubmissionDate}
                    onChange={(date) => setProjectSubmissionDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Pick Date"
                    className="form-control datepicker-project"
                  />
                  <i className="bi bi-calendar mx-2"></i>
                </div>
              </div>
            </Form.Group>
            <Form.Group>
              <div className="d-flex align-items-center">
                <Form.Label className="title datepicker-title">
                  Project Defence:
                </Form.Label>
                <div
                  className="date-picker-container"
                  style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)" }}
                >
                  <DatePicker
                    selected={projectDefence}
                    onChange={(date) => setProjectDefence(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Pick Date"
                    className="form-control datepicker-project"
                  />
                  <i className="bi bi-calendar mx-2"></i>
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className="d-flex align-items-center">
                <Form.Label className="title datepicker-title">
                  Deliverable 1:
                </Form.Label>
                <div
                  className="date-picker-container"
                  style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)" }}
                >
                  <DatePicker
                    selected={deliverableOne}
                    onChange={(date) => setDeliverableOne(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Pick Date"
                    className="form-control datepicker-project"
                  />
                  <i className="bi bi-calendar mx-2"></i>
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className="d-flex align-items-center">
                <Form.Label className="title datepicker-title">
                  Deliverable 1 Evaluation:
                </Form.Label>
                <div
                  className="date-picker-container"
                  style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)" }}
                >
                  <DatePicker
                    selected={deliverableOneEvaluation}
                    onChange={(date) => setDeliverableOneEvaluation(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Pick Date"
                    className="form-control datepicker-project"
                  />
                  <i className="bi bi-calendar mx-2"></i>
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className="d-flex align-items-center">
                <Form.Label className="title datepicker-title">
                  Deliverable 2:
                </Form.Label>
                <div
                  className="date-picker-container"
                  style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)" }}
                >
                  <DatePicker
                    selected={deliverableTwo}
                    onChange={(date) => setDeliverableTwo(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Pick Date"
                    className="form-control datepicker-project"
                  />
                  <i className="bi bi-calendar mx-2"></i>
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className="d-flex align-items-center">
                <Form.Label className="title datepicker-title">
                  Deliverable 2 Evaluation:
                </Form.Label>
                <div
                  className="date-picker-container"
                  style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)" }}
                >
                  <DatePicker
                    selected={deliverableTwoEvaluation}
                    onChange={(date) => setDeliverableTwoEvaluation(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Pick Date"
                    className="form-control datepicker-project"
                  />
                  <i className="bi bi-calendar mx-2"></i>
                </div>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
        <div className="footer-heading">
          <Card.Footer
            className="d-flex justify-content-end "
            style={{ backgroundColor: "transparent", borderTop: "0" }}
          >
            <Button variant="secondary" className="me-2 cancel-button">
              Cancel
            </Button>
            <Button variant="primary" className="add-button">
              Add
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
}

export default Timeline;
