import { ICryptoPortfolioItem } from "../models/ICryptoPortfolio"

export const checkPortfolioItem = (portfoliolist: ICryptoPortfolioItem[] | [], id: string): boolean => {
  return portfoliolist.some(item => item.crypto.id === id);
}

export const addCryptoToPortfolio = (list: ICryptoPortfolioItem[], cryptoItem: ICryptoPortfolioItem): ICryptoPortfolioItem[] => {
  if (checkPortfolioItem(list, cryptoItem.crypto.id)) {
    return list.map(item => {
      if (item.crypto.id === cryptoItem.crypto.id) {
        return {
          ...item,
          count: item.count + cryptoItem.count
        }
      }
      return item;
    });
  } else {
    const newPortfolioList = [...list];
    newPortfolioList.push(cryptoItem);

    return newPortfolioList;
  }
}

export const removePortfolioItem = (list: ICryptoPortfolioItem[], cryptoId: string): ICryptoPortfolioItem[] | [] => {
  return list.filter(item => item.crypto.id !== cryptoId)
}


