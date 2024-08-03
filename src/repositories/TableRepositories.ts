
import md5 from 'md5';
import {Repository} from '../core/repositories/Repository';
import {AxiosResponse} from 'axios';
import {httpConfig} from "../core/configs/http";
import {API_BASE_URL, API_KEY, CPID, STANDARD_DATE_FORMAT2} from "../core/configs/consts";
import lodash from "lodash";
import {formatDate} from "../core/helpers/date-time";
import moment from 'moment';


export function sign(value: string){
    return md5(`${API_KEY}${value}`);
  }
  
  export class BHXHRepository extends Repository {
      constructor() {
          super(httpConfig);
          this.setBaseURL('https://apistg.pvi.com.vn')
      }
  
      public getList = (filter?: any, ma_donvi?: string, userId?: string): Promise<any> => {
          let body={
              CpId:CPID,
              tu_ngay: lodash.get(filter,'tu_ngay',''),
              den_ngay: lodash.get(filter,'den_ngay',''),
              ma_ctu: lodash.get(filter,'ma_ctu',''),
              ma_so_bhxh: lodash.get(filter,'ma_so_bhxh',''),
              trang_thai_thanh_toan: lodash.get(filter,'trang_thai_thanh_toan',''),
              ho_ten: lodash.get(filter,'ho_ten',''),
              phuong_an: lodash.get(filter,'phuong_an',''),
              So_cmt: lodash.get(filter,'So_cmt',''),
              tu_ngay_bienlai_dt: lodash.get(filter,'tu_ngay_bienlai_dt',''),
              den_ngay_bienlai_dt: lodash.get(filter,'den_ngay_bienlai_dt',''),
              so_bien_lai_dt: lodash.get(filter,'so_bien_lai_dt',''),
              ma_user_nvt: lodash.get(filter,'ma_user_nvt',''),
              ma_user:filter.ma_user?filter.ma_user:userId,
              ma_donvi:filter.ma_donvi?filter.ma_donvi:ma_donvi,
              Sign: sign('')
          };
          return this.http
              .post(`/BHXH/Get_listBHXH`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data?.ListData;
              });
      };
      public getListByBLDT = (filter?: any, ma_donvi?: string, userId?: string): Promise<any> => {
          let body={
              CpId:CPID,
              maDonVi_bhxh: lodash.get(filter,'maDonVi_bhxh',''),
              tu_ngay: lodash.get(filter,'tu_ngay',''),
              den_ngay: lodash.get(filter,'den_ngay',''),
              ma_ctu: lodash.get(filter,'ma_ctu',''),
              ma_so_bhxh: lodash.get(filter,'ma_so_bhxh',''),
              trang_thai_thanh_toan: lodash.get(filter,'trang_thai_thanh_toan',''),
              ho_ten: lodash.get(filter,'ho_ten',''),
              phuong_an: lodash.get(filter,'phuong_an',''),
              So_cmt: lodash.get(filter,'So_cmt',''),
              tu_ngay_bienlai_dt: lodash.get(filter,'tu_ngay_bienlai_dt',''),
              den_ngay_bienlai_dt: lodash.get(filter,'den_ngay_bienlai_dt',''),
              so_bien_lai_dt: lodash.get(filter,'so_bien_lai_dt',''),
              ma_user_nvt: lodash.get(filter,'ma_user_nvt',''),
              MaDiemThu: lodash.get(filter,'MaDiemThu',''),
              ma_user:filter.ma_user?filter.ma_user:userId,
              ma_donvi:filter.ma_donvi?filter.ma_donvi:ma_donvi,
              app:filter.ma_ctu?false:true,
              Sign: sign('')
          };
          return this.http
              .post(`/BHXH/Get_listBHXH`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data?.ListData;
              });
      };
      public getListOther = (filter?: any, ma_donvi?: string, userId?: string): Promise<any> => {
          let body={
              CpId:CPID,
              tu_ngay: lodash.get(filter,'tu_ngay',''),
              den_ngay: lodash.get(filter,'den_ngay',''),
              ma_ctu: lodash.get(filter,'ma_ctu',''),
              ma_so_bhxh: lodash.get(filter,'ma_so_bhxh',''),
              ho_ten: lodash.get(filter,'ho_ten',''),
              phuong_an: lodash.get(filter,'phuong_an',''),
              trang_thai_thanh_toan: lodash.get(filter,'trang_thai_thanh_toan',''),
              So_cmt: lodash.get(filter,'So_cmt',''),
              ma_user:filter.ma_user?filter.ma_user:userId,
              ma_donvi:filter.ma_donvi?filter.ma_donvi:ma_donvi,
          };
          return this.http
              .post(`/BHXH/Get_listBHXH_KHAC`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data?.ListData;
              });
      };
      public getListToPayment = (filter?: any, ma_donvi?: string, userId?: string): Promise<any> => {
          let body={
              CpId:CPID,
              tu_ngay: lodash.get(filter,'tu_ngay',''),
              den_ngay: lodash.get(filter,'den_ngay',''),
              ma_ctu: lodash.get(filter,'ma_ctu',''),
              ma_so_bhxh: lodash.get(filter,'ma_so_bhxh',''),
              ho_ten: lodash.get(filter,'ho_ten',''),
              phuong_an: lodash.get(filter,'phuong_an',''),
              So_cmt: lodash.get(filter,'So_cmt',''),
              ma_user:userId,
              ma_donvi:ma_donvi,
              app:filter.ma_ctu?false:true,
              Sign: sign('')
          };
          return this.http
              .post(`/BHXH/Get_listBHXH_GOM_THANHTOAN`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data?.ListData;
              });
      };
      public getListToExport = (filter?: any, ma_donvi?: string, ma_user?: string): Promise<any> => {
          let body={
              CpId:CPID,
              ma_thanhtoan: lodash.get(filter,'ma_thanhtoan',''),
              tu_ngay: lodash.get(filter,'tu_ngay',''),
              den_ngay: lodash.get(filter,'den_ngay',''),
              tu_ngay_bienlai: lodash.get(filter,'tu_ngay_bienlai',''),
              den_ngay_bienlai: lodash.get(filter,'den_ngay_bienlai',''),
              tu_ngay_bhyt: lodash.get(filter,'tu_ngay_bhyt',''),
              den_ngay_bhyt: lodash.get(filter,'den_ngay_bhyt',''),
              tu_thang_bhxh: lodash.get(filter,'tu_thang_bhxh',''),
              ma_ctu: lodash.get(filter,'ma_ctu',''),
              ma_so_bhxh: lodash.get(filter,'ma_so_bhxh',''),
              trang_thai_thanh_toan: lodash.get(filter,'trang_thai_thanh_toan',''),
              ho_ten: lodash.get(filter,'ho_ten',''),
              phuong_an: lodash.get(filter,'phuong_an',''),
              So_cmt: lodash.get(filter,'So_cmt',''),
              maDonVi_bhxh: lodash.get(filter,'maDonVi_bhxh',''),
              maDmBhxh  : lodash.get(filter,'maDmBhxh',''),
              ma_user_nvt  : lodash.get(filter,'ma_user_nvt',''),
              ma_donvi:ma_donvi,
              ma_user: filter.ma_user?filter.ma_user: ma_user,
              Sign: sign('')
          };
          return this.http
              .post(`/BHXH/Get_listBHXH`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data?.ListData;
              });
      };
      public create = (data: any): Promise<any> => {
          let body={
              ...data,
              CpId:CPID,
              Sign: sign(`${data.ma_ctu}${data.so_bien_lai}${data.tong_tien_NTG_dong}${data.Muc_tien_dong_bhyt}`)
          };
          return this.http
              .post(`/BHXH/Input_BHXH`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public createOther = (data: any): Promise<any> => {
          let body={
              ...data,
              CpId:CPID,
          };
          return this.http
              .post(`/BHXH/Input_BHXH_KHAC`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public getDetail = (pr_key: any=0,ma_so_bhxh:string='', ma_ctu: string='', noi_moi: boolean = false): Promise<any> => {
          let body={
              pr_key,
              ma_so_bhxh,
              ma_ctu,
              noi_moi,
              CpId:CPID,
              Sign: sign('')
          };
          return this.http
              .post(`/BHXH/Get_BHXH`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public getDetailOther = (pr_key: any=0,ma_so_bhxh:string='', ma_ctu: string='', noi_moi: boolean = false): Promise<any> => {
          let body={
              pr_key,
              ma_so_bhxh,
              ma_ctu,
              noi_moi,
              CpId:CPID,
          };
          return this.http
              .post(`/BHXH/Get_BHXH_KHAC`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public delete = (pr_key: any=0,ma_so_bhxh:string='',ma_user: string, ma_ctu: string): Promise<any> => {
          let body={
              pr_key,
              ma_so_bhxh,
              ma_user,
              ma_ctu,
              CpId:CPID,
              Sign: sign(pr_key)
          };
          return this.http
              .post(`/BHXH/delete_BHXH`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public cancel = (pr_key: any=0, reason:string): Promise<any> => {
          let body={
              pr_key,
              LyDoHuy: reason,
              CpId:CPID,
              Sign: sign(pr_key)
          };
          return this.http
              .post(`/BHXH/HuyToKhai`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public deleteOther = (pr_key: any=0): Promise<any> => {
          let body={
              pr_key,
              CpId:CPID,
          };
          return this.http
              .post(`/BHXH/delete_BHXH_KHAC`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public resendBLDT = (pr_key: any=0, sms: boolean, so_dien_thoai: string): Promise<any> => {
          let body={
              pr_key,
              Sign: sign(pr_key),
              CpId:CPID,
              sms,
              so_dien_thoai
          };
          return this.http
              .post(`/BHXH/GuiLaiTinNhanBienLai`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public importExcel = (ListData: any, maCtu: string, maUser: string): Promise<any> => {
          let body={
              ListData,
              CpId:CPID,
              ma_ctu: maCtu,
              ma_user: maUser,
              Sign: sign(`${maCtu}${maUser}`)
          };
          return this.http
              .post(`/BHXH/Import_BHXH`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public onSearch = (filter?: any): Promise<any> => {
          let body={
              CpId:CPID,
              ...filter,
              maTinh: lodash.get(filter,'maTinh',''),
              maHuyen: lodash.get(filter,'maHuyen',''),
              maXa: lodash.get(filter,'maXa',''),
              hoTen: lodash.get(filter,'hoTen',''),
              isCoDau: lodash.get(filter,'isCoDau',1),
              soCmnd: lodash.get(filter,'soCmnd',''),
              ngaySinh: filter.ngaySinh?formatDate(moment(filter.ngaySinh), STANDARD_DATE_FORMAT2):'',
              Sign: sign(filter.maTinh)
          };
          return this.http
              .post(`/BHXH/GET_TCMSBHXH_API`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
      public onSearchHGD = (smaSoBHXH: string): Promise<any> => {
          let body={
              CpId:CPID,
              smaSoBHXH,
              Sign: sign(smaSoBHXH)
          };
          return this.http
              .post(`/BHXH/GET_TCDSTVTMSBHXH_API`, body)
              .then((response: AxiosResponse<any>) => {
                  return response.data;
              });
      };
  }
  
  export const bhxhRepository: BHXHRepository = new BHXHRepository();
  