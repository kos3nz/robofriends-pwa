import React, { Component } from "react";
import "./CounterButton.css";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      console.log(nextProps, nextState);
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <button
        className="count-button"
        style={{ color: this.props.color }}
        onClick={this.updateCount}
      >
        Count : {this.state.count}
      </button>
    );
  }
}

export default CounterButton;