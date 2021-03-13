import { IAction } from '../IAction';
import { IParks } from './IParks';
import {
  GET_PARKS_FAILURE,
  GET_PARKS_REQUEST,
  GET_PARKS_SUCCESS,
  GET_PARK_FAILURE,
  GET_PARK_REQUEST,
  GET_PARK_SUCCESS,
} from './parkTypes';

//Call on Parks Request
export const getParksRequest = (): IAction => {
  return {
    type: GET_PARKS_REQUEST,
  };
};

//Call on Parks Success
export const getParksSuccess = (parks: IParks[]): IAction => {
  return {
    type: GET_PARKS_SUCCESS,
    payload: parks,
  };
};

//Call on Parks Failure
export const getParksFailure = (error: string): IAction => {
  return {
    type: GET_PARKS_FAILURE,
    payload: error,
  };
};

//Call on Park Request
export const getParkRequest = (): IAction => {
  return {
    type: GET_PARK_REQUEST,
  };
};

//Call on Park Success
export const getParkSuccess = (park: IParks): IAction => {
  return {
    type: GET_PARK_SUCCESS,
    payload: park,
  };
};

//Call on Park Failure
export const getParkFailure = (error: string): IAction => {
  return {
    type: GET_PARK_FAILURE,
    payload: error,
  };
};
