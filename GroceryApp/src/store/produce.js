import produceData from '../mockData/produce.json';

const POPULATE = "produce/POPULATE";
const LIKE = "produce/LIKE"

export const likeProduce = (produce) => {
    return {
        type: LIKE,
        produce
    }
}

export const populateProduce = (produce) => {
    return {
        type: POPULATE,
        produce: produceData
    };
};

export default function produceReducer(state = {}, action) {
    const nextState = Object.assign({}, Object.freeze(state));
    switch (action.type) {
        case POPULATE:
            action.produce.forEach(produce => {
                nextState[produce.id] = produce;
            });
            return nextState;
        case LIKE:
            // debugger
            nextState[action.produce.liked] = !nextState[action.produce.liked]
            // nextState[action.produce.liked] = false : 
            // nextState[action.produce.liked] = true;
            return nextState;
        default: 
            return nextState;
    }
}