import { IAction } from '../IAction';
import { IThings } from './IThings';
import {
  GET_THINGS_FAILURE,
  GET_THINGS_REQUEST,
  GET_THINGS_SUCCESS,
} from './thingTypes';

/**
 * Call on Things Request
 */
export const getThingsRequest = (): IAction => {
  return {
    type: GET_THINGS_REQUEST,
  };
};

/**
 * Call on Things Success
 * @param things
 */
export const getThingsSuccess = (things: IThings[]): IAction => {
  return {
    type: GET_THINGS_SUCCESS,
    payload: things,
  };
};

/**
 * Call on Things Failure
 * @param error
 */
export const getThingsFailure = (error: string): IAction => {
  return {
    type: GET_THINGS_FAILURE,
    payload: error,
  };
};
