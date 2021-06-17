import React from "react";
import styles from "../Components/CenterContainer.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import strawhero from "../assets/strawhero.svg";
import herosit from "../assets/herosit.svg";
import clouds from "../assets/clouds.svg";
import downloadicon from "../assets/downloadicon.png";

function CenterContainer() {
  return (
    <div className={styles.container_bg}>
      <div>
        <Container style={{ paddingTop: "150px" }} fluid>
          <Row className="justify-content-xs-start justify-content-lg-center">
            <Col xs lg={9}>
              <h1 className={styles.container_head}>Imagine a place...</h1>
            </Col>
          </Row>
          <Row className="justify-content-xs-start justify-content-lg-center">
            <Col xs lg={7}>
              <p className={styles.container_text}>
                ...where you can belong to a school club, a gaming group, or a
                worldwide art community. Where just you and a handful of friends
                can spend time together. A place that makes it easy to talk
                every day and hang out more often.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
              <Col lg={{span:3, offset:1}} className="d-none d-md-block">
                <Button style={{backgroundColor:"white", color:"black", borderRadius:"32px", height:"64px", width:"300px"}}>
                    <img src={downloadicon} alt='downloadicon' style={{height:"16px", width:"16px",paddingRight:"3px", marginTop:"6px"}} />
                    Download for Windows
                </Button>
              </Col>
              <Col className="d-block d-md-none">
                <Button style={{backgroundColor:"white", color:"black", borderRadius:"32px", height:"64px", width:"300px"}}>
                    <img src={downloadicon} alt='downloadicon' style={{height:"16px", width:"16px",paddingRight:"3px"}} />
                    Download for App Store
                </Button>
              </Col>
              <Col lg={{span:3, offset:1}} className="d-none d-md-block">
                <Button style={{backgroundColor:"black", color:"white", borderRadius:"32px", height:"64px", width:"300px",paddingRight:"3px", marginTop:"6px"}}>
                    Open Discord in your browser
                </Button>
              </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container style={{backgroundImage:`url(${clouds})`, width:"100%"}} fluid>
          <Row>
            <Col lg={4} className="d-xs-block d-sm-block d-md-none d-lg-block d-xl-block">
              <div>
                <img src={strawhero} alt="ajdh" style={{height:"80%", width:"80%"}} />
              </div>
            </Col>
            <Col lg={{span:4, offset:4}} className="d-xs-none d-sm-none d-md-block d-lg-block d-xl-block">
              <div className="justify-content-end">
                <img src={herosit} alt="ajdh" style={{height:"80%", width:"80%"}} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CenterContainer;
