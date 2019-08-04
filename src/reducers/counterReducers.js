export const increment = () => {
  this.props.dispatch({ type: "INCREMENT" });
};

export const decrement = () => {
  this.props.dispatch({ type: "DECREMENT" });
};
