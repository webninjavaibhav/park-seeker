import { IAction } from '../IAction';
import { IThings } from './IThings';
import {
  GET_THINGS_REQUEST,
  GET_THINGS_SUCCESS,
  GET_THINGS_FAILURE,
} from './thingTypes';

/**
 * Things Interface
 */
export interface IThingsState {
  loading: boolean;
  things: IThings[];
  error: string;
}

const initialState: IThingsState = {
  loading: false,
  things: [],
  error: '',
};

/**
 * Reducer for Park based on Park Code
 * @param state
 * @param action
 */
const thingReducer = (state = initialState, action: IAction): IThingsState => {
  switch (action.type) {
    case GET_THINGS_REQUEST:
      return {
        ...state,
        loading: true,
        things: initialState.things,
        error: '',
      };
    case GET_THINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        things: action.payload,
        error: '',
      };
    case GET_THINGS_FAILURE:
      return {
        loading: false,
        things: initialState.things,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default thingReducer;
