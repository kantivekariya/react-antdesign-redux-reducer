import produce from 'immer';
import * as types from '../../actions/actionType';

const initialState = {
    taxes: {
        data: []
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

        default:
            return draft;
    }
};

export const taxesReducer = produce(TaxesRecipe);