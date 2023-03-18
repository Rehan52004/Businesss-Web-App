import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import ServiceCard from "../components/ServiceCard";
import details from "../services/details";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="wrapper">
        <Container className="my-5">
          <Row className="gy-4">
            {details.map((detail) => (
              <Col sm={6} md={4} className="d-flex justify-content-center">
                <ServiceCard image={detail.image} title={detail.title} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
