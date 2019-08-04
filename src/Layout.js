import React from "react";
import { getUsers } from "./actions/userActions";
// import * as actionCreators from "./actions/userActions";
import { connect } from "react-redux";

class Layout extends React.Component {
  render() {
    return <div>{console.log(this.props.userdata)}</div>;
  }
}

const mapStateToProps = state => ({
  userdata: state.payload
});

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
