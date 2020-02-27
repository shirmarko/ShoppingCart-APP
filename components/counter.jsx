import React, { Component } from "react";

class Counter extends Component {
  render() {
    let classes = this.getBadge();

    return (
      <div>
        <h1 className="badge m-4 ">Item {this.props.counter.id}</h1>
        <span className={classes}>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-outline-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
