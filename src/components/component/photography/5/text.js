import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Appollo</Title>
        <Paragraph>
          I dreamed of taking this shot for more than two years. It took a lot
          of planning and five tries to get the a full moon on top of the
          Montreal’s Olympic Stadium at the right angle with a clear sky.
        </Paragraph>
        <Paragraph>
          In August 2020, I shot this on a 24mm lens at 2AM. The photo is
          composited of two pictures, one with the correct exposure for the moon
          and the other for the tower. The moon wasn’t moved from it’s original
          position. Super proud of the result.
        </Paragraph>
        <Detail>
          <ParagraphStrong>Location:</ParagraphStrong> Montreal’s Olympic
          Stadium
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
