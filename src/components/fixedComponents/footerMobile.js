import React from "react";
import styled from "styled-components";

import SocialMedia from "./socialMediaBlack";
import { TXT } from "../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <LogoDiv>
        <SocialMedia />
      </LogoDiv>
      <Copyright>Mathieu Tranchida - 2021 All rights Reserved ©</Copyright>
    </>
  );
};

const LogoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Copyright = styled.div`
  font-family: quasimoda, sans-serif;
  font-weight: 300;
  font-size: 8pt;
  text-align: center;
  margin-top: 15px;
  color: ${TXT.colorMobile};
`;

export default Text;
