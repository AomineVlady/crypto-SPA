import { ICryptoPortfolioItem } from "../models/ICryptoPortfolio";
import { ICryptoPriceDiff } from "../models/ICryptoPriceDiff";

export const round = (value: number, charsAfter: number): number =>
  Math.round(value * Math.pow(10, charsAfter)) / Math.pow(10, charsAfter);


export const percentageCalc = (firstValue: number, secondValue: number): number =>
  firstValue === 0 ? 0 : (firstValue / secondValue) * 100;


export const getPricesDifferenceCalc = (currentValue: number, newValue: number): ICryptoPriceDiff => {
  const priceDiff = (currentValue - newValue) * -1;
  const percentageDiff = percentageCalc(priceDiff, currentValue);


  return {
    price: priceDiff,
    percentage: percentageDiff,
  }
}

export const portfolioCashSum = (list: ICryptoPortfolioItem[]): number => {
  return list.reduce((firstValue, secondValue) =>
    firstValue + secondValue.count * parseFloat(secondValue.crypto.priceUsd),
    0);
}
