import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminClasses from "./Components/AdminClasses";
import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
// import AdminModal from "./Components/AdminModal";
import AdminProjects from "./Components/AdminProjects";
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
      <AdminProjects />
    </Container>
  );
}

export default App;
