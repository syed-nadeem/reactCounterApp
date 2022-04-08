import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // tags: ["aa", "ss", "dd"],
  // };
  render() {
    return (
      <div>
        {/* <h4>Counter No : {this.props.id}</h4> */}
        <span style={{ fontSize: 30 }}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }
  // handleIncrement = (pro) => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  // renderTags() {
  //   if (this.state.tags.length === 3) return <p>Empty tags</p>;
  // }
  formatCount() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
