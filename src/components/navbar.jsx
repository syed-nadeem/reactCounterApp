import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <button className="btn btn-secondary ntn-sm m-3">
            {this.props.totalCounters}
          </button>
          Navbar
        </a>
      </nav>
    );
  }
}

export default Navbar;
