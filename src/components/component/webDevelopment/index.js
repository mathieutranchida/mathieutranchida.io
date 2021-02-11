import React from "react";

import WebDevEcommText from "./ecommerce/text";
import WebDevEcommDemo from "./ecommerce/demo";
import WebDevVincentText from "./vincentAuthier/text";
import WebDevVincentDemo from "./vincentAuthier/demo";
import WebDevTwitterText from "./twitterClone/text";
import WebDevTwitterDemo from "./twitterClone/demo";
import WebDevAirlinesText from "./slingshotAirlines/text";
import WebDevAirlinesDemo from "./slingshotAirlines/demo";
import WebDevRoadRageText from "./roadRage/text";
import WebDevRoadRageDemo from "./roadRage/demo";

const WebDevelopment = () => {
  return (
    <div>
      <WebDevEcommText />
      <WebDevEcommDemo />
      <WebDevVincentText />
      <WebDevVincentDemo />
      <WebDevTwitterText />
      <WebDevTwitterDemo />
      <WebDevAirlinesText />
      <WebDevAirlinesDemo />
      <WebDevRoadRageText />
      <WebDevRoadRageDemo />
    </div>
  );
};

export default WebDevelopment;
