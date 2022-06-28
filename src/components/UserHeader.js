import React, { useEffect } from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
  const { user } = props;
  console.log(props);
  if (!user) {
    return null;
  }
  console.log(user);
  return <div className="header">{user.name}</div>;
};

const mapStateToProp = (state, ownProps) => {
  return { users: state.users.find((user) => user.id === ownProps.userId) };
};
export default connect(mapStateToProp)(UserHeader);
