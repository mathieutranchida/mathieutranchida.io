import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DIMENSIONS } from "../../globalStyles/constants";
import FixedComponents from "../component/fixedComponents/index";
import Homepage from "../component/homepage/index";
import WebDevelopment from "../component/webDevelopment/index";
import Photography from "../component/photography/index";
import Design from "../component/design/index";
import Contact from "../component/contact/index";

gsap.registerPlugin(ScrollTrigger);

const backgroundColors = {
  homepage: "#b4c1bf",
  contact: "#424242",
};

const Home = () => {
  let pageRef = useRef(null);

  useEffect(() => {
    gsap.to(pageRef, {
      backgroundColor: backgroundColors.contact,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  return (
    <>
      <Wrapper
        ref={(e) => {
          pageRef = e;
        }}
      >
        <FixedComponents />
        <Div>
          <Homepage />
        </Div>
        <Div>
          <WebDevelopment />
        </Div>
        <Div>
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
  background-color: ${backgroundColors.homepage};
`;

const Div = styled.div`
  height: 100vh;
`;

export default Home;
