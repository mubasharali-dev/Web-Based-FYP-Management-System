import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminClasses from "./Components/AdminClasses";
import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
// import AdminModal from "./Components/AdminModal";
import AdminProjects from "./Components/AdminProjects";
import AdminTeachers from "./Components/AdminTeachers";
import Timeline from "./Components/Timeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddProjectPage from "./Components/AddProjectPage";
import AddExaminer from "./Components/AddExaminer";
import AddSupervisor from "./Components/AddSupervisor";
import AddClass from "./Components/AddClass";

function App() {
  const [classDetails, setClassDetails] = useState({
    totalStudents: 47,
    totalProjects: 17,
    totalSupervisors: 4,
  });

  const handleDelete = () => {
    // handle delete functionality here
  };

  const handlePass = () => {
    // handle passed functionality here
  };

  return (
    <Container>
      {/* <Row>
        <Col>
          <AdminClasses
            className={classDetails.className}
            totalStudents={classDetails.totalStudents}
            totalProjects={classDetails.totalProjects}
            totalSupervisors={classDetails.totalSupervisors}
            onDelete={handleDelete}
            onPass={handlePass}
          />
        </Col>
      </Row> */}
      {/* <AdminProjects /> */}
      {/* <AdminTeachers /> */}
      <Timeline />
      {/* <AddProjectPage /> */}
      {/* <AddExaminer /> */}
      {/* <AddSupervisor /> */}
      {/* <AddClass /> */}
    </Container>
  );
}

export default App;
