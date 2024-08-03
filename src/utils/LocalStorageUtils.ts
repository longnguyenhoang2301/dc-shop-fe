/**
 * save object to local storage
 * @param key
 * @param data
 */
export function localStorageSave(key: string, data: any) {
    try {
        localStorage.setItem(key, data ? JSON.stringify(data) : data);
    } catch (e) {
        console.log("Cannot save data to local storage", e);
    }
}

/**
 * read localStorage
 * @param key
 * @returns {any}
 */
export function localStorageRead(key: string) {
    if (localStorage == null || typeof key !== 'string') {
        throw new Error("fail to read object to localStorage");
    }
    let result = localStorage.getItem(key);
    if(result) return JSON.parse(result);
   else return '';
}

export function localStorageClear() {
    localStorage.clear();
}

/**
 * delete localStorage
 * @param key
 */
export function localStorageRemoveItem(key:string) {
  try {
      localStorage.removeItem(key)
  } catch (err) {
      console.log('cannot remove localStorage item',err)
  }
}
