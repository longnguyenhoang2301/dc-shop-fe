import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { transformAPIContent } from '../helpers/data';
import { Repository } from '../repositories/Repository';
import {
  transformAPIRequestValue,
  transformAPIResponseValue,
} from '../helpers/api';
import { API_BASE_URL } from '../configs/consts';

Repository.defaultRequestInterceptor = requestInterceptor;

Repository.defaultResponseInterceptor = responseInterceptor;

export function requestInterceptor(
  config: AxiosRequestConfig,
): AxiosRequestConfig {
  if (typeof config.params === 'object' && config.params !== null) {
    config.params = transformAPIContent(
      config.params,

      undefined,
      transformAPIRequestValue,
    );
  }
  if (typeof config.data === 'object' && config.data !== null) {
    if (config.headers&&config.headers['Content-Type'] === 'application/json') {
      config.data = transformAPIContent(
        config.data,
        undefined,
        transformAPIRequestValue,
      );
    }
  }
  return config;
}

export function responseInterceptor<T>(response: AxiosResponse<T>) {
  if (typeof response.data === 'object' && response.data !== null) {
    if (response.headers['Content-Type'] === 'application/json') {
      response.data = transformAPIContent(
        response.data as any,
        undefined,
        transformAPIResponseValue,
      );
    }
  }
  return response;
}

export const httpConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};
