import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components and other
import GlobalStyles from "./globalStyles/globalStyles";
import Menu from "./components/fixedComponents/menu";
import ScrollToTop from "./customHooks/scrollToTop";

// routes
import Home from "./components/homepage/index";
import WebDevelopment from "./components/webDevelopment/index";
import Photography from "./components/photography/index";
import Design from "./components/design/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <GlobalStyles />
          <Menu />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/web-development" component={WebDevelopment} />
              <Route path="/photography" component={Photography} />
              <Route path="/design" component={Design} />
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
