import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState={counter:0,showCounter:true}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
        state.showCounter = !state.showCounter;
      }
    }
  });

// const counterReducder = (state = initialState,actions) => {
//     if(actions.type === 'increment'){
//         return{
//             counter:state.counter+1,
//             showCounter:state.showCounter
//         }
//     }
//     if(actions.type === 'decrement'){
//         return{
//             counter:state.counter-1,
//             showCounter:state.showCounter
//         }
//     }
//     if(actions.type === 'increase'){
//         return{
//             counter:state.counter+actions.amount,
//             showCounter:state.showCounter
//         }
//     }

//     if(actions.type==='toggle'){
//         return{
//             counter:state.counter,
//             showCounter:!state.showCounter
//         }
//     }

//     return state;
// };

// const store = createStore(counterReducder);

const store = configureStore({
    reducer: counterSlice.reducer
  });

export const counterActions = counterSlice.actions;
export default store;