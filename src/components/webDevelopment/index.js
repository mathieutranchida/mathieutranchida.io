import React from "react";
import styled from "styled-components";

import DesktopFixedComponents from "../fixedComponents/compiledWithBlur";
import WebDevDesktop from "./desktop/index";
import MobileWebDev from "./mobile/index";

const WebDevelopment = () => {
  return (
    <>
      <Wrapper>
        <Desktop>
          <DesktopFixedComponents />
          <WebDevDesktop />
        </Desktop>
        <Mobile>
          <MobileWebDev />
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

export default WebDevelopment;
