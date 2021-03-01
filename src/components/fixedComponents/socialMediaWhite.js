import React from "react";
import styled from "styled-components";

import { SiGmail, SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = (props) => {
  return (
    <Div>
      <A
        href="https://github.com/mathieutranchida"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GitHub />
      </A>
      <A
        href="https://www.linkedin.com/in/mathieutranchida/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedIn />
      </A>
      <A
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mathieu.tranchida@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Gmail />
      </A>
      <A
        href="https://www.instagram.com/mathieutranchida/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Instagram />
      </A>
    </Div>
  );
};

const Div = styled.div`
  display: grid;
  grid-template-columns: 25px 25px 25px 25px;
  grid-column-gap: 25px;
  grid-template-rows: 25px;
`;

const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  opacity: 0.8;
  transition: 500ms;
  &:hover {
    opacity: 1;
  }
`;

const GitHub = styled(FiGithub)`
  height: 100%;
  width: 100%;
  color: white;
`;

const LinkedIn = styled(FaLinkedinIn)`
  height: 100%;
  width: 100%;
  color: white;
`;

const Gmail = styled(SiGmail)`
  height: 100%;
  width: 100%;
  color: white;
`;

const Instagram = styled(SiInstagram)`
  height: 100%;
  width: 100%;
  color: white;
`;

export default SocialMedia;
