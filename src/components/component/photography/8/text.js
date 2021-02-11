import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Fire in the hole</Title>
        <Paragraph>
          During the shoot of Laurent de Martin and Titouan Bessire’s movie
          “From Switzerland with Love”, Remco had the idea of jumping through an
          abandonned ski lift. The trick was one of the most impressive I had
          ever seen at the time. There was no margin for error.
        </Paragraph>
        <Paragraph>
          Initially, I had trouble finding the angle I wanted for this photo. I
          did a couple of vertical head-on shots before deciding to capture the
          full scene with the mountains behind. I love the result and it’s one
          of my favorite photos.
        </Paragraph>
        <Detail>
          <ParagraphStrong>Athlete:</ParagraphStrong> Remco Kayser
        </Detail>
        <Detail>
          <ParagraphStrong>Project:</ParagraphStrong> From Switzerland with Love
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
