import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

import { WEB_CONSTANTS_DEMO } from "../../../../globalStyles/constants";

const Demo = () => {
  return (
    <>
      <Wrapper>
        <VideoDiv>
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=LGrr_AkTSlY"
          />
        </VideoDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: none;
  position: ${WEB_CONSTANTS_DEMO.positionWrapper};
  width: ${WEB_CONSTANTS_DEMO.widthWrapper};
  height: ${WEB_CONSTANTS_DEMO.heightWrapper};
  top: ${WEB_CONSTANTS_DEMO.topWrapper};
  right: ${WEB_CONSTANTS_DEMO.rightWrapper};
`;

const VideoDiv = styled.div`
  position: ${WEB_CONSTANTS_DEMO.positionVideoDiv};
  top: ${WEB_CONSTANTS_DEMO.topVideoDiv};
  left: ${WEB_CONSTANTS_DEMO.leftVideoDiv};
  transform: ${WEB_CONSTANTS_DEMO.transformVideoDiv};
  width: ${WEB_CONSTANTS_DEMO.widthVideoDiv};
  height: ${WEB_CONSTANTS_DEMO.heightVideoDiv};
`;

export default Demo;
