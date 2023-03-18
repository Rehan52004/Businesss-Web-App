import React from "react";
import { Button, Card } from "react-bootstrap";

import Image from "./Image";

const ServiceCard = (props) => {
  const { image, title } = props;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Image name={image} variant="top" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Check Now</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ServiceCard;
