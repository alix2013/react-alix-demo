import React from "react";
import { BaseComponent } from "react-alix";

export default class Counter extends BaseComponent {
  store = this.props.store.counterStore;

  componentDidMount() {
    super.componentDidMount();
    this.dispatch(this.store, "monitorState");
  }

  componentWillUnmount() {
    this.dispatch(this.store, "unMonitorState");
  }
  render() {
    this.debug("Store in render:", this.store, this.store.count);
    console.debug();
    // this.debug("line:", /\(file:[\w\d/.-]+:([\d]+)/.exec(new Error().stack)[0]);
    return (
      <div className="title">
        <h2> Counter Demo ( View - ViewModel ) </h2>
        {/* <input ref={c => (this._input = c)} /> */}
        <div className="counter">
          <button
            className="counter-button"
            type="button"
            id="incrButton"
            onClick={() => this.dispatch(this.store, "increaseAction")}
          >
            +
          </button>
          <span id="countValue">{this.store.count}</span>
          <button
            className="counter-button"
            id="decreseButton"
            type="button"
            onClick={() => this.dispatch(this.store, "decreaseAction")}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
