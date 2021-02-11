import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>First Ascent</Title>
        <Paragraph>
          This unique urban high ball has been tried for more than ten years
          without success. In October 2020, Marc-Antoine did the first ascent of
          this V9 highball in the middle of the city.
        </Paragraph>
        <Paragraph>
          I love this shot because it collides the world of a climber and more
          “normal” people coming out of the metro station. It was incredible to
          see the reaction of the people realizing what was happening.
        </Paragraph>
        <Paragraph>
          This photo was used by L’Équipe as a cover of an online article.
          L’Équipe is one of the most recognized and acclaimed sports magazines
          in France. I am really proud to have the cover of one of their
          articles.
        </Paragraph>
        <Detail>
          <ParagraphStrong>Athlete:</ParagraphStrong> Marc-Antoine Vigneault
        </Detail>
        <Detail>
          <ParagraphStrong>Project:</ParagraphStrong> Disturban | Allez Up |
          Jackalope
        </Detail>
        <Detail>
          <ParagraphStrong>Publications:</ParagraphStrong> Gripped Magazine
          Online, Jackalope TV
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
