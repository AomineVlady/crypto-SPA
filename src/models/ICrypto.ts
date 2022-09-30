import { ICryptoPriceDiff } from "./ICryptoPriceDiff";

export interface ICrypto {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  oldPrice?: string;
  diff?: ICryptoPriceDiff;
}
