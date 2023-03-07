import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./classesStyles.css";

export default function AdminClasses({
  totalStudents,
  totalProjects,
  totalSupervisors,
}) {
  return (
    <>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <CardGroup
        style={{
          padding: "1em",
          margin: "1em",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            margin: "30px",
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
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "regular",
            fontSize: "20px",
            textAlign: "left",
            marginTop: "10em",
            color: "#464646",
          }}
        ></span>

        <Card
          style={{
            fontFamily: "Poppins, sans-serif",
            maxWidth: "16em",
            display: "flex",
            wrap: "flex-wrap",
            border: 0,
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
            margin: "1em",
          }}
        >
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
                marginLeft: "2em",
                borderRadius: 0,
              }}
            >
              Passed
            </Button>
          </Card.Footer>
        </Card>

        <Card
          style={{
            fontFamily: "Poppins, sans-serif",
            maxWidth: "16em",
            display: "flex",
            wrap: "flex-wrap",
            border: 0,
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
            margin: "1em",
          }}
        >
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
                marginLeft: "2em",
                borderRadius: 0,
              }}
            >
              Passed
            </Button>
          </Card.Footer>
        </Card>

        <Card
          style={{
            fontFamily: "Poppins, sans-serif",
            maxWidth: "16em",
            display: "flex",
            wrap: "flex-wrap",
            border: 0,
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
            margin: "1em",
          }}
        >
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
                marginLeft: "2em",
                borderRadius: 0,
              }}
            >
              Passed
            </Button>
          </Card.Footer>
        </Card>

        <Card
          style={{
            fontFamily: "Poppins, sans-serif",
            maxWidth: "16em",
            display: "flex",
            wrap: "flex-wrap",
            border: 0,
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
            margin: "1em",
          }}
        >
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
                marginLeft: "2em",
                borderRadius: 0,
              }}
            >
              Passed
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
