//import { MMVKStorageAdapter } from './adapters/mmkv-adapter';
import { AsyncStorageAdapter } from './async-storage-adapter';
import { StorageKeys, StorageParams, TStorage } from './types';

const defaultAdapter: TStorage = AsyncStorageAdapter;

export const Storage: TStorage = {
  setItem: function (key: StorageKeys, value: string): void | Promise<void> {
    return defaultAdapter.setItem(key, value);
  },
  getItem: function (
    key: keyof StorageParams,
  ): string | Promise<string | null | undefined> | null | undefined {
    return defaultAdapter.getItem(key);
  },
  clearkey: function (key: keyof StorageParams): void | Promise<void> {
    return defaultAdapter.clearkey(key);
  },
  clearAllKey: function (): void | Promise<void> {
    return defaultAdapter.clearAllKey();
  },
};
