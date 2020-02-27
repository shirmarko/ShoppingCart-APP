import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light ">
        <a className="navbar-brand" href="#">
          SHOPPING CART{" "}
          <span className="badge badge-pill bagde-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
