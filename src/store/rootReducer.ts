import { combineReducers } from 'redux';
import parksReducer from './Parks/parkReducer';
import thingReducer from './Things/thingReducer';
import eventReducer from './Events/eventReducer';

/**
 * Root Reducer
 */
const rootReducer = combineReducers<any>({
  parks: parksReducer,
  things: thingReducer,
  events: eventReducer,
});

export default rootReducer;
