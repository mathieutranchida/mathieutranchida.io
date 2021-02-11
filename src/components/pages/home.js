import React from "react";
import styled from "styled-components";

import { LEFT_BG_COLORS, DIMENSIONS } from "../../globalStyles/constants";

import FixedComponents from "../component/fixedComponents/index";
import Homepage from "../component/homepage/index";
import WebDevelopment from "../component/webDevelopment/index";
import Photography from "../component/photography/index";
import Design from "../component/design/index";
import Contact from "../component/contact/index";

const Home = () => {
  return (
    <>
      <Wrapper>
        <FixedComponents />
        <Div>
          <Homepage />
        </Div>
        <Div>
          <WebDevelopment />
        </Div>
        <Div style={{ border: "1px solid red" }}>
          <Photography />
        </Div>
        <Div>
          <Design />
        </Div>
        <Div>
          <Contact />
        </Div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: ${DIMENSIONS.totalHeight};
  background-color: ${LEFT_BG_COLORS.homePage};
`;

const Div = styled.div`
  height: 100vh;
`;

export default Home;
