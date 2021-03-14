import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";

export default class PageThree extends Component {
  render() {
    return (
      <div className="taskone-pg-three">
        <Menu />
        <table>
          <thead>
            <div className="flex space-between thead">
              <p>Item Name</p>
              <p>Price</p>
            </div>
          </thead>
          <div className="items-payment">
            <tr className="flex space-between">
              <td>Data Science and usability</td>
              <td>50,000.00</td>
            </tr>
            <br />
            <tr className="flex space-between">
              <td>Shipping</td>
              <td>0.00</td>
            </tr>
          </div>
          <hr />
          <div className="flex space-between total">
            <td>Total</td>
            <td>50,000.00</td>
          </div>
        </table>

        <form>
          <div className="flex align-center forward">
            <Link to="/payment-complete" className="btn">
              Pay
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
