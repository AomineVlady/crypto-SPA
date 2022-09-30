import { ICrypto } from "./ICrypto";
import { ICryptoPriceDiff } from "./ICryptoPriceDiff";

export interface ICryptoPortfolioItem {
  crypto: ICrypto,
  count: number,
  diff: ICryptoPriceDiff,
}

export interface ICryptoPortfolio {
  cryptoPortfolioList: ICryptoPortfolioItem[]
}
export interface ICryptoPortfolioBank {
  value: number,
  diff: ICryptoPriceDiff,
}

export interface IPortfolioState {
  list: ICryptoPortfolioItem[] | [],
  bank: ICryptoPortfolioBank,
  isLoading: boolean,
  error: string,
}
