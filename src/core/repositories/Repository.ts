/* tslint:disable:variable-name */
import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {createHttpService} from '../helpers/http';
import {PERMISSION_KEY, PROFILE_KEY, PROFILE_SUB_KEY, TOKEN_KEY} from "../configs/consts";
import {localStorageRead, localStorageSave} from "../../utils/LocalStorageUtils";

export class Repository {

  private static _defaultRequestInterceptor: (v: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;

  private static _defaultResponseInterceptor: (v: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>;

  protected http: AxiosInstance;

  constructor(
    config: AxiosRequestConfig,
    isAuthen: boolean = true,
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig,
    responseInterceptor?: <T>(response: AxiosResponse<T>) => AxiosResponse<T>,
  ) {
    this.http = createHttpService(config, requestInterceptor, responseInterceptor);
    if (typeof Repository._defaultRequestInterceptor === 'function') {
      if(!isAuthen)
      { // @ts-ignore
        this.http.interceptors.request.use(Repository._defaultRequestInterceptor);
      }
      else
        this.http.interceptors.request.use(async config => {
        let token: any =  localStorageRead(TOKEN_KEY);
        let profilePartner: any =  localStorageRead(PROFILE_SUB_KEY);
        // @ts-ignore
          config.headers = {
          ...config.headers,
        };
        if (config && isAuthen) {
          // @ts-ignore
          config.headers = {
            ...config.headers
          };
          if(token)
            config.headers.pvi_token=token;
          if(profilePartner&&profilePartner.token){
            config.headers.pvi_token_doitac=profilePartner.token;
          }
        }
        return config;
      });
    }
    if (typeof Repository._defaultResponseInterceptor === 'function') {
      // @ts-ignore
      this.http.interceptors.response.use((res: AxiosResponse<any>)=>{
        if(res.data.Status<0&&res.data.Status!=='000'&&res.data.Status!=='00'){
          if(res.data.Status==-401){
            localStorageSave(TOKEN_KEY,null);
            localStorageSave(PROFILE_KEY,null);
            localStorageSave(PROFILE_SUB_KEY,null);
            localStorageSave(PERMISSION_KEY,null);
            window.location.href='#/login';
          }else
          return Promise.reject(res);
        }
        else
        return res;
      },(error: AxiosError)=>{
        if (error?.response?.status) {
          switch (error.response.status) {
            case 401:
              localStorageSave(TOKEN_KEY,null);
              localStorageSave(PERMISSION_KEY,null);
              localStorageSave(PROFILE_KEY,null);
              window.location.href='#/login';
              break;
            case 500:
              // M24Notification.notifyError('Thất bại','Xảy ra lỗi. Vui lòng liên hệ kỹ thuật');
              break;
          }
        }
        return Promise.reject(error);
      });
    }
  }

  public setBaseURL(baseURL: string) {
    this.http.defaults.baseURL = baseURL;
  }

  public getHttpInstance(): AxiosInstance {
    return this.http;
  }

  static set defaultRequestInterceptor(value: (v: AxiosRequestConfig) => (AxiosRequestConfig | Promise<AxiosRequestConfig>)) {
    this._defaultRequestInterceptor = value;
  }

  static set defaultResponseInterceptor(value: (v: AxiosResponse<any>) => (AxiosResponse<any> | Promise<AxiosResponse<any>>)) {
    this._defaultResponseInterceptor = value;
  }
}
