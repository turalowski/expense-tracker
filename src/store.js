import { createStore } from "redux";
import reducer from './reducers/reducer'
import throttle from 'lodash.throttle';
import {loadState, saveState} from './localStorage'


const persistedState = loadState(); 
const store = createStore(reducer,persistedState);

store.subscribe(throttle(() => {
    saveState( store.getState());
  }, 10));

export default store;
