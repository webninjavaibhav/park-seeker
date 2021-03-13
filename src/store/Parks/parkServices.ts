import axios, { AxiosResponse } from 'axios';
import {
  getParkFailure,
  getParkRequest,
  getParksFailure,
  getParksRequest,
  getParksSuccess,
  getParkSuccess,
} from './parkActions';
import { Dispatch } from 'redux';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

/**
 * Service for Parks
 * @param toggle
 * @param searchTerm
 */
export const getParks = (toggle: boolean, searchTerm: any) => {
  console.log(searchTerm);
  return (dispatch: Dispatch) => {
    dispatch(getParksRequest());
    axios
      .get(
        `parks?${toggle ? 'parkCode' : 'stateCode'}=${searchTerm}&api_key=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then((response: AxiosResponse) => {
        dispatch(getParksSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getParksFailure(error.response.data.error));
      });
  };
};

/**
 * Service for Single Park
 * @param id
 */
export const getParkById = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(getParkRequest());
    axios
      .get(`parks?id=${id}&api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response: AxiosResponse) => {
        dispatch(getParkSuccess(response.data.data[0]));
      })
      .catch((error) => {
        dispatch(getParkFailure(error.response.data.error));
      });
  };
};
