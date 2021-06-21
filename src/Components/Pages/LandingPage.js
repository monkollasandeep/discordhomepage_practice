import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
//import Button from "react-bootstrap/Button";
import { Icon } from "semantic-ui-react";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../Pages/LandingPage.module.css";

function LandingPage() {
  return (
    <main className={styles.main}>
      <header>
        <Navbar bg="primary" expand="lg">
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <Icon className="search" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeholder="1 Person"
                aria-label="1 Person"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <NavDropdown
            id="basic-nav-dropdown"
            variant="primary"
            style={{ backgroundColor: "#5cfae8", borderRadius: "4px" }}
          >
            <NavDropdown.Item href="#action/3.1">
              Add project P
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Add person E</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                href="#home"
                className={styles.navItem}
                style={{ color: "white" }}
              >
                SCHEDULE
              </Nav.Link>
              <Nav.Link
                href="#link"
                className={styles.navItem}
                style={{ color: "white" }}
              >
                LOG TIME
              </Nav.Link>
              <Nav.Link
                href="#link"
                className={styles.navItem}
                style={{ color: "white" }}
              >
                PEOPLE
              </Nav.Link>
              <Nav.Link
                href="#link"
                className={styles.navItem}
                style={{ color: "white" }}
              >
                PROJECTS
              </Nav.Link>
              <Nav.Link
                href="#link"
                className={styles.navItem}
                style={{ color: "white" }}
              >
                REPORTS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="mr-auto d-flex flex-row justify-content-center">
            <Icon className="help circle" size="large" />
            <Icon className="bell" size="large" />
            <Icon className="registered" size="big" />
          </div>
        </Navbar>
      </header>
      <section>
        <div className={styles.sidebar}>
          <div className={styles.peoplebar}>

          </div>
          <div className={styles.namebar}>

          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
