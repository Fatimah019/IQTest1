import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ReduxSetup/Store";
import TaskFour from "./Components/TaskFour";
import TaskOne from "./Components/TaskOne/index";
import PageTwo from "./Components/TaskOne/pagetwo";
import PageThree from "./Components/TaskOne/pagethree";
import PageFour from "./Components/TaskOne/pagefour";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/covid-cases" component={TaskFour} />
            <Route path="/" exact component={TaskOne} />
            <Route path="/billing" component={PageTwo} />
            <Route path="/confirm-payment" component={PageThree} />
            <Route path="/payment-complete" component={PageFour} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
