import { ICryptoPortfolioItem } from "../models/ICryptoPortfolio"

export const checkPortfolioItem = (portfoliolist: ICryptoPortfolioItem[], id: string): boolean => {
  return portfoliolist.some(item => item.crypto.id === id);
}
