import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>Concordia Tennis Tryouts</Title>
        <Paragraph>
          Concordia Tennis hired me to take a photo and make a design for their
          2020 tryouts. The shoot took place in the IGA Stadium and I made the
          design the very next days in less than 2 hours.
        </Paragraph>
        <Paragraph>The design was made using photoshop.</Paragraph>
        <Detail>
          <ParagraphStrong>Athletes:</ParagraphStrong> Antoine Clement
        </Detail>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  visibility: hidden;
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

const Detail = styled.p`
  text-align: ${TXT_CONSTANTS.textAlign};
  margin: ${TXT_CONSTANTS.photoDetailMargin};
`;

const ParagraphStrong = styled.span`
  font-weight: ${TXT_CONSTANTS.fontWeightStrong};
`;

export default Text;
