import React, { useState } from "react";
import {
  Card,
  CardGroup,
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import teacher1 from "./teacher1.jpg";

const EmployeeCard = () => {
  const [loadedCount, setLoadedCount] = useState(10); // number of projects loaded so far

  const loadMoreProjects = () => {
    setLoadedCount((prevCount) => prevCount + 10); // increase loaded count by 10
  };

  return (
    <div>
      {/* NAVBAR FOR THE LIST OF TEACHERS */}

      <Navbar bg="white" expand="md">
        {/* Navbar.Brand component displaying the text "Active Projects" in bold
        purple font */}
        <Navbar.Brand
          style={{ fontSize: "1.5em", color: "#6759D1", fontWeight: "bold" }}
        >
          <div
            style={{
              cursor: "pointer",
              marginRight: "0.5em",
              fontSize: "1.5em",
              height: "1em",
              color: "#464646",
            }}
          >
            &#8592;
          </div>{" "}
          All Teachers
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
                placeholder="Search Teacher"
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

      {/* LIST OF TEACHERS  */}
      <CardGroup
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontFamily: "Poppins",
        }}
      >
        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>

        {/* SECOND CARD  */}

        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>

        {/* THIRD CARD */}

        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>

        {/* FOURTH CARD OF TEACHER  */}

        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>
      </CardGroup>

      {/* FIFTH CARD  */}

      <CardGroup
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontFamily: "Poppins",
          //   margin: "1.125em",
        }}
      >
        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>

        {/* SECOND CARD  */}

        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>

        {/* THIRD CARD */}

        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>

        {/* FOURTH CARD OF TEACHER  */}

        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>
      </CardGroup>

      {/* NINTH CARD FOR THE THIRD ROW OF TEACHERS  */}

      <CardGroup
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontFamily: "Poppins",
          //   margin: "1.125em",
        }}
      >
        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>

        {/* SECOND CARD  */}

        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>

        {/* THIRD CARD */}

        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>

        {/* FOURTH CARD OF TEACHER  */}

        <Card
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "6em 2.625em",
            outline: "0",
            borderRadius: "0",
            border: 0,
            maxWidth: "15.5em",
            maxHeight: "15.5em",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src={teacher1}
              style={{
                borderRadius: "50%",
                width: "108px",
                height: "108px",
                position: "absolute",
                top: "-5em",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.2em",
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.25em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              >
                Muhammad Nawaz
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "1em" }}
                className="mb-2 text-muted"
              >
                Ass. Professor
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "1.25em" }}>
                Emp ID:{" "}
                <span style={{ color: "#6759D1" }}> 2019-UE-00670 </span>
              </Card.Text>
            </div>
          </div>
        </Card>
      </CardGroup>

      {/* LOAD THE MORE TEACHERS FROM THE DATABASE  */}

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
          {loadedCount} of {"12"}
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

export default EmployeeCard;
