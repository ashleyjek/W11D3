import produceData from '../mockData/produce.json';

const POPULATE = "produce/POPULATE";

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
            // debugger
            return nextState;
        default: 
            return nextState;
    }
}