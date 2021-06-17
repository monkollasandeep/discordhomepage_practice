import React from "react";
// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./NavBar.module.css";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import dislogo from "../assets/discordlogo2.png";

function NavBar() {
  return (
    <header>
      <Navbar className={styles.backg} expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={dislogo}
            width="30px"
            height="30px"
            className="d-inline-block align-top"
          />{" "}
          Discord
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:"1px solid", backgroundColor:"transparent", color:"white"}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className={styles.nav_link_item}>
              Download
            </Nav.Link>
            <Nav.Link href="#link" className={styles.nav_link_item}>
              Nitro
            </Nav.Link>
            <Nav.Link href="#link" className={styles.nav_link_item}>
              Saftey
            </Nav.Link>
            <Nav.Link href="#link" className={styles.nav_link_item}>
              Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className={styles.loginbtn_homepage}>Login</Button>
      </Navbar>
    </header>
  );
}

export default NavBar;
