import React from "react";
import styled from "styled-components";

import { TXT } from "../../../globalStyles/constants";

const FakePath = () => {
  return (
    <>
      <Wrapper>./MathieuTranchida/PORTFOLIO_1.0.0</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: -135px;
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  font-family: quasimoda, sans-serif;
  font-weight: 700;
  font-size: 13pt;
  text-transform: uppercase;
  color: ${TXT.color};
  user-select: none;
  letter-spacing: -1px;
`;

export default FakePath;
