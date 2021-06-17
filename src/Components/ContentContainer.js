import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import twostraw from "../assets/twostraw.svg";
import singlestraw from "../assets/singlestraw.svg";
import chess from "../assets/chess.svg";
import screens from "../assets/screens.svg";
import downloadicon from "../assets/downloadicon.png";
import "../Components/ContentContainer.scss";

function ContentContainer() {
  return (
    <>
      <Container>
        <Row>
          <Col md={8} className="justify-content-center">
            <div>
              <img src={twostraw} className="image" alt={"twostraw"} />
            </div>
          </Col>
          <Col md={4} className="justify-content-center">
            <div className="description">
              <h2 className="h2">
                Create an invite-only place where you belong
              </h2>
              <p className="text">
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ backgroundColor: "whitesmoke", backgroundSize: "cover" }}
      >
        <Row>
          <Col
            xs={12}
            sm={12}
            className="d-block d-md-none justify-content-center"
          >
            <div>
              <img src={singlestraw} className="image" alt={"singlestraw"} />
            </div>
          </Col>
          <Col md={4} className="justify-content-center">
            <div className="description">
              <h2 className="h2">Where hanging out is easy</h2>
              <p className="text">
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </p>
            </div>
          </Col>
          <Col md={8} className="d-none d-md-block justify-content-center">
            <div>
              <img src={singlestraw} className="image" alt={"singlestraw"} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={8} className="justify-content-center">
            <div>
              <img src={chess} className="image" alt={"chess"} />
            </div>
          </Col>
          <Col md={4} className="justify-content-center">
            <div className="description">
              <h2 className="h2">From few to a fandom</h2>
              <p className="text">
                Get any community running with moderation tools and custom
                member access. Give members special powers, set up private
                channels, and more.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ backgroundColor: "whitesmoke", backgroundSize: "cover" }}
      >
        <Row>
          <Col className="justify-content-center">
            <div className="description">
              <h2 className="h2">Reliable tech for staying close</h2>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: "0" }}>
          <Col className="justify-content-center">
            <div className="description">
              <p className="text">
                Low-latency voice and video feels like you’re in the same room.
                Wave hello over video, watch friends stream their games, or
                gather up and have a drawing session with screen share.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="justify-content-center">
            <div>
              <img className="image" src={screens} alt="screensimage" />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <div className="description">
              <h2 className="h2">Ready to start your journey?</h2>
            </div>
          </Col>
        </Row>
        <Row
          className="justify-content-center"
          style={{ margin: "0", marginBottom: "12px" }}
        >
          <Col>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "32px",
                  height: "64px",
                  width: "300px",
                }}
              >
                <img
                  src={downloadicon}
                  alt="downloadicon"
                  style={{ height: "16px", width: "16px", paddingRight: "3px" }}
                />
                Download for Windows
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContentContainer;
