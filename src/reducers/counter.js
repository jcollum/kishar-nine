import * as actions from '../actions/actionTypes';

const initialState = {
    count: 0
};

export default function reducer(state = initialState, action = {}) {

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
        case actions.busy:
            console.log("busy...");
            return {
                ...state,
                busy: true
            };
        case actions.done:
            console.log("done!");
            return {
                ...state,
                busy: false
            };

        default:
            return state;
    }
}
