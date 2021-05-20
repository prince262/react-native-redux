import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQ,
  ADMIN_LOGIN_SUCCESS,
  USER_LOGOUT,
 } from "../Types";
  
 export const SignUpReducer = (state = {}, action) => {
  switch (action.type) {
  case ADMIN_LOGIN_REQ:
  return { loading: true };
  case ADMIN_LOGIN_SUCCESS:
  return { loading: false, authInfo: action.payload };
  case ADMIN_LOGIN_FAIL:
  return { loading: false, subError: action.payload };
  case USER_LOGOUT:
  return {};
  default:
  return state;
  }
 };