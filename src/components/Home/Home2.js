import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
              UM POUCO SOBRE O <span className="purple"> DESENVOLVEDOR </span>
            </h1>
            <p className="home-about-body">
              TEXTO TEXTO TEXTOTEXTO TEXTO TEXTOTEXTO TEXTO TEXTOTEXTO TEXTO TEXTOTEXTO TEXTO TEXTOTEXTO TEXTO TEXTOTEXTO TEXTO TEXTOTEXTO TEXTO TEXTOTEXTO TEXTO TEXTO
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Alguma duvida?</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Texto:</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;
