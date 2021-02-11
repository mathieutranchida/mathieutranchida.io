import React from "react";
import styled from "styled-components";

import { TXT, DIMENSIONS } from "../../../globalStyles/constants";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <FirstLine>
          <A
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mathieu.tranchida@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiMail />
            <Email>mathieu.tranchida@gmail.com</Email>
          </A>
          <FiPhone />
          <Phone>+1 (438) 927-7693</Phone>
        </FirstLine>
        <SecondLine>Mathieu Tranchida - 2021 All rights Reserved ©</SecondLine>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  font-family: quasimoda, sans-serif;
  font-weight: 300;
  font-size: 9pt;
  color: ${TXT.color};
  position: fixed;
  left: 0px;
  bottom: 10px;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const A = styled.a`
  color: ${TXT.color};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Email = styled.div`
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 10px;
`;

const Phone = styled.div`
  padding-bottom: 3px;
  padding-left: 5px;
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: -1px;
`;

export default Footer;
