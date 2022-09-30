import { ICrypto } from "../models/ICrypto";
import { ICryptoPortfolioItem } from "../models/ICryptoPortfolio";
import { getPricesDifferenceCalc } from "./calcs";

export const portfolioUpdateList = (fullList: ICrypto[], currentList: ICryptoPortfolioItem[]): ICryptoPortfolioItem[] => {
  return currentList.map(cryptoItem => {
    const updatedCrypto: ICrypto | undefined = fullList.find(item => item.id === cryptoItem.crypto.id)

    if (fullList.some(item => item.id === cryptoItem.crypto.id) && updatedCrypto !== undefined) {

      return {
        crypto: {
          ...updatedCrypto,
          oldPrice: cryptoItem.crypto.priceUsd,
        },
        diff: getPricesDifferenceCalc(parseFloat(cryptoItem.crypto.priceUsd), parseFloat(updatedCrypto.priceUsd)),
        count: cryptoItem.count,
      }
    }
    return {
      ...cryptoItem,
    }
  })
}
