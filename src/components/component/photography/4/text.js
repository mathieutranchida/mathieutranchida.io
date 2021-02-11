import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>La Fontaine boarding</Title>
        <Paragraph>
          We built a small jump out of a snowed out elephant sculpture. After a
          while, some birds showed up to the party and got the scare of their
          life as Aidan almost landed on them. The background, the birds and the
          unique trick make for an photo. I love the fact that the photo blends
          our unique urban lifestyle with mere mortals skating in the
          background.
        </Paragraph>
        <Paragraph>Shot in January 2021 on a 24mm lens.</Paragraph>
        <Detail>
          <ParagraphStrong>Athlete:</ParagraphStrong> Aidan Cameron
        </Detail>
        <Detail>
          <ParagraphStrong>Project:</ParagraphStrong> Just for fun
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
