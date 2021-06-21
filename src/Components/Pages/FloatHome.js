import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import floatlogo from "./floatlogo.png";
import hireimg from "./hireimg.png";
import styles from "./FloatHome.module.css";
import centerimg from "./centerimg.png";
import team from "./team.png";
import capaimg from "./capaimg.png";
import pl from "./pl.png";
import lastimg from "./lastimg.png";
import b1 from "./bimgs/b1.png";
import b2 from "./bimgs/b2.png";
import b3 from "./bimgs/b3.png";
import b4 from "./bimgs/b4.png";
import b5 from "./bimgs/b5.png";
import b6 from "./bimgs/b6.png";
import l1 from "./bimgs/l1.png";
import l2 from "./bimgs/l2.png";
import l3 from "./bimgs/l3.png";
import l4 from "./bimgs/l4.png";
import part1 from "./bimgs/part1.png";
import part2 from "./bimgs/part2.png";
import part3 from "./bimgs/part3.png";
import si1 from "./bimgs/si1.png";
import si2 from "./bimgs/si2.png";
import si3 from "./bimgs/si3.png";
import buzz from "./bimgs/buzz.png";
import bird from "./bimgs/bird.png";
function FloatHome() {
  return (
    <div>
      <Navbar
        expand="lg"
        variant="light"
        sticky="top"
        style={{
          backdropFilter: "blur(20px)",
          backgroundColor: "hsla(0,0%,100%,.5)",
        }}
      >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={floatlogo}
            width="110px"
            height="40px"
            className="d-inline-block align-top"
          />
          <img
            alt=""
            src={hireimg}
            width="110px"
            height="40px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            border: "1px solid",
            backgroundColor: "transparent",
            color: "white",
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className={styles.nav_link_item}>
              How it works
            </Nav.Link>
            <Nav.Link href="#link" className={styles.nav_link_item}>
              Who uses Float?
            </Nav.Link>
            <Nav.Link href="#link" className={styles.nav_link_item}>
              Integrations
            </Nav.Link>
            <Nav.Link href="#link" className={styles.nav_link_item}>
              Pricing
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#link" className={styles.nav_link_item}>
              Login
            </Nav.Link>
            <Button>Try for free</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <section>
          <div className={styles.centercontainer}>
            <h1 className={styles.centerhead}>
              The resource management platform to plan your team's best work
            </h1>
            <p className={styles.centertext}>
              Plan, schedule, and track your projects in one place
            </p>
            <div>
              <Button className={styles.centerbutton}>Try for free</Button>
            </div>
            <div className={styles.imgholder}>
              <img alt="" src={centerimg} />
            </div>
          </div>
        </section>
        <Container>
          <Row>
            <Col xs={12}>
              <img alt="" src={team} className={styles.teamimg} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <div>
                <img src={capaimg} alt="" />
                <h3 className={styles.parahead}>
                  Manage your team's availability on autopilot
                </h3>
                <p className={styles.paratext1}>
                  Schedule time off, set custom work hours, and import public
                  holidays. Connect directly with your calendar tools.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <div>
                <img src={pl} alt="" />
                <h3 className={styles.parahead}>
                  Create project timelines and plan resources with precision
                </h3>
                <p className={styles.paratext1}>
                  Add project phases and set milestones. Link tasks to group
                  project dependencies and shift timelines in a click.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <div>
                <img src={lastimg} alt="" />
                <h3 className={styles.parahead}>
                  Schedule tasks and make updates in real time
                </h3>
                <p className={styles.paratext1}>
                  Create and assign tasks in seconds. Make changes fast with
                  easy-to-use tools and editing shortcuts.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div>
                <h2 className={styles.parahead1}>
                  TRUSTED BY TEAMS OF 5 To 5,000+
                </h2>
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <div>
                <img src={b1} alt="" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <div>
                <img src={b2} alt="" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <div>
                <img src={b3} alt="" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <div>
                <img src={b4} alt="" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <div>
                <img src={b5} alt="" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <div>
                <img src={b6} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div>
                <h2 className={styles.parahead1}>
                  FOR RESOURCE MANAGEMENT, ACROSS ALL INDUSTRIES
                </h2>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3} xl={3}>
              <div className={styles.logocont}>
                <h3 className={styles.parahead}>Agencies</h3>
                <img src={l1} alt="" />
                <p className={styles.paratext2}>Resource forecasting</p>
                <p className={styles.paratext2}>Track budgets and billables</p>
                <p className={styles.paratext2}>Reporting and timesheets</p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3} xl={3}>
              <div className={styles.logocont}>
                <h3 className={styles.parahead}>Consultancies</h3>
                <img src={l2} alt="" />
                <p className={styles.paratext2}>Resource planning</p>
                <p className={styles.paratext2}>Create project timelines</p>
                <p className={styles.paratext2}>Budget management</p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3} xl={3}>
              <div className={styles.logocont}>
                <h3
                  style={{ whiteSpace: "nowrap" }}
                  className={styles.parahead}
                >
                  Architecture firms
                </h3>
                <img src={l3} alt="" />
                <p className={styles.paratext2}>Add project phases</p>
                <p className={styles.paratext2}>Shift timelines</p>
                <p className={styles.paratext2}>Budget tracking</p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3} xl={3}>
              <div className={styles.logocont}>
                <h3 className={styles.parahead}>IT services</h3>
                <img src={l4} alt="" />
                <p className={styles.paratext2}>Plan complex projects</p>
                <p className={styles.paratext2}>Visualize resource capacity</p>
                <p className={styles.paratext2}>Project reports</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div>
                <h3 className={styles.parahead2}>Forecasting and Reports</h3>
                <h4 className={styles.parahead}>
                  Compare project estimates vs actuals
                </h4>
                <p className={styles.paratext3}>
                  Set a budget to forecast your resource capacity and
                  strategically plan project work. Monitor progress in real time
                  and compare your estimated hours with the actual time taken.
                  Team members can log or adjust their hours in a click, with
                  pre-filled timesheets.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div>
                <img src={part1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div>
                <h3 className={styles.bluehead}>Direct integrations</h3>
                <h4 className={styles.parahead}>
                  Connect with existing workflows
                </h4>
                <div>
                  <img src={si1} alt="" />
                  <h2 className={styles.bluetext}>Project management</h2>
                  <p className={styles.parablue}>
                    Sync your favorite project management tools to start
                    scheduling tasks to resources.
                  </p>
                </div>
                <div>
                  <img src={si2} alt="" />
                  <h2 className={styles.bluetext}>Calendar sync</h2>
                  <p className={styles.parablue}>
                    Keep your resource schedule up to date with calendar
                    integrations.
                  </p>
                </div>
                <div>
                  <img src={si3} alt="" />
                  <h2 className={styles.bluetext}>Slack updates</h2>
                  <p className={styles.parablue}>
                    Send your team their work schedule and time tracking
                    reminders directly in Slack.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div>
                <img src={part2} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div>
                <h3 className={styles.mobhead}>Mobile Apps</h3>
                <h4 className={styles.parahead}>
                  Schedule resources and log time, from anywhere
                </h4>
                <img src={buzz} alt="" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div>
                <img src={part3} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={styles.btncont}>
                <h2 className={styles.foothead}>
                  Make the most of your team's time
                </h2>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={styles.btncont}>
                <p className={styles.foottext}>30 day trial. No credit card.</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-2 justify-content-center">
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <div className={styles.finalbtn}>
                <Button>Try for free</Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={styles.btncont}>
                <img src={bird} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={styles.footbg} fluid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div>
              <ul>
                <p>
                  <strong>Product</strong>
                </p>
                <li>API Documentation</li>
                <li>System Status</li>
                <li>What's new</li>
                <li>Download the iOS app</li>
                <li>Download android app</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div>
              <ul>
                <p>
                  <strong>Company</strong>
                </p>
                <li>About us</li>
                <li>We're hiring</li>
                <li>Blog</li>
                <li>Agency Founders</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div>
              <ul>
                <p>
                  <strong>Resources</strong>
                </p>
                <li>Help Center</li>
                <li>Contact us</li>
                <li>Quick Start Guide</li>
                <li>Book a demo</li>
                <li>Security and Privacy</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div>
              <ul>
                <p>
                  <strong>Legal</strong>
                </p>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Data Processing Agreement</li>
                <li>Responsible Disclosure Policy</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <ul>
                <p>Float 2021. All rights reserved</p>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FloatHome;
