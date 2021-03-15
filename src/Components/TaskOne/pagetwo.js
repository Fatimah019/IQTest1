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
            <p>
              Name on Card <sup>*</sup>
            </p>
            <input type="text" placeholder="Opara Linus Ahmed" />
          </label>
          <label>
            <p>
              Card Type <sup>*</sup>
            </p>
            <select>
              <option>Visa</option>
              <option>Verve</option>
              <option>Master</option>
            </select>
          </label>
          <div className="flex space-between card-details">
            <div>
              <label>
                <p>
                  Card details <sup>*</sup>
                </p>
                <input
                  type="text"
                  placeholder="44960  44960  44960 44960"
                  className="text-center"
                />
              </label>
            </div>
            <div className="flex space-between text-center card-details-g">
              <label className="text-center">
                <p>
                  Expiry date <sup>*</sup>
                </p>
                <input
                  type="text"
                  placeholder="04 / 23"
                  className="text-center"
                />
              </label>
              <label className="text-center">
                <p>
                  CVV <sup>*</sup>
                </p>
                <input type="text" placeholder="923" className="text-center" />
              </label>
            </div>
          </div>
          <br />

          <div class="billing-final">
            <div className="flex align-center forward">
              <Link to="/confirm-payment" className="btn">
                Next
              </Link>
              <Link to="/" className="link-page">
                Cancel Payment
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
