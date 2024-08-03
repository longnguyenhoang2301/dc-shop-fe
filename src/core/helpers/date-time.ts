import {
  STANDARD_DATE_FORMAT,
  STANDARD_DATE_TIME_FORMAT, STANDARD_MONTH_FORMAT,
  STANDARD_TIME_FORMAT,
  STANDARD_TIME_FORMAT2
} from '../configs/consts';
import moment, {Moment} from 'moment';

export function formatDate(date: Moment| number, dateFormat: string = STANDARD_DATE_FORMAT) {
  if(!date) return '';
  if (typeof date === 'object' && 'format' in date) {
    return date.format(dateFormat);
  }
  if (typeof date === 'number') {
    date = moment("1900-01-01").add(date - 2, 'days');
  }
  return moment(date).format(dateFormat);
}
export function formatMonth(month: Moment | number, monthFormat: string = STANDARD_MONTH_FORMAT) {
  if (!month) return '';
  if (typeof month === 'object' && 'format' in month) {
    return month.format(monthFormat);
  }
  if (typeof month === 'number') {
    // Assuming the input number represents a month (1 to 12)
    const year = 1900;
    const day = 1;
    month = moment(`${year}-${month}-${day}`, STANDARD_DATE_FORMAT);
  }
  return moment(month).format(monthFormat);
}
export function formatTime(time: Moment, timeFormat: string = STANDARD_TIME_FORMAT2) {
  if (typeof time === 'object' && 'format' in time) {
    return time.format(timeFormat);
  }
  return moment(time).format(timeFormat);
}

export function formatDateTime(time: Moment, dateTimeFormat: string = STANDARD_DATE_TIME_FORMAT) {
  if (typeof time === 'object' && 'format' in time) {
    return time.format(dateTimeFormat);
  }
  return moment(time).format(dateTimeFormat);
}

export function isDateValue(date?: string) {
  // console.log(date);
  return date?.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/);
}

export function isTimeValue(time?: string) {
  return time?.match(/[0-9]{2}:[0-9]{2}/);
}
export function disableDateOtherYear(currentDate: any){
  return currentDate && currentDate.year() !== moment().year();
}
export function disableDateFuture(currentDate: any, isSame:boolean=false){
  return currentDate && (isSame?currentDate.isSameOrAfter(moment()):currentDate.isAfter(moment()));
}
export function isSameOrBefore(currentDate: any){
  return currentDate && currentDate.isBefore(moment(), 'day');
}
export function disableMonthFromCurrentMonth(currentDate: any){
  return currentDate && currentDate.isSameOrAfter(moment(),'month');
}
export function disableFutureMonth(currentDate: any){
  return currentDate && currentDate.isAfter(moment(),'month');
}
export function disablePastMonth(currentDate: any){
  return currentDate && currentDate.isBefore(moment(),'month');
}
export function isMomentValid(value: any,format: string=STANDARD_DATE_FORMAT){
  if(!value) return false;
  return moment(value.toString().trim(), format, true).isValid()
}
export function getYear(str: string){
  if(!str) return null;
  let year: any;
  if(str.indexOf("/")>0){
      year = str.substring(str.lastIndexOf('/')+1);
  }else year = str;
  return moment(year,'YYYY')
}
