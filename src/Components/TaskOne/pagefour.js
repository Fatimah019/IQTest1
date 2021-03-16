import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageFour extends Component {
  render() {
    return (
      <div className="taskone-pg-four">
        <div className="pg-four-con">
          <div>
            <i className="fa fa-check"></i>
          </div>
          <div class="confirm-payment">
            <h1>Purchase Completed</h1>
            <p>
              Please check your email for details concerning this transaction
            </p>
            <br />
            <Link to="/" class="home-link">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PageFour;
