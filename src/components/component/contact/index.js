import React from "react";
import styled from "styled-components";

import Text from "./text";
import ContactForm from "./contactForm";
import SocialMedia from "../reusables/socialMedia";

const Contact = () => {
  const socialMediaColor = "black";
  return (
    <>
      <Text />
      <ContactForm />
      <Div>
        <SocialMedia color={socialMediaColor} />
      </Div>
    </>
  );
};

const Div = styled.div`
  position: absolute;
  top: 497vh;
  transform: translate(-50%, -50%);
  left: 70%;
`;

export default Contact;
