import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

function Experience() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                {/* <Particle /> */}
                <Container className="home-content">
                    <div className="Experiences">
                        <h1 className="heading-name">Experiências</h1>
                        <Row>
                            <Col md={7} className="home-header">
                                <h1 className="heading-name">
                                    <strong className="main-name">Experiência 1</strong>
                                </h1>
                                <p className="home-header">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    ultricies, nunc id fringilla ultrices, massa nunc ultricies
                                    libero, nec bibendum purus neque sit amet nunc. Nullam nec
                                    fermentum nisl. Nullam nec fermentum nisl. Nullam nec fermentum
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    );
}

export default Experience;
