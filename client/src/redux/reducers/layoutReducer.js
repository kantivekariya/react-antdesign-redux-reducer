import initialState from "./initialState";
import * as types from "../actions/actionType";

export const layoutReducer = (state = initialState.layout, action) => {
  switch (action.type) {
    case types.LAYOUT_SIDEBAR_TOGGLE:
      return {
        ...state,
        collapsed: !state.collapsed
      };
    default:
      return state;
  }
};
