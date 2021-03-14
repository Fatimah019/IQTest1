import React from "react";
import { Link } from "react-router-dom";
import Menu from "../TaskOne/menu";

class TaskOne extends React.Component {
  render() {
    return (
      <div className="justify-content-center align-center">
        <Menu />
        <div className="task-one-pg-1">
          <form>
            <label>
              <p>Name</p>
              <input type="text" placeholder="Opara Linus Ahmed" />
            </label>
            <br />
            <label>
              <p>
                Email Address <sup>*</sup>
              </p>
              <div>
                {" "}
                <span class="email-info">
                  The purchase receipt will be sent to this address
                </span>
              </div>
              <input type="email" placeholder="OparaLinusAhmed@devmail.com" />
            </label>
            <br />
            <label>
              <p>Address 1</p>
              <input
                type="text"
                placeholder="The Address of the user goes here"
              />
            </label>
            <br />
            <label>
              <p>Address 2</p>
              <input type="text" placeholder="and here" />
            </label>
            <br />
            <label className="flex space-between">
              <div>
                {" "}
                <p>Local Government</p>
                <input type="text" placeholder="Surulere" />
              </div>
              <div>
                <p>State</p>
                <input type="text" placeholder="Surulere" />
              </div>
            </label>

            <div className="flex align-center forward">
              <Link to="/confirm-payment" className="btn">
                Next
              </Link>
              <Link to="/cancel-payment" className="link-page">
                Cancel Payment
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskOne;
