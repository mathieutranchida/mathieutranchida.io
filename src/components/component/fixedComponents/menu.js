import React from "react";
import styled from "styled-components";

import { TXT } from "../../../globalStyles/constants";

const Menu = () => {
  return (
    <>
      <Wrapper>
        <Link>Web Development Portfolio</Link>
        <Link>Photography Portfolio</Link>
        <Link>Design Portfolio</Link>
        <Link>Contact</Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 70vh;
  max-width: ${TXT.width};
  margin: ${TXT.margin};
  font-weight: 600;
  font-size: 18pt;
  color: ${TXT.color};
`;

const Link = styled.div`
  margin-bottom: 9px;
`;

export default Menu;
