import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

// Avoid random classes between microFE collide

const generateClassName = createGenerateClassName({
  // Add "ma" to start of any class name
  productionPrefix: "ma",
});

const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
