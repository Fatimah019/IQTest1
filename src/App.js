import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ReduxSetup/Store";
import TaskFour from "./Components/CovidCases";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/covid-cases" component={TaskFour} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
