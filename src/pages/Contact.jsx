import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputFunc = (e) => {
    const { name, value } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submitFunc = (e) => {
    e.preventDefault();
    data.fullname && data.email && data.phone && data.message
      ? alert(
          `Your Name : ${data.fullname} \n Number : ${data.phone} \n E-Mail : ${data.email} \n Your Message : ${data.message}`
        )
      : alert("Incomplete Detail");
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <Container className="my-5">
        <Row>
          <Col xs={10} md={6} className="mx-auto">
            <Form onSubmit={submitFunc}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputFunc}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Mobile Number"
                  name="phone"
                  value={data.phone}
                  onChange={inputFunc}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={inputFunc}
                />
              </Form.Group>
              <Form.Label>Message</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="hello"
                  style={{ height: "100px" }}
                  name="message"
                  value={data.message}
                  onChange={inputFunc}
                />
              </FloatingLabel>
              <Button variant="outline-primary" type="submit">
                Submit Form
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
