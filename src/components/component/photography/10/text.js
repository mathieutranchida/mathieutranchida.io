import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Bye Bye Ronin</Title>
        <Paragraph>
          After a long day, Remco and Titouan decided to shoot some lifestyle
          shots for the movie. As they lined up, I had this idea to put Remco
          inside Titouan’s arm. Turned out to be one of my best pictures of the
          whole project.
        </Paragraph>
        <Paragraph>
          It was also my first printed publication in the great ski magazine
          “The Ski Journal”. As a kid, I dreamed of gettting published in that
          magazine. Aftter 5 years of hard work, I am really proud to be in such
          a great piece.
        </Paragraph>
        <Detail>
          <ParagraphStrong>Athletes:</ParagraphStrong> Remco Kayser | Titouan
          Bessire
        </Detail>
        <Detail>
          <ParagraphStrong>Project:</ParagraphStrong> From Switzerland with Love
        </Detail>
        <Detail>
          <ParagraphStrong>Publication:</ParagraphStrong> The Ski Journal |
          Issue One, Page 2 | 2020
        </Detail>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* display: none; */
  position: ${TXT_CONSTANTS.position};
  top: ${TXT_CONSTANTS.topPhoto};
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

const Detail = styled.p`
  text-align: ${TXT_CONSTANTS.textAlign};
  margin: ${TXT_CONSTANTS.photoDetailMargin};
`;

const ParagraphStrong = styled.span`
  font-weight: ${TXT_CONSTANTS.fontWeightStrong};
`;

export default Text;
