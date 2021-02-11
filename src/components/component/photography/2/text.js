import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Tuffa PErspectives</Title>
        <Paragraph>
          This shot was a big surprise! We were supposed to shoot another spot
          but the area was closed. Bea spotted this wall and we decided to give
          it a try. I immediately tried to give it a unique perspctive and I
          love the result.
        </Paragraph>
        <Paragraph>
          Shot this on a 70-200mm f/2.8 wide open and there is little to no
          edits made in post. Definitely one of my favorite raw shots from this
          year.
        </Paragraph>
        <Detail>
          <ParagraphStrong>Athlete:</ParagraphStrong> Bea Evans
        </Detail>
        <Detail>
          <ParagraphStrong>Project:</ParagraphStrong> Montreal’s Urban Climbing
        </Detail>
        <Detail>
          <ParagraphStrong>Publication:</ParagraphStrong> Gripped Magazine,
          October / November Issue, 2020
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
