import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Thirsty Thursday</Title>
        <Paragraph>
          Another design for an event of the Concordia Ski & Snowboard Club
          (CSSC). This was a Facebook banner for one of the monthly Thirsty
          Thursdays in 2018.
        </Paragraph>
        <Paragraph>
          During my time at the CSSC, I did more than 20 designs for social
          media with different sizes (square, banners, and stories).
        </Paragraph>
        <Paragraph>This design was done using Adobe Photoshop.</Paragraph>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* display: none; */
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
