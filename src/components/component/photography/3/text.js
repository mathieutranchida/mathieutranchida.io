import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Psicobloc finals</Title>
        <Paragraph>
          Shot during the women’s final of the Montreal’s Psicobloc Open Series
          in 2019. Every photographers decided to go on the structure of the
          wall to get their shot during the final. Seeing that shaping up, I
          decided to stay on the ground and find an angle that showed the public
          and emphises the height of the structure. This angle was a no brainer
          when I found it.
        </Paragraph>
        <Paragraph>Shot on a 16mm lens.</Paragraph>
        <Detail>
          <ParagraphStrong>Athletes:</ParagraphStrong> Unknown
        </Detail>
        <Detail>
          <ParagraphStrong>Project:</ParagraphStrong> Psicobloc Open Series 2019
        </Detail>
        <Detail>
          <ParagraphStrong>Bought by:</ParagraphStrong> Tourisme Montreal
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
