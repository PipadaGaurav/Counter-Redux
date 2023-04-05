import {configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';

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
    reducer: { counter: counterReducer, auth: authReducer },
  });
  
  export default store;