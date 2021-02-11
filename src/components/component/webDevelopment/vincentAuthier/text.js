import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Vincent Authier Athlete Website</Title>
        <Paragraph>
          Landing page intended to present Vincent Authier as an athlete and put
          him in relation with potential sponsors and clients.
        </Paragraph>
        <Paragraph>
          This app is exclusively front-end and heavily based on GSAP and
          ScrollTriggers animations. The text reveals itself as you scroll down
          on the website. The website's sides are made of continuous text moving
          up and down as the user scrolls (animated using GSAP). The gallery is
          made with a CSS grid and is fully responsive to the smartphone size.
        </Paragraph>
        <Paragraph>
          <ParagraphStrong>Technologies used:</ParagraphStrong> React,
          JavaScript, HTML, CSS, Email.js, GSAP, ScrollTriggers
        </Paragraph>
        <Paragraph>
          <ParagraphStrong>GitHub repository</ParagraphStrong>
        </Paragraph>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: none;
  position: ${TXT_CONSTANTS.position};
  top: ${TXT_CONSTANTS.top};
  max-width: ${TXT_CONSTANTS.maxWidth};
  margin: ${TXT_CONSTANTS.margin};
  font-weight: ${TXT_CONSTANTS.fontWeight};
  color: ${TXT_CONSTANTS.color};
`;

const Title = styled.h2`
  margin-top: ${TXT_CONSTANTS.marginTop};
  font-weight: ${TXT_CONSTANTS.fontWeightTitle};
  text-transform: ${TXT_CONSTANTS.textTransform};
  font-size: ${TXT_CONSTANTS.fontWeightStrong};
`;

const Paragraph = styled.p`
  text-align: ${TXT_CONSTANTS.textAlign};
`;

const ParagraphStrong = styled.span`
  font-weight: ${TXT_CONSTANTS.fontWeightStrong};
`;

export default Text;
