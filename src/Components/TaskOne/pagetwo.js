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
            <label class="flex align-center justify-content-center input">
              <input type="text" placeholder="Opara Linus Ahmed" />
            </label>
          </label>
          <label>
            <p>
              Card Type <sup>*</sup>
            </p>
            <label class="flex align-center justify-content-center input">
              <select>
                <option>Visa</option>
                <option>Verve</option>
                <option>Master</option>
              </select>
            </label>
          </label>
          {/* <div className="card-details">
            <div className="card-no">
              <label>
                <p>
                  Card details <sup>*</sup>
                </p>
                <label class="flex align-center justify-content-center input">
                  <input
                    type="text"
                    placeholder="44960  44960  44960 44960"
                    className="text-center"
                  />
                </label>
              </label>
            </div>
            <div className="flex space-between text-center card-details-g align-center flex-end">
              <label className="text-center">
                <p>
                  Expiry date <sup>*</sup>
                </p>
                <label class="flex align-center justify-content-center input">
                  <input
                    type="text"
                    placeholder="04 / 23"
                    className="text-center"
                  />
                </label>
              </label>
              <label className="text-center">
                <p>
                  CVV <sup>*</sup>
                </p>
                <label class="flex align-center justify-content-center input">
                  <input
                    type="text"
                    placeholder="923"
                    className="text-center"
                  />
                </label>
              </label>
            </div>
          </div>
          <br /> */}

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
