import { createStore } from "redux";
const initialState={counter:0,showCounter:true}

const counterReducder = (state = initialState,actions) => {
    if(actions.type === 'increment'){
        return{
            counter:state.counter+1,
            showCounter:state.showCounter
        }
    }
    if(actions.type === 'decrement'){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }
    if(actions.type === 'increase'){
        return{
            counter:state.counter+actions.amount,
            showCounter:state.showCounter
        }
    }

    if(actions.type==='toggle'){
        return{
            counter:state.counter,
            showCounter:!state.showCounter
        }
    }

    return state;
};

const store = createStore(counterReducder);

export default store;