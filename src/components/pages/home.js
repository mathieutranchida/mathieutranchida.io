import React from "react";
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
  // let pageRef = useRef(null);
  // let coverRef = useRef(null);
  // let coverBlurRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(pageRef, {
  //     backgroundColor: backgroundColors.contact,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //   });

  //   gsap.to(coverRef, {
  //     backgroundColor: backgroundColors.contact,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //   });

  //   gsap.fromTo(
  //     coverBlurRef,
  //     {
  //       background: `linear-gradient( 180deg,
  //       transparent 0%,
  //       ${backgroundColors.homepage} 100%
  //     )`,
  //     },
  //     {
  //       background: `linear-gradient(
  //         180deg,
  //       transparent 0%,
  //       ${backgroundColors.contact} 100%
  //     )`,
  //       ease: "none",
  //       scrollTrigger: {
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: true,
  //       },
  //     }
  //   );
  // });

  return (
    <>
      <LeftColumn
      // ref={(e) => {
      //   pageRef = e;
      // }}
      >
        <CoverTop></CoverTop>
        <CoverTopBlur></CoverTopBlur>
        <CoverBottom
        // ref={(e) => {
        //   coverRef = e;
        // }}
        >
          <CoverBottomBlur
          // ref={(e) => {
          //   coverBlurRef = e;
          // }}
          >
            <FixedComponents />
          </CoverBottomBlur>
        </CoverBottom>
        <Section id="section1">
          <Homepage />
        </Section>
        <Section id="section2">
          <WebDevelopment />
        </Section>
        <Section id="section3">
          <Photography />
        </Section>
        <Section id="section4">
          <Design />
        </Section>
        <Section id="section5">
          <Contact />
        </Section>
      </LeftColumn>
    </>
  );
};

const LeftColumn = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: ${DIMENSIONS.totalHeight};
  background-color: ${backgroundColors.homepage};
`;

const CoverTop = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 7vh;
  position: fixed;
  top: 0vh;
  left: 0;
  background-color: ${backgroundColors.homepage};
  z-index: 500;
`;

const CoverTopBlur = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 5vh;
  position: fixed;
  top: 7vh;
  left: 0;
  z-index: 500;
  background: linear-gradient(
    0deg,
    transparent 0%,
    ${backgroundColors.homepage} 100%
  );
`;

const CoverBottom = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 33vh;
  position: fixed;
  top: 67vh;
  left: 0;
  background-color: ${backgroundColors.homepage};
  z-index: 500;
`;

const CoverBottomBlur = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 5vh;
  position: fixed;
  top: 62vh;
  left: 0;
  z-index: 500;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${backgroundColors.homepage} 100%
  );
`;

const Section = styled.section`
  height: 100vh;
`;

export default Home;
