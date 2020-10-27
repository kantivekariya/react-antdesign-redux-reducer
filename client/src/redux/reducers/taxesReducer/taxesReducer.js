import produce from "immer";
import * as types from "../../actions/actionType";

const initialState = {
    taxes: {
        data: [],
    }
};

const TaxesRecipe = (draft = initialState, action) => {
    switch (action.type) {
        case types.TAX_LIST_REQUEST:
            break;
        case types.TAX_LIST_SUCCESS:
            return {
                ...draft,
                taxes: {
                    ...draft.taxes,
                    data: action.payload,
                },
            };
        case types.TAX_LIST_FAILURE:
            break;

        case types.CREATE_TAX_REQUEST:
            break;
        case types.CREATE_TAX_SUCCESS:
            break;
        case types.CREATE_TAX_FAILURE:
            break;

        case types.DELETE_TAXESS_REQUEST:
            break;
        case types.DELETE_TAXESS_SUCCESS:
            return {
                ...draft,
                taxes: {
                    ...draft.taxes,
                    data: draft.taxes.data.filter((item, index) => index !== action.payload),
                },
            };
        case types.DELETE_TAXESS_FAILURE:
            break;
        default:
            return draft;
    }
};

export const taxesReducer = produce(TaxesRecipe);
