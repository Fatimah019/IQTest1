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
            <div>
              <p>Name</p>
              <label class="flex align-center justify-content-center input">
                <input type="text" placeholder="Opara Linus Ahmed" />
              </label>
            </div>
            <div>
              <p>
                Email Address <sup>*</sup>
              </p>
              <p class="desc">
                The purchase receipt will be sent to this address
              </p>
              <label class="flex align-center justify-content-center input">
                <input type="email" placeholder="OparaLinusAhmed@devmail.com" />
              </label>
            </div>
            <div>
              <p>Address 1</p>
              <label class="flex align-center justify-content-center input">
                <input
                  type="text"
                  placeholder="The Address of the user goes here"
                />
              </label>
            </div>
            <div>
              <p>Address 2</p>
              <label class="flex align-center justify-content-center input">
                <input type="text" placeholder="and here" />
              </label>
            </div>

            <div className="location">
              <label>
                <p>Local Government</p>
                <label className="flex align-center justify-content-center input">
                  <input type="text" placeholder="Surulere" />
                </label>
              </label>
              <label className="input-select-location">
                <p>State</p>
                <label className="flex align-center justify-content-center input-select">
                  <select>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Kano</option>
                    <option>Anambra</option>
                  </select>
                </label>
              </label>
            </div>

            <div className="flex align-center forward">
              <Link to="/billing" className="btn">
                Next
              </Link>
              <Link to="/" className="link-page">
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
