import React from "react";
import styled from "styled-components";

import Help from "./help";
import LanguageSwitcher from "./languageSwitcher";

const Index = () => {
  return (
    <>
      <Wrapper>
        <Help />
        <LanguageSwitcher />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default Index;
