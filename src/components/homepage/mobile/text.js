import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { TXT } from "../../../globalStyles/constants";
import Footer from "../../fixedComponents/footerMobile";

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
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  color: ${TXT.colorMobile};
  padding: 35px 50px 25px 50px;
`;

const Paragraph = styled.p`
  text-align: justify;
`;

export default Text;
