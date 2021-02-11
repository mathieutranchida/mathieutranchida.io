import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>First Publication</Title>
        <Paragraph>
          In 2018, I followed skier Leo Taillefer in his home resort of Val
          d’Isère. I got a lot of unique shots but this one stands out from the
          rest.
        </Paragraph>
        <Paragraph>
          Here, you can see Leo jumping out of a cliff and the whole resort of
          Val d’Isère in the background. Val d’Isère is one of the greatest ski
          resort in the world and know for its many freeride itenaries.
        </Paragraph>
        <Paragraph>
          This photo was used by L’Équipe as a cover of an online article.
          L’Équipe is one of the most recognized and acclaimed sports magazines
          in France. I am really proud to have the cover of one of their
          articles.
        </Paragraph>
        <Detail>
          <ParagraphStrong>Athlete:</ParagraphStrong> Leo Taillefer
        </Detail>
        <Detail>
          <ParagraphStrong>Project:</ParagraphStrong> Leo Taillefer | Val
          d’Isère
        </Detail>
        <Detail>
          <ParagraphStrong>Publication:</ParagraphStrong> L’Équipe | Couloir,
          itinéraire, domaine, piste préférés... Le Val d'Isère de Léo Taillefer
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
