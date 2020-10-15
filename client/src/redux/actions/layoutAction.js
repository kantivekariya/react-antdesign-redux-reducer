import * as types from './actionType';
export function layoutToggele() {
  return async (dispatch) => {
    dispatch({ type: types.LAYOUT_SIDEBAR_TOGGLE });
  };
}
