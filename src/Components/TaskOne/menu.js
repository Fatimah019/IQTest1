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
              <Link to="/" className="links no-text-wrap">
                Personal Info
              </Link>
            </li>
            <li>
              <Link to="/billing" className="links no-text-wrap">
                Biling Info
              </Link>
            </li>
            <li>
              <Link to="/confirm-payment" className="links no-text-wrap">
                Confirm Payment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
