
import produceData from '../mockData/produce.json';

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const EMPTY_CART = "EMPTY_CART";
const UPDATE_COUNT = "UPDATE_COUNT"

export const updateCount = (item) => {
    return {
        type: UPDATE_COUNT,
        item
    }
}

export const addItem = (produceId) => {
    const item = produceData.find(produce => produce.id === produceId);
    // debugger
    return {
        type: ADD_ITEM,
        cart: item
    }
}

export const removeItem = (produceId) => {
    // const item = produceData.find(produce => produce.id === produceId);
    // const produceId = item.id
    return {
        type: REMOVE_ITEM,
        produceId
    };
};

export const emptyCart = (cart) => {
    return {
        type: EMPTY_CART,
        cart
    }
}

export default function cartReducer(state = {}, action) {
    const nextState = Object.assign({}, Object.freeze(state));
    switch (action.type) {
        case ADD_ITEM:
            nextState[action.cart.id] = {
                id: action.cart.id,
                count: 1
            };
            return nextState;
        case REMOVE_ITEM:
            delete nextState[action.produceId];
            return nextState;
        case EMPTY_CART:
            return {};
        case UPDATE_COUNT:
            nextState[action.item.count] = count;
            return nextState;
        default:
            return nextState;
    }
}