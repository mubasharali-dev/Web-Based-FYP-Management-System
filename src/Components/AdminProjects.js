import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

const AdminProjects = () => {
  const [loadedCount, setLoadedCount] = useState(10); // number of projects loaded so far

  const loadMoreProjects = () => {
    setLoadedCount((prevCount) => prevCount + 10); // increase loaded count by 10
  };

  return (
    <div>
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

    // OLD PROJECTS DATA
  );
};
// add more project data objects as needed
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
