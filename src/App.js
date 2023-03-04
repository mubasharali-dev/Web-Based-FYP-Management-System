import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminClasses from "./Components/AdminClasses";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [classDetails, setClassDetails] = useState({
    // className: "Class A",
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
      <Row>
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
      </Row>
    </Container>
  );
}

export default App;
