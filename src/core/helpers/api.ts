import {STANDARD_DATE_TIME_FORMAT} from '../configs/consts';
import {isDateValue, isTimeValue} from '../helpers/date-time';
import moment from 'moment';
import { message} from 'antd';

export function transformAPIResponseValue(value?: string | number | boolean): any {
  if (typeof value === 'string') {
    if (isDateValue(value)) {
      return moment(new Date(value));
    }
    if (isTimeValue(value)) {
      return moment(new Date(`1970-01-01 ${value}`));
    }
  }
  return value;
}

export function transformAPIRequestValue(value?: any): any {
  if (typeof value === 'object' && value !== null) {
    if ('_isAMomentObject' in value) {
      return value.format(STANDARD_DATE_TIME_FORMAT);
    }
  }
  return value;
}
export function showError(error: any){
  if (
    typeof error?.response?.data?.errors === 'object' &&
    error?.response?.data?.errors !== null
  ) {
    Object.keys(error.response.data.errors).forEach((key) => {
      message.error(error.response.data.errors[key]);
    });
  }else  message.error('Xảy ra lỗi. Vui lòng thử lại');

}
