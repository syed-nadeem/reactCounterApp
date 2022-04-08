import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-secondary btn-sm m-3"
        >
          Reset
        </button>
        {this.props.counters.map((cou) => (
          <Counter
            key={cou.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={cou}
          >
            {/* <h4>Counter N0 : {cou.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
