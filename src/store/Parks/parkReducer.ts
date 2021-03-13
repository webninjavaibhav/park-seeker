import { IAction } from '../IAction';
import { IParks } from './IParks';
import {
  GET_PARKS_FAILURE,
  GET_PARKS_SUCCESS,
  GET_PARKS_REQUEST,
  GET_PARK_FAILURE,
  GET_PARK_SUCCESS,
  GET_PARK_REQUEST,
} from './parkTypes';

/**
 * Park Interface
 */
export interface IParkState {
  loading: boolean;
  parks: IParks[];
  park: IParks;
  error: string;
}

const initialState: IParkState = {
  loading: false,
  parks: [],
  park: {
    images: [],
    operatingHours: [],
    entranceFees: [],
    contacts: {
      phoneNumbers: [],
      emailAddresses: [],
    },
    directionsUrl: '',
    latitude: '',
    longitude: '',
  },
  error: '',
};

/**
 * Reducer for Park based on Search Term
 * @param state
 * @param action
 */
const parkReducer = (state = initialState, action: IAction): IParkState => {
  switch (action.type) {
    case GET_PARKS_REQUEST:
      return {
        ...state,
        loading: true,
        parks: initialState.parks,
        error: '',
      };
    case GET_PARKS_SUCCESS:
      return {
        ...state,
        loading: false,
        parks: action.payload,
        error: '',
      };
    case GET_PARKS_FAILURE:
      return {
        loading: false,
        parks: initialState.parks,
        park: initialState.park,
        error: action.payload,
      };
    case GET_PARK_REQUEST:
      return {
        ...state,
        loading: true,
        park: initialState.park,
        error: '',
      };
    case GET_PARK_SUCCESS:
      return {
        ...state,
        loading: false,
        park: action.payload,
        error: '',
      };
    case GET_PARK_FAILURE:
      return {
        loading: false,
        park: initialState.park,
        parks: initialState.parks,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default parkReducer;
