import { ICrypto } from "./ICrypto";

export interface ICryptoHistoryItem {
  priceUsd: string,
  time: number
}

export interface ICryptoDetail {
  crypto: ICrypto,
  history: ICryptoHistoryItem[],
}
