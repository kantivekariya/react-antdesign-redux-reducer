import axios from "axios";
import * as types from "../actionType";
import config from "../../../config/Config";

// Add Tax
export function salesItem(params) {
    return async dispatch => {
        dispatch({ type: types.CREATE_SALES_REQUEST });
        try {
            const res = await axios.post(`${config.BASE_URL}/sales`, params);
            dispatch({ type: types.CREATE_SALES_SUCCESS, payload: res });
            return res;
        } catch (error) {
            dispatch({ type: types.CREATE_SALES_FAILURE });
            return Promise.reject(error);
        }
    };
}