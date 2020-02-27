import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="component">
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          />
        ))}
        <div className="text-center">
          <button
            onClick={this.props.onReset}
            className="btn btn-outline-dark btn-sm m-5"
          >
            RESET-ALL
          </button>
          <button
            onClick={this.props.onAddItem}
            className="btn btn-outline-success btn-sm m-5"
          >
            ADD-ITEM
          </button>
        </div>
      </div>
    );
  }
}

export default Counters;
