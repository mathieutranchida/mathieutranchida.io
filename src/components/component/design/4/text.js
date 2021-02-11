import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Portfolio Magazine Project</Title>
        <Paragraph>
          During the pandemic and on the side of my studies, I decided to make a
          “fake” magazine showcasing my best photos. The magazine is made of 54
          pages and divided in four categories: Skiing, Climbing, Landscape, and
          Lifestyle. Each page has a unique design touch.
        </Paragraph>
        <Paragraph>
          This double page is definitely my favorite design / photo combination.
          It is the introduction for the climbing section. The word “climbing”
          is hidden and faded behind the three diving platforms. It is simple
          but effective!
        </Paragraph>
        <Paragraph>
          The design was made using Adobe Photoshop with layers and masks. Made
          in one hour.
        </Paragraph>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: none;
  position: ${TXT_CONSTANTS.position};
  top: ${TXT_CONSTANTS.topDesign};
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

export default Text;
