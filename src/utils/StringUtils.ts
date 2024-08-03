/**
 *
 * @param text
 * @returns {string}
 */
import lodash from "lodash";
import {Dispatch, SetStateAction} from "react";
/**
 * Supported search many item
 * @param key
 * @param value
 */
export function handleInputChangeMany(key: string, value: any, filter: any, setFilter: Dispatch<SetStateAction<any>>) {
    let temp = lodash.merge({}, filter);
    let realValues = lodash.get(temp, key, []);

    if (realValues.length) {
        realValues = realValues.split(',');
    }
    if (realValues.indexOf(value) >= 0) {
        realValues = lodash.filter(realValues, n => n !== value);
    } else {
        if (realValues === '') {
            realValues = [];
        }
        realValues.push(value);
    }
    temp[key] = realValues.join();
    if (realValues.length === 0) {
        delete temp[key];
    }
    // return temp;
    setFilter(temp);
}
/**
 * Input change
 * @param key
 * @param value
 * @returns {{}}
 */
export function handleInputChange(key: string, value: any, filter: any, setFilter: Dispatch<SetStateAction<any>>){
    let temp = lodash.merge({}, filter);
    temp[key] = value;
    if (value===null||value===""||value ==undefined) {
        delete temp[key];
    }
    setFilter(temp);
    // return temp;
};
/**
 * Select range of date
 * @param e
 * @param from
 * @param to
 */
export function handleChangeRangeDate(dateString: string[], from:string, to:string, filter: any, setFilter: Dispatch<SetStateAction<any>>) {
    let temp = lodash.merge({}, filter);
    if (dateString && dateString.length) {
        temp[from] = dateString[0];
        temp[to] = dateString[1];
    } else {
        delete temp[from];
        delete temp[to];
    }
    setFilter(temp);
    // return temp;
}