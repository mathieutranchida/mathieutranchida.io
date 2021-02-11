import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Road Rage</Title>
        <Paragraph>
          Created a javascript game where the user entered a highway the wrong
          way and has to avoid upcoming cars. As the game progresses, the user
          scores points and the cars gain a ramdom speed every 10 seconds.
        </Paragraph>
        <Paragraph>
          This was a project for my diploma at Concordia Bootcamps.
        </Paragraph>
        <Paragraph>
          <ParagraphStrong>Technologies used:</ParagraphStrong> HTML, CSS,
          JavaScript
        </Paragraph>
        <Paragraph>
          <ParagraphStrong>GitHub repository</ParagraphStrong>
        </Paragraph>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* display: none; */
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
