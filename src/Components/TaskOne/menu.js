import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "rgba(12, 12, 85, 0.4)",
      borderColor: "transparent",
    };
  }
  changeClass = (style) => {
    this.setState({
      color: "rgb(190, 190, 33)",
      borderColor: "2px solid rgb(190, 190, 33)",
    });
  };
  render() {
    const style = {
      borderBottom: `20px solid ${this.state.borderColor}`,
      color: this.state.color,
    };
    return (
      <div class="task-one-header">
        <h1>Complete your Purchase</h1>
        {/* tabs */}
        <div>
          <ul className="flex space-between">
            <li style={style} onClick={() => this.changeClass("red")}>
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
