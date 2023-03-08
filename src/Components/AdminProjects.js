import React, { useState } from "react";
import { Table, Button, InputGroup } from "react-bootstrap";
import { Navbar, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AdminProjects = () => {
  const [loadedCount, setLoadedCount] = useState(10); // number of projects loaded so far

  const loadMoreProjects = () => {
    setLoadedCount((prevCount) => prevCount + 10); // increase loaded count by 10
  };

  return (
    <div
      style={{
        fontFamily: "Poppins",
      }}
    >
      <Navbar bg="white" expand="md">
        {/* Navbar.Brand component displaying the text "Active Projects" in bold
        purple font */}
        <Navbar.Brand
          style={{ fontSize: "1.5em", color: "#6759D1", fontWeight: "bold" }}
        >
          <div
            style={{
              marginRight: "0.5em",
              fontSize: "1.5em",
              height: "1em",
              color: "#464646",
            }}
          >
            &#8592;
          </div>{" "}
          Active Projects
        </Navbar.Brand>

        {/* Navbar.Toggle component displaying an icon that toggles the second
        Navbar.Collapse component */}
        <Navbar.Toggle aria-controls="second-navbar-nav" />
        {/* Navbar.Collapse component that contains two elements: a Button
        component and a Form component */}
        <Navbar.Collapse
          id="second-navbar-nav"
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* Button component labeled "Add Project" with purple background and
          white text, located on the right side of the navbar */}
          <Button
            variant="primary"
            className="ml-md-2 mt-3 mt-md-0 border-0"
            style={{
              borderRadius: "0",
              outline: 0,
              backgroundColor: "#6759D1",
              marginRight: "5em",
              marginTop: "50em",
            }}
          >
            Add Project
          </Button>
          {/* Form component containing an input field and a button, located on
          the left side of the navbar */}
          <Form
            inline="true"
            className="ml-auto"
            style={{
              borderRadius: "none",
              width: "20em",
              marginTop: "1em",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* InputGroup containing a FormControl component that allows the
            user to search for a project with name or ID */}
            <InputGroup>
              <FormControl
                className="outline-0 mr-sm-2 border-0 "
                style={{ boxShadow: "none", height: "3em" }}
                type="text"
                placeholder="Search Project With Name or ID"
              />
              {/* Button component displaying a search icon from FontAwesome when
              clicked */}
              <Button
                variant="outline-secondary"
                style={{ outline: "none", border: "none", color: "#6759D1" }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* This is a React component that renders a table with project data */}
      <Table hover>
        <thead>
          <tr
            style={{
              color: "#6759D1",
            }}
          >
            <th>Project ID</th>
            <th>Project Title</th>
            <th>Members</th>
            <th>Supervisor</th>
            <th>Class</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projectData.slice(0, loadedCount).map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.title}</td>
              <td>{project.members}</td>
              <td>{project.supervisor}</td>
              <td>{project.class}</td>
              <td>
                <Button
                  variant="primary"
                  style={{
                    borderRadius: 0,
                    backgroundColor: "#6759D1",
                    color: "white",
                    outline: 0,
                  }}
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div
        className="text-right"
        style={{
          position: "relative",
          bottom: "0",
          right: "0",
          marginRight: "1.5em",
          marginBottom: "1.5em",
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#464646",
          }}
          onClick={loadMoreProjects}
        >
          {loadedCount} of {projectData.length}
          <span
            style={{
              color: "#6759D1",
            }}
          >
            {" "}
            Load More
          </span>
        </a>
      </div>
      <h1
        style={{
          color: "#6759D1",
          fontSize: "1.75em",
          marginTop: "1em",
        }}
      >
        Old Projects{" "}
      </h1>
      {/* This is a React component that renders a table with project data of old
      projects */}
      <Table hover>
        <thead>
          <tr
            style={{
              color: "#6759D1",
            }}
          >
            <th>Project ID</th>
            <th>Project Title</th>
            <th>Members</th>
            <th>Supervisor</th>
            <th>Class</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projectData.slice(0, loadedCount).map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.title}</td>
              <td>{project.members}</td>
              <td>{project.supervisor}</td>
              <td>{project.class}</td>
              <td>
                <Button
                  variant="primary"
                  style={{
                    borderRadius: 0,
                    backgroundColor: "#6759D1",
                    color: "white",
                    outline: 0,
                  }}
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div
        className="text-right"
        style={{
          position: "relative",
          bottom: "0",
          right: "0",
          marginRight: "1.5em",
          marginBottom: "1.5em",
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#464646",
          }}
          onClick={loadMoreProjects}
        >
          {loadedCount} of {projectData.length}
          <span
            style={{
              color: "#6759D1",
            }}
          >
            {" "}
            Load More
          </span>
        </a>
      </div>
    </div>
  );
};
// add more project data objects as needed
// Projects data are stored in an array.
const projectData = [
  {
    id: "IT-22-01",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },
  {
    id: "IT-22-02",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },

  {
    id: "IT-22-03",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },

  {
    id: "IT-22-04",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },

  {
    id: "IT-22-05",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },

  {
    id: "IT-22-06",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },

  {
    id: "IT-22-07",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },

  {
    id: "IT-22-08",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },

  {
    id: "IT-22-09",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },

  {
    id: "IT-22-10",
    title: "Web-Based Fyp Management System",
    members: "Jamshaid, Mubashar, Ahtesham",
    supervisor: "Muhammad Nawaz",
    class: "BSIT-Mor-Fall (2019-23)",
  },
];

export default AdminProjects;
