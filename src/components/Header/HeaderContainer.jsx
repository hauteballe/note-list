import React from "react";
import { useSelector, useDispatch } from "react-redux";

import authApi from "api/auth";
import { actions } from "store/features/userSlice";

import Header from "./Header";

const HeaderContainer = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onClick = () => {
    authApi.logOut();
    dispatch(actions.remove());
  };

  return <Header props={props} onClick={onClick} user={user} />;
};

export default HeaderContainer;
