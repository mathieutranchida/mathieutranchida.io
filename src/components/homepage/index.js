import React from "react";
import styled from "styled-components";

import DesktopHome from "./desktop/index";
import DesktopFixedComponents from "../fixedComponents/compiledWithoutBlur";
import MobileHome from "./mobile/index";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Desktop>
          <DesktopFixedComponents />
          <DesktopHome />
        </Desktop>
        <Mobile>
          <MobileHome />
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

export default Home;
