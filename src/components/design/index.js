import React from "react";
import styled from "styled-components";

import DesktopFixedComponents from "../fixedComponents/compiledWithBlur";
import DesignDesktop from "./desktop/index";
import DesignMobile from "./mobile/index";

const Design = () => {
  return (
    <>
      <Wrapper>
        <Desktop>
          <DesktopFixedComponents />
          <DesignDesktop />
        </Desktop>
        <Mobile>
          <DesignMobile />
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

export default Design;
