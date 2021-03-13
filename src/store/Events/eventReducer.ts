import { IAction } from '../IAction';
import { IEvents } from './IEvents';
import {
  GET_EVENTS_FAILURE,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_REQUEST,
} from './eventTypes';

/**
 * Event Interface
 */
export interface IEventsState {
  loading: boolean;
  events: IEvents[];
  error: string;
}

const initialState: IEventsState = {
  loading: false,
  events: [],
  error: '',
};

/**
 * Reducer for Events based on ParkCode
 * @param state
 * @param action
 */
const eventReducer = (state = initialState, action: IAction): IEventsState => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
        events: initialState.events,
        error: '',
      };
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
        error: '',
      };
    case GET_EVENTS_FAILURE:
      return {
        loading: false,
        events: initialState.events,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
