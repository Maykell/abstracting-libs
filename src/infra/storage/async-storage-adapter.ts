import { TStorage, StorageKeys } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageAdapter: TStorage = {
  setItem: function (key: StorageKeys, value: string): void | Promise<void> {
    return AsyncStorage.setItem(key, value);
  },
  getItem: function (
    key: StorageKeys,
  ): string | null | undefined | Promise<string | null | undefined> {
    return AsyncStorage.getItem(key);
  },
  clearkey: function (key: StorageKeys): void | Promise<void> {
    return AsyncStorage.removeItem(key);
  },
  clearAllKey: function (): void | Promise<void> {
    return AsyncStorage.clear();
  },
};
