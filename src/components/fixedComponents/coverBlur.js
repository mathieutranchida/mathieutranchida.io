import React from "react";
import styled from "styled-components";

import { DIMENSIONS, BACKGROUND } from "../../globalStyles/constants";

const CoverBlur = () => {
  return (
    <>
      <CoverTop></CoverTop>
      <CoverTopBlur></CoverTopBlur>
      <CoverMain></CoverMain>
      <CoverBottom></CoverBottom>
      <CoverBottomBlur></CoverBottomBlur>
    </>
  );
};

const CoverTop = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 80px;
  position: fixed;
  top: 0vh;
  left: 0;
  background-color: rgb(${BACKGROUND.home});
  z-index: 2;
`;

const CoverTopBlur = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 40px;
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 2;
  background: -webkit-linear-gradient(
    to top,
    rgba(${BACKGROUND.home}, 0) 0%,
    rgba(${BACKGROUND.home}, 1) 100%
  );
  background: linear-gradient(
    to top,
    rgba(${BACKGROUND.home}, 0) 0%,
    rgba(${BACKGROUND.home}, 1) 100%
  );
`;

const CoverMain = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 100vh;
  position: fixed;
  background-color: rgb(${BACKGROUND.home});
`;

const CoverBottom = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 65px;
  position: fixed;
  bottom: 0px;
  left: 0;
  background-color: rgb(${BACKGROUND.home});
  z-index: 2;
`;

const CoverBottomBlur = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 50px;
  position: fixed;
  bottom: 65px;
  left: 0;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(${BACKGROUND.home}, 0) 0%,
    rgba(${BACKGROUND.home}, 1) 100%
  );
  background: -webkit-linear-gradient(
    to bottom,
    rgba(${BACKGROUND.home}, 0) 0%,
    rgba(${BACKGROUND.home}, 1) 100%
  );
`;

export default CoverBlur;
