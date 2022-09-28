import { ICrypto } from "./ICrypto";

export interface ICryptoHistoryItem {
  priceUsd: string,
  time: number,
  date: string,
}

export interface ICryptoDetail {
  crypto: ICrypto,
  history: ICryptoHistoryItem[],
  isLoading: boolean,
  error: string,
}
