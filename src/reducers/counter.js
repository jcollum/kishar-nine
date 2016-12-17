import * as actions from '../actions/actionTypes';

const initialState = {
    count: 0
};

export default function reducer(state = initialState, action = {}) {
    console.log("accessing counter reducer function...");
    switch (action.type) {
        case actions.increment:
            console.log("+ reducer");
            return {
                ...state,
                count: state.count + 1
            };
        case actions.decrement:
            console.log("- reducer");
            return {
                ...state,
                count: state.count - 1
            };

        default:
            return state;
    }
}
