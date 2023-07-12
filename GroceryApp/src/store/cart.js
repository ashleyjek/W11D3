
import produceData from '../mockData/produce.json';

const ADD_ITEM = "ADD_ITEM";


export const addItem = (produceId) => {
    const item = produceData.find(produce => produce.id === produceId);
    // debugger
    return {
        type: ADD_ITEM,
        cart: item
    }
}

export default function cartReducer(state = {}, action) {
    const nextState = Object.assign({}, Object.freeze(state));
    switch (action.type) {
        case ADD_ITEM:
            // debugger
            nextState[action.cart.id] = {
                id: action.cart.id,
                count: (action.cart.count ||= 0) + 1
            };
            debugger
            return nextState;
        default:
            return nextState;
    }
}