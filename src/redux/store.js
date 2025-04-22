import { createStore, combineReducers } from 'redux';
import journalReducer from './reducers/journalReducer';

const rootReducer = combineReducers({
    journal: journalReducer,
});

const store = createStore(rootReducer);

export default store;
