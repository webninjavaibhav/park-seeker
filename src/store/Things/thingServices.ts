import axios, { AxiosResponse } from 'axios';
import {
  getThingsFailure,
  getThingsRequest,
  getThingsSuccess,
} from './thingActions';
import { Dispatch } from 'redux';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

/**
 * Service for Things
 * @param parkCode
 */
export const getThings = (parkCode: any) => {
  return (dispatch: Dispatch) => {
    dispatch(getThingsRequest());
    axios
      .get(
        `thingstodo?parkCode=${parkCode}&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response: AxiosResponse) => {
        dispatch(getThingsSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getThingsFailure(error.response.data.error));
      });
  };
};
