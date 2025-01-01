import type { CloudStorageGetItemCallback, CloudStorageGetItemsCallback, CloudStorageGetKeysCallback, CloudStorageRemoveItemCallback, CloudStorageRemoveItemsCallback, CloudStorageSetItemCallback } from "./callbacks";

export interface CloudStorage {
    /**
     * A method that stores a value in the cloud storage using the specified
     * key.
     *
     * @param key The key should contain 1-128 characters, only A-Z, a-z, 0-9, _
     * and - are allowed.
     * @param value The value should contain 0-4096 characters. You can store up
     * to 1024 keys in the cloud storage.
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called. In case of an error, the first argument
     * will contain the error. In case of success, the first argument will be
     * null and the second argument will be a boolean indicating whether the
     * value was stored.
     */
    setItem(key: string, value: string, callback?: CloudStorageSetItemCallback): CloudStorage;
    /**
     * A method that receives a value from the cloud storage using the specified
     * key.
     *
     * @param key The key should contain 1-128 characters, only A-Z, a-z, 0-9, _
     * and - are allowed.
     * @param callback In case of an error, the callback function will be called
     * and the first argument will contain the error. In case of success, the
     * first argument will be null and the value will be passed as the second
     * argument.
     */
    getItem(key: string, callback?: CloudStorageGetItemCallback): CloudStorage;
    /**
     * A method that receives values from the cloud storage using the specified
     * keys.
     *
     * @param key The keys should contain 1-128 characters, only A-Z, a-z, 0-9,
     * _ and - are allowed.
     * @param callback In case of an error, the callback? function will be
     * called and the first argument will contain the error. In case of success,
     * the first argument will be null and the values will be passed as the
     * second argument.
     */
    getItems(keys: string[], callback?: CloudStorageGetItemsCallback): CloudStorage;
    /**
     * A method that removes a value from the cloud storage using the specified
     * key.
     *
     * @param key The key should contain 1-128 characters, only A-Z, a-z, 0-9, _
     * and - are allowed.
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called. In case of an error, the first argument
     * will contain the error. In case of success, the first argument will be
     * null and the second argument will be a boolean indicating whether the
     * value was removed.
     */
    removeItem(key: string, callback?: CloudStorageRemoveItemCallback): CloudStorage;
    /**
     * A method that removes values from the cloud storage using the specified
     * keys.
     *
     * @param key The keys should contain 1-128 characters, only A-Z, a-z, 0-9,
     * _ and - are allowed.
     * @param callback If an optional callback parameter was passed, the
     * callback function will be called. In case of an error, the first argument
     * will contain the error. In case of success, the first argument will be
     * null and the second argument will be a boolean indicating whether the
     * values were removed.
     */
    removeItems(keys: string[], callback?: CloudStorageRemoveItemsCallback): CloudStorage;
    /**
     * A method that receives the list of all keys stored in the cloud storage.
     *
     * @param callback In case of an error, the callback function will be called
     * and the first argument will contain the error. In case of success, the
     * first argument will be null and the list of keys will be passed as the
     * second argument.
     */
    getKeys(callback?: CloudStorageGetKeysCallback): CloudStorage;
}
