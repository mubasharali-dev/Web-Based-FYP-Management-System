import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./addclass.css";

function AddClass() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedShift, setSelectedShift] = useState(null);
  const [selectedMin, setSelectedMin] = useState(null);
  const [selectedMax, setSelectedMax] = useState(null);

  const handleClassSelect = (eventKey) => {
    setSelectedClass(eventKey);
  };

  const handleShiftSelect = (eventKey) => {
    setSelectedShift(eventKey);
  };

  const handleMinChange = (eventKey) => {
    setSelectedMin(eventKey);
  };

  const handleMaxChange = (eventKey) => {
    setSelectedMax(eventKey);
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
        <Card.Header className="d-flex justify-content-between heading">
          <h4 className="main-heading">Add Class</h4>
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
            title={selectedClass ? selectedClass : `Select Program`}
            onSelect={handleClassSelect}
            className="select-dropdown select-class steric-required"
            variant="transparent"
            required
          >
            <Dropdown.Item eventKey="Information Technology">
              Information Technology
            </Dropdown.Item>
            <Dropdown.Item eventKey="Computer Science">
              Computer Science
            </Dropdown.Item>
            <Dropdown.Item eventKey="Software Engineering">
              Software Engineering
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="select-supervisor">
          <DropdownButton
            title={selectedShift ? selectedShift : "Select Shift*"}
            onSelect={handleShiftSelect}
            className="select-dropdown steric-required"
            variant="transparent"
            required
          >
            <Dropdown.Item eventKey="Morning">Morning</Dropdown.Item>
            <Dropdown.Item eventKey="Evening">Evening</Dropdown.Item>
          </DropdownButton>
        </div>
        {/* // SElection of Supervisors  */}
        <Dropdown
          multiple
          className="select-dropdown"
          style={{ width: "35em" }}
        >
          <Dropdown.Toggle variant="transparent" id="dropdown-students">
            {selectedStudents.length > 0
              ? `${selectedStudents.length} Supervisors Selected`
              : "Select Supervisors"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>Select Supervisors</Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Akram Mujahid")}
              active={selectedStudents.includes("Akram Mujahid")}
            >
              Akram Mujahid
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Hannan Bin Liaquat")}
              active={selectedStudents.includes("Hannan Bin Liaquat")}
            >
              Hannan Bin Liaquat
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Faiza Tariq")}
              active={selectedStudents.includes("Faiza Tariq")}
            >
              Faiza Tariq
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Dr. Aftab Akram")}
              active={selectedStudents.includes("Dr. Aftab Akram")}
            >
              Dr. Aftab Akram
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => handleStudentSelect("Dr. Allah Ditta")}
              active={selectedStudents.includes("Dr. Allah Ditta")}
            >
              Dr. Allah Ditta
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* SELECT THE EXAMINER  */}
        <h5 className="choose-group-strength">
          Choose Group Strength<span className="steric">*</span>
        </h5>
        <div
          className="select-supervisor"
          style={{ display: "flex", alignItems: "center" }}
        >
          <DropdownButton
            title={selectedMin ? selectedMin : "Select Min"}
            onSelect={handleMinChange}
            className="select-dropdown"
            variant="transparent"
            required
          >
            <Dropdown.Item eventKey="1">1</Dropdown.Item>
            <Dropdown.Item eventKey="2">2</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            title={selectedMax ? selectedMax : "Select Max"}
            onSelect={handleMaxChange}
            className="select-dropdown"
            variant="transparent"
            required
          >
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
            <Dropdown.Item eventKey="4">4</Dropdown.Item>
          </DropdownButton>
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

export default AddClass;
