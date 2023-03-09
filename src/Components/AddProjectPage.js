import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./addprojectpage.css";

function AddProjectPage() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);

  const handleClassSelect = (eventKey) => {
    setSelectedClass(eventKey);
  };

  const handleSupervisorSelect = (eventKey) => {
    setSelectedSupervisor(eventKey);
  };

  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleStudentSelect = (selectedStudent) => {
    if (selectedStudents.includes(selectedStudent)) {
      setSelectedStudents((prevSelectedStudents) =>
        prevSelectedStudents.filter((student) => student !== selectedStudent)
      );
    } else if (selectedStudents.length < 3) {
      setSelectedStudents((prevSelectedStudents) => [
        ...prevSelectedStudents,
        selectedStudent,
      ]);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center main-card"
      style={{
        margin: "5em 18em",
        outline: "none",
        border: "0",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
        maxWidth: "40.75em",
        maxHeight: "50em",
      }}
    >
      <Card style={{ outline: "0", border: "0" }}>
        <Card.Header className="d-flex justify-content-between heading ">
          <h4 className="main-heading">Add Project</h4>
          <Button
            variant="outline-secondary"
            style={{
              outline: "none",
              border: "none",
              color: "#6759D1",
              fontSize: "0.75em",
            }}
            className="ms-auto align-self-start"
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </Card.Header>
        <div className="select-class" style={{ display: "flex", gap: "10px" }}>
          <DropdownButton
            title={selectedClass ? selectedClass : "Select Class*"}
            onSelect={handleClassSelect}
            className="select-dropdown select-class"
            variant="transparent"
            required
          >
            <Dropdown.Item eventKey="BSIT-Fall-2019-23">
              BSIT-Fall-2019-23
            </Dropdown.Item>
            <Dropdown.Item eventKey="BSIT-Fall-2019-24">
              BSIT-Fall-2019-24
            </Dropdown.Item>
            <Dropdown.Item eventKey="BSIT-Fall-2019-25">
              BSIT-Fall-2019-25
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="select-supervisor">
          <DropdownButton
            title={
              selectedSupervisor ? selectedSupervisor : "Select Supervisor*"
            }
            onSelect={handleSupervisorSelect}
            className="select-dropdown"
            variant="transparent"
            required
          >
            <Dropdown.Item eventKey="Muhammad Nawaz">
              Muhammad Nawaz
            </Dropdown.Item>
            <Dropdown.Item eventKey="Hannan Bin Liaquat">
              Hannan Bin Liaquat
            </Dropdown.Item>
            <Dropdown.Item eventKey="Dr. AD">Dr. AD</Dropdown.Item>
          </DropdownButton>
        </div>
        {/* // SElection of students  */}

        <Dropdown
          multiple
          className="select-dropdown"
          style={{ width: "35em" }}
        >
          <Dropdown.Toggle variant="transparent" id="dropdown-students">
            {selectedStudents.length > 0
              ? `${selectedStudents.length} Students Selected`
              : "Select Students* - Min 1, Max 3"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>Select Students</Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Student 1")}
              active={selectedStudents.includes("Student 1")}
            >
              Student 1
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Student 2")}
              active={selectedStudents.includes("Student 2")}
            >
              Student 2
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Student 3")}
              active={selectedStudents.includes("Student 3")}
            >
              Student 3
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Student 4")}
              active={selectedStudents.includes("Student 4")}
            >
              Student 4
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Student 5")}
              active={selectedStudents.includes("Student 5")}
            >
              Student 5
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* // WRITE TITLE OF THE PROJECT  */}

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Write Title*"
            className="select-dropdown"
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
            // onBlur={(e) => (e.target.style = inputStyle)}
          />
        </Form.Group>
        {/* SELECT THE EXAMINER  */}
        <div
          className="select-supervisor"
          style={{ display: "flex", alignItems: "center" }}
        >
          <DropdownButton
            title={selectedSupervisor ? selectedSupervisor : "Select Examiner"}
            onSelect={handleSupervisorSelect}
            className="select-dropdown"
            variant="transparent"
            required
          >
            <Dropdown.Item eventKey="Muhammad Nawaz">
              Muhammad Nawaz
            </Dropdown.Item>
            <Dropdown.Item eventKey="Hannan Bin Liaquat">
              Hannan Bin Liaquat
            </Dropdown.Item>
            <Dropdown.Item eventKey="Dr. AD">Dr. AD</Dropdown.Item>
          </DropdownButton>
          <Button
            variant="primary"
            className="add-button"
            style={{ marginLeft: "0.5em" }}
          >
            Choose Automatically
          </Button>
        </div>

        {/* //FOOTER CODE FOR BUTTONS */}
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

export default AddProjectPage;
