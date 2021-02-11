import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./globalStyles/globalStyles";
import Home from "./components/pages/home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
