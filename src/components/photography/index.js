import React from "react";
import styled from "styled-components";

import DesktopFixedComponents from "../fixedComponents/compiledWithBlur";
import PhotographyDesktop from "./desktop/index";
import PhotographyMobile from "./mobile/index";

const Photography = () => {
  return (
    <>
      <Wrapper>
        <Desktop>
          <DesktopFixedComponents />
          <PhotographyDesktop />
        </Desktop>
        <Mobile>
          <PhotographyMobile />
        </Mobile>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Desktop = styled.div`
  @media screen and (max-width: 899px) {
    display: none;
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export default Photography;
