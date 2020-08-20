import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./pages/index";

import Header from "./components/Header";
import Pnf from "./components/PageNotFound";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact component={Pnf} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
