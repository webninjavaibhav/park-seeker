import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import {
  getEventsFailure,
  getEventsRequest,
  getEventsSuccess,
} from './eventActions';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

/**
 * Service for Events
 * @param parkCode
 */
export const getEvents = (parkCode: any) => {
  return (dispatch: Dispatch) => {
    dispatch(getEventsRequest());
    axios
      .get(
        `events?parkCode=${parkCode}&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response: AxiosResponse) => {
        dispatch(getEventsSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getEventsFailure(error.response.data.error));
      });
  };
};
