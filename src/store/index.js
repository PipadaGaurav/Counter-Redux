import { createStore } from "redux";

const counterReducder = (state = {counter:0},actions) => {
    if(actions.type === 'increment'){
        return{
            counter:state.counter+1
        }
    }
    if(actions.type === 'decrement'){
        return{
            counter:state.counter-1
        }
    }

    return state;
};

const store = createStore(counterReducder);

export default store;