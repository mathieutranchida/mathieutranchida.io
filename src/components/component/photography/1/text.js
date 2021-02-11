import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Muraille stunt</Title>
        <Paragraph>One of my all-time favorites.</Paragraph>
        <Paragraph>
          This shot it a composited panorama. I started shooting the action
          vertically. Once I got the shot, I shot the extremities and stiched it
          all the shots together in Photoshop to get a HDR file ready for large
          prints. Other from the stitching, there are very little edits.
        </Paragraph>
        <Detail>
          <ParagraphStrong>Athlete:</ParagraphStrong> Laurent De Martin
        </Detail>
        <Detail>
          <ParagraphStrong>Project:</ParagraphStrong> From Switzerland with Love
        </Detail>
        <Detail>
          <ParagraphStrong>Publication:</ParagraphStrong> The Ski Journal, Issue
          3, 2020
        </Detail>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  visibility: hidden;
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
