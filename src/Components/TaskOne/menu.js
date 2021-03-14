import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
      <div class="task-one-header">
        <h1>Complete your Purchase</h1>
        {/* tabs */}
        <div>
          <ul className="flex space-between">
            <li className="active">
              <Link to="/" className="links">
                Personal Info
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/billing" className="links">
                Biling Info
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/confirm-payment" className="links">
                Confirm Payment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
