import React from "react";
import { Link } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";

import Image from "./Image";

const Comman = (props) => {
  const { heading, image, visit, btname } = props;
  return (
    <>
      <div className="wrapper">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start py-4 py-md-0">
              <h1
                style={{ fontSize: "clamp(30px,5vw,48px)", fontWeight: "600" }}
              >
                {heading}
                <span style={{ color: "#3498db" }}>TheAbdul.</span>
              </h1>
              <p
                className="py-3"
                style={{
                  color: "#484848",
                  fontSize: "clamp(10px, 4vw, 24px)",
                }}
              >
                We are the team of talented developer making websites
              </p>
              <Link to={visit}>
                <button className="mybtn">{btname}</button>
              </Link>
            </Col>
            <Col md={6}>
              <Image name={image} className="animated" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Comman;
