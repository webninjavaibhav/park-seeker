import { IAction } from '../IAction';
import { IEvents } from './IEvents';
import {
  GET_EVENTS_FAILURE,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
} from './eventTypes';

/**
 * Call on Event Request
 */
export const getEventsRequest = (): IAction => {
  return {
    type: GET_EVENTS_REQUEST,
  };
};

/**
 * Call on Event Success
 * @param events
 */
export const getEventsSuccess = (events: IEvents[]): IAction => {
  return {
    type: GET_EVENTS_SUCCESS,
    payload: events,
  };
};

/**
 * Call on Event Failure
 * @param error
 */
export const getEventsFailure = (error: string): IAction => {
  return {
    type: GET_EVENTS_FAILURE,
    payload: error,
  };
};
