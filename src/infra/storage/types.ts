export type StorageParams = {
  storage_user_key: string;
  storage_token_key: string;
};

export type StorageKeys = keyof StorageParams;

export type TStorage = {
  setItem(key: StorageKeys, value: string): void | Promise<void>;
  getItem(
    key: StorageKeys,
  ): string | null | undefined | Promise<string | null | undefined>;
  clearkey(key: StorageKeys): void | Promise<void>;
  clearAllKey(): void | Promise<void>;
};
