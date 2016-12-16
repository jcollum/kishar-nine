import * as actions from '../actions/actionTypes';

const initialState = {
    count: 0
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.increment:
            return {
                ...state,
                count: state.count + 1
            };
        case actions.decrement:
            {
                return {
                    ...state,
                    count: state.count - 1
                };
            }

        default:
            return state;
    }
}
