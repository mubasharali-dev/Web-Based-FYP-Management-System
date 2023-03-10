import { Dropdown, DropdownButton, Card, Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./addexaminer.css";

function AddExaminer() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);
  const [selectedEmpId, setSelectedEmpId] = useState(null);

  const handleClassSelect = (eventKey) => {
    setSelectedClass(eventKey);
  };

  const handleSupervisorSelect = (eventKey) => {
    setSelectedSupervisor(eventKey);
  };

  const handleEmpId = (eventKey) => {
    setSelectedEmpId(eventKey);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center main-card"
      style={{
        margin: "8em 28em",
        outline: "none",
        border: "0",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
        maxWidth: "30.75em",
        maxHeight: "50em",
      }}
    >
      <Card style={{ outline: "0", border: "0" }}>
        <Card.Header className="d-flex justify-content-between heading ">
          <h4 className="main-heading">Add Examiner</h4>
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
            title={selectedSupervisor ? selectedSupervisor : "Select Name*"}
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

        {/* SELECTING THE EMPLOYEE ID  */}
        <div className="select-empid">
          <DropdownButton
            title={selectedEmpId ? selectedEmpId : "Select Emp ID*"}
            onSelect={handleEmpId}
            className="select-dropdown"
            variant="transparent"
            required
          >
            <Dropdown.Item eventKey="19-UE-00670">19-UE-00670</Dropdown.Item>
            <Dropdown.Item eventKey="19-UE-00671">19-UE-00671</Dropdown.Item>
            <Dropdown.Item eventKey="19-UE-00672">19-UE-00672</Dropdown.Item>
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

export default AddExaminer;
