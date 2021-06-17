import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import flag from "../assets/flag.png";
import dislogo from "../assets/discordlogo2.png";
import { Icon } from "semantic-ui-react";

function FooterContainer() {
  return (
    <Container style={{ backgroundSize: "cover", backgroundColor: "black" , paddingTop:"30px", paddingBottom:"30px"}}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <div>
            <h1 style={{ fontWeight: "800", color: "blue" }}>
              IMAGINE A PLACE
            </h1>
            <div style={{ display: "flex" }}>
              <img
                src={flag}
                alt={"flag"}
                style={{ height: "25px", width: "55px" }}
              />
              <p style={{ paddingLeft: "6px", color: "white" }}>English,USA</p>
            </div>
            <div style={{ display: "flex",marginTop:"6px", marginBottom:"12px" }}>
              <Icon name="twitter" color="blue" />
              <Icon name="instagram" color="blue" />
              <Icon name="facebook" color="blue" />
              <Icon name="youtube" color="blue" />
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <div style={{color:"white"}}>
            <ul style={{listStyleType:"none"}}>
              <p style={{color:"blue"}}>Product</p>
              <li>Download</li>
              <li>Nitro</li>
              <li>Status</li>
            </ul>
          </div>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <div style={{color:"white"}}>
            <ul style={{listStyleType:"none"}}>
              <p style={{color:"blue"}}>Company</p>
              <li>About</li>
              <li>Jobs</li>
              <li>Branding</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </Col>
        <Col xs={6} sm={6} md={{span:3, offset:6}} lg={2} xl={2}>
          <div style={{color:"white"}}>
            <ul style={{listStyleType:"none"}}>
              <p style={{color:"blue"}}>Resources</p>
              <li>College</li>
              <li>Support</li>
              <li>Safety</li>
              <li>Blog</li>
              <li>Feedback</li>
              <li>Developers</li>
              <li>Streamkit</li>
            </ul>
          </div>
        </Col>
        <Col xs={6} sm={6} md={{span:3, offset:0}} lg={2} xl={2}>
          <div style={{color:"white"}}>
            <ul style={{listStyleType:"none"}}>
              <p style={{color:"blue"}}>Polices</p>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Guidelines</li>
              <li>Acknowledgements</li>
              <li>Licenses</li>
              <li>Moderation</li>
            </ul>
          </div>
        </Col>
      </Row>
      <hr style={{ border: "1px solid blue" }} />
      <Row style={{ margin: "0" }} className="d-flex flex-row">
        <Col className="justify-content-start">
          <div style={{ fontWeight: "900", color: "white" }}>
            <img
              alt=""
              src={dislogo}
              style={{ width: "20px", height: "20px" }}
            />{" "}
            Discord
          </div>
        </Col>
        <Col className="justify-content-end">
          <div className="d-flex flex-row justify-content-end">
            <Button
              style={{
                color: "white",
                borderRadius: "20px",
                height: "32px",
                width: "92px",
                textAlign: "center",
                marginBottom: "12px",
              }}
            >
              Sign Up
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterContainer;
