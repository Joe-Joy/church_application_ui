import React, { Component } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import MainLogo from "../Images/MainLogo.png";
import rosary_logo from "../Images/rosary_logo.jpg";
import "./Headers.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Container fluid>
            <Row className="menu">
              <Col md={3} className="church_logo">
                <img src={rosary_logo} alt="mainlogo" />
              </Col>
              <Col md={9}>
                <ul className="menu_items">
                  <li>
                    <a href="/UserRegistration">User Registration</a>
                    <a href="/seatallocation">Seat Allocation</a>
                    <a href="/updates">Updates</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <div>
          <Container>
            <Row className="home_page_content">
              <Col lg={6}>
                <img src={MainLogo} alt="home page logo" />
              </Col>

              <Col lg={6} className="welcome_message">
                <h1>WELCOME TO ROSARY </h1>
                <h1>CHURCH SITE!</h1>
              </Col>
            </Row>
          </Container>
        </div>
        <footer className="footer">
            <h4>Developed by ASHLI</h4>
        </footer>
      </div>
      
    );
  }
}
