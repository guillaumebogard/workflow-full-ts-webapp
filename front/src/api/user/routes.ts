import axios, { AxiosRequestConfig } from 'axios';

import type User from '.';

import {
  RequestDataUserCreate,
  RequestDataUserGetById,
  RequestDataUserUpdate,
  RequestDataUserDelete,
  RequestDataUserGetByEmail,
} from './requestsData';

import {
  ResponseDataUserCreate,
  ResponseDataUserGetById,
  ResponseDataUserUpdate,
  ResponseDataUserDelete,
  ResponseDataUserGetByEmail,
} from './responsesData';

import API_BASE_URL from '..';

export const createUser = async (requestData: RequestDataUserCreate): Promise<ResponseDataUserCreate> => {
  const request: AxiosRequestConfig = {
    url: `${API_BASE_URL}/user`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      ...requestData.body,
    },
  };

  const response = await axios(request);

  const responseData: ResponseDataUserCreate = {
    message: response.data.message,
    data: {
      user: response.data.data as User,
    }
  };

  return Promise.resolve(responseData);
}

export const getUserById = async (requestData: RequestDataUserGetById): Promise<ResponseDataUserGetById> => {
  const request: AxiosRequestConfig = {
    url: `${API_BASE_URL}/user/${requestData.params.id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios(request);

  const responseData: ResponseDataUserGetById = {
    message: response.data.message,
    data: {
      user: response.data.data as User,
    }
  };

  return Promise.resolve(responseData);
}

export const updateUser = async (requestData: RequestDataUserUpdate): Promise<ResponseDataUserUpdate> => {
  const request: AxiosRequestConfig = {
    url: `${API_BASE_URL}/user/${requestData.params.id}`,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      ...requestData.body,
    },
  };

  const response = await axios(request);

  const responseData: ResponseDataUserUpdate = {
    message: response.data.message,
    data: {
      user: response.data.data as User,
    }
  };

  return Promise.resolve(responseData);
}

export const deleteUser = async (requestData: RequestDataUserDelete): Promise<ResponseDataUserDelete> => {
  const request: AxiosRequestConfig = {
    url: `${API_BASE_URL}/user/${requestData.params.id}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios(request);

  const responseData: ResponseDataUserDelete = {
    message: response.data.message,
    data: {
      user: response.data.data as User,
    }
  };

  return Promise.resolve(responseData);
}

export const getUserByEmail = async (requestData: RequestDataUserGetByEmail): Promise<ResponseDataUserGetById> => {
  const request: AxiosRequestConfig = {
    url: `${API_BASE_URL}/user`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      ...requestData.body,
    },
  };

  const response = await axios(request);

  const responseData: ResponseDataUserGetByEmail = {
    message: response.data.message,
    data: {
      user: response.data.data as User,
    }
  };

  return Promise.resolve(responseData);
}
