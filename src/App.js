import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import EulerViews from "./views/EulerViews";
import EulerViewsDetails from "./views/EulerViewsDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={EulerViews} />{" "}
        <Route path="/detail/:address/:token" component={EulerViewsDetails} />
      </Switch>
    </div>
  );
}

export default App;
