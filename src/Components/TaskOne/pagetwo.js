import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";

export default class PageTwo extends Component {
  render() {
    return (
      <div>
        <Menu />
        <form className="billing-form">
          <label>
            Name on Card <sup>*</sup>
          </label>
          <br />
          <input type="text" placeholder="Opara Linus Ahmed" />
          <br />

          <label>
            Card Type <sup>*</sup>
          </label>
          <span>The purchase receipt will be sent to this address</span>
          <br />
          <input type="email" placeholder="OparaLinusAhmed@devmail.com" />
          <br />

          <div className="flex space-between card-details">
            <div>
              {" "}
              <label>
                Card details <sup>*</sup>
              </label>
              <br />
              <input type="text" placeholder="Surulere" />
            </div>
            <div>
              <label>
                Expiry date <sup>*</sup>
              </label>
              <br />
              <input type="text" placeholder="Surulere" />
            </div>
            <div>
              <label>
                CVV <sup>*</sup>
              </label>
              <br />
              <input type="text" placeholder="Surulere" />
            </div>
          </div>
          <br />
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
    );
  }
}
