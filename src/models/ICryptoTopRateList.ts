import { ICrypto } from "./ICrypto";

export interface ICryptoTopRateList {
  list: ICrypto[],
  isLoading: boolean,
  error: string,
}
