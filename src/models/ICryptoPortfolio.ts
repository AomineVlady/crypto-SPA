import { ICrypto } from "./ICrypto";

export interface ICryptoPortfolioItem {
  crypto: ICrypto,
  count: number
}

export interface ICryptoPortfolio {
  cryptoPortfolioList: ICryptoPortfolioItem[]
}

export interface IPortfolioState {
  list: ICryptoPortfolioItem[],
  isLoading: boolean,
  error: string,
}
