import axios, { AxiosRequestConfig } from 'axios';

import type Users from '.';

import {
  ResponseDataUsersGet
} from './responsesData';

import API_BASE_URL from '..';

export const getAllUsers = async (): Promise<ResponseDataUsersGet> => {
  const request: AxiosRequestConfig = {
    url: `${API_BASE_URL}/users`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios(request);

  const responseData: ResponseDataUsersGet = {
    message: response.data.message,
    data: {
      users: response.data.data as Users,
    }
  };

  return Promise.resolve(responseData);
}
