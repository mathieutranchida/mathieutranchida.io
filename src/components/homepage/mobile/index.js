import React from "react";
import styled from "styled-components";

import { BACKGROUND } from "../../../globalStyles/constants";

import Photo from "./photo";
import Text from "./text";
import Logo from "../../fixedComponents/logoMathieuMobile";

const HomeMobile = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <Photo />
        <Text />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: rgb(${BACKGROUND.homeMobile});
`;

export default HomeMobile;
