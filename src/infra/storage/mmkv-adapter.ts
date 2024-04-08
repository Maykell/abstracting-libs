import { TStorage, StorageKeys } from './types';
import { MMKV } from 'react-native-mmkv';

const mmkv = new MMKV();

export const MMVKStorageAdapter: TStorage = {
  setItem: function (key: StorageKeys, value: string): void | Promise<void> {
    return mmkv.set(key, value);
  },
  getItem: function (
    key: StorageKeys,
  ): string | null | undefined | Promise<string | null | undefined> {
    return mmkv.getString(key);
  },
  clearkey: function (key: StorageKeys): void | Promise<void> {
    return mmkv.delete(key);
  },
  clearAllKey: function (): void | Promise<void> {
    return mmkv.clearAll();
  },
};
