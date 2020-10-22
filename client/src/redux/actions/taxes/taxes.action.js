import axios from "axios";
import * as types from "../actionType";
import config from "../../../config/Config";

// Add Tax
export function addTax(params) {
    return async dispatch => {
        dispatch({ type: types.CREATE_TAX_REQUEST });
        try {
            const res = await axios.post(`${config.BASE_URL}/tax`, params);
            dispatch({ type: types.CREATE_TAX_SUCCESS, payload: res });
            return res;
        } catch (error) {
            dispatch({ type: types.CREATE_TAX_FAILURE });
            return Promise.reject(error);
        }
    };
}

export function getAllTaxes() {
    return async dispatch => {
        dispatch({ type: types.TAX_LIST_REQUEST });
        try {
            const res = await axios.get(`${config.BASE_URL}/tax`);
            dispatch({ type: types.TAX_LIST_SUCCESS, payload: res });
            return res;
        } catch (error) {
            dispatch({ type: types.TAX_LIST_FAILURE });
            return Promise.reject(error);
        }
    };
}