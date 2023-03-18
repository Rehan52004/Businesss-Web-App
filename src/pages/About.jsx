import React from "react";

import Comman from "../components/Comman";

const About = () => {
  return (
    <>
      <Comman
        heading="Welcome to About page"
        image="aboutUs.png"
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
