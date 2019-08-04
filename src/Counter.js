import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions/actions.js";
// import productList from "./components/ProductList";
import "./Counter.css";

class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>&ndash;</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <hr />
          <button onClick={this.reset}>reset</button>
        </div>
        {/* <productList /> */}
      </div>
    );
  }
}

export default Counter;
// const mapStateToProps = state => ({
//   count: state.count
// });

// const mapDispatchToProps = {
//   increment,
//   decrement,
//   reset
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);
