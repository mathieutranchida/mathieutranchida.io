import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { TXT } from "../../../globalStyles/constants";
import SocialMedia from "../reusables/socialMediaWhite";

const Text = () => {
  const bio = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.bio
  );

  return (
    <>
      <Wrapper>
        {bio.map((paragraph) => {
          return <Paragraph key={paragraph}>{paragraph}</Paragraph>;
        })}
        <LogoDiv>
          <SocialMedia />
        </LogoDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 12vh;
  max-width: ${TXT.width};
  margin: ${TXT.margin};
  font-weight: 300;
  color: ${TXT.color};
`;

const Paragraph = styled.p`
  text-align: justify;
`;

const LogoDiv = styled.div`
  float: right;
  margin-top: 15px;
`;

export default Text;
