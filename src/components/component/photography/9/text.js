import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Disturban Cover</Title>
        <Paragraph>
          This was the first spot we shot for the urban part of the Disturban
          movie made by Allez Up and Jackalope TV. It was really impressive to
          climbing this so close to the iconic Atwater Tunnel in Montreal.
        </Paragraph>
        <Paragraph>
          My idea was to show the road as much as the climb to really get an
          understanding of how dangerous it was. Unfortunately, it didn’t work
          my second idea was this shot. It is a composite of two pictures, the
          climbing part and the moving car on the bottom. Created in Photoshop.
        </Paragraph>
        <Detail>
          <ParagraphStrong>Athlete:</ParagraphStrong> Jay Jeong
        </Detail>
        <Detail>
          <ParagraphStrong>Project:</ParagraphStrong> Disturban | Allez Up |
          Jackalope
        </Detail>
        <Detail>
          <ParagraphStrong>Use:</ParagraphStrong> Cover of the Disturban movie
        </Detail>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: none;
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
