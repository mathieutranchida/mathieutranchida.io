import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { TXT, BACKGROUND } from "../../../globalStyles/constants";
import SocialMedia from "../../fixedComponents/socialMediaWhite";

const Text = () => {
  const bio = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.bio
  );

  return (
    <>
      <Background>
        <Wrapper>
          {bio.map((paragraph) => {
            return <Paragraph key={paragraph}>{paragraph}</Paragraph>;
          })}
          <LogoDiv>
            <SocialMedia />
          </LogoDiv>
        </Wrapper>
      </Background>
    </>
  );
};

const Background = styled.div`
  position: absolute;
  background-color: rgb(${BACKGROUND.home});
  top: 0;
  left: 0;
  height: 100vh;
  width: 40vw;
`;

const Wrapper = styled.div`
  position: absolute;
  max-width: ${TXT.width};
  margin: ${TXT.marginWide};
  font-weight: 300;
  color: ${TXT.color};
  @media screen and (max-height: 800px) {
    margin: ${TXT.marginSmall};
  }
`;

const Paragraph = styled.p`
  text-align: justify;
`;

const LogoDiv = styled.div`
  float: right;
  margin-top: 15px;
`;

export default Text;
