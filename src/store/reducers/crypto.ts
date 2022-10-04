import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICrypto } from "../../models/ICrypto"
import { ICryptoDetail } from "../../models/ICryptoDetail";
import { ICryptoPortfolioItem, IPortfolioState } from "../../models/ICryptoPortfolio"
import { ICryptoTopRateList } from "../../models/ICryptoTopRateList";
import { getPricesDifferenceCalc, portfolioCashSum } from "../../utils/calcs";
import { addCryptoToPortfolio, removePortfolioItem } from "../../utils/checkPortfoli";
import { getLSData, setLSData } from "../../utils/localStorage";
import { portfolioUpdateList } from "../../utils/portfolioUpdateList";

const PORTFOLIO_LIST: string = 'portfolioList'
const PORTFOLIO_BANK: string = 'portfolioBank'

const LSPortfolioList = getLSData(PORTFOLIO_LIST) || [];
const LSPortfolioBank = getLSData(PORTFOLIO_BANK) || 0;
interface ICryptoState {
  cryptoList: ICrypto[];
  pagesCount: number,
  cryptoTopRate: ICryptoTopRateList;
  portfolio: IPortfolioState;
  cryptoDetail: ICryptoDetail;
  isLoading: boolean;
  error: string;
}

const initialState: ICryptoState = {
  cryptoList: [],
  pagesCount: 5,
  cryptoTopRate: {
    list: [],
    isLoading: false,
    error: '',
  },
  cryptoDetail: {
    isLoading: false,
    error: '',
    crypto: {
      id: '',
      rank: '',
      symbol: '',
      name: '',
      supply: '',
      maxSupply: '',
      marketCapUsd: '',
      volumeUsd24Hr: '',
      priceUsd: '',
      changePercent24Hr: '',
      vwap24Hr: '',
    },
    history: []
  },

  portfolio: {
    list: LSPortfolioList,
    bank: {
      value: LSPortfolioBank,
      diff: {
        price: 0,
        percentage: 0,
      },
    },
    isLoading: false,
    error: '',
  },
  isLoading: false,
  error: '',
}

export const CryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    getCryptoListPending(state) {
      state.isLoading = true;
    },

    getCryptoListSuccess(state, action: PayloadAction<ICrypto[]>) {
      state.cryptoList = action.payload;
      state.isLoading = false;
    },

    getCryptoListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getCryptoTopRateListPending(state) {
      state.cryptoTopRate.isLoading = true;
    },

    getCryptoTopRateListSuccess(state, action: PayloadAction<ICrypto[]>) {
      state.cryptoTopRate.list = action.payload;
      state.cryptoTopRate.isLoading = false;
    },

    getCryptoTopRateListFailure(state, action: PayloadAction<string>) {
      state.cryptoTopRate.isLoading = false;
      state.cryptoTopRate.error = action.payload;
    },

    getCryptoDetailPending(state) {
      state.cryptoDetail.isLoading = true;
    },

    getCryptoDetailSuccess(state, action: PayloadAction<ICrypto>) {
      state.cryptoDetail.crypto = action.payload;
      state.cryptoDetail.isLoading = false;
    },

    getCryptoDetailFailure(state, action: PayloadAction<string>) {
      state.cryptoDetail.error = action.payload;
      state.cryptoDetail.isLoading = false;
    },

    getCryptoHistoryPending(state) {
      state.cryptoDetail.isLoading = true;
    },

    getCryptoHistorySuccess(state, action: PayloadAction<[]>) {
      state.cryptoDetail.history = action.payload;
      state.cryptoDetail.isLoading = false;
    },

    getCryptoHistoryFailure(state, action: PayloadAction<string>) {
      state.cryptoDetail.error = action.payload;
      state.cryptoDetail.isLoading = false;
    },

    clearCryptoDetailInfo(state) {
      state.cryptoDetail.crypto = { ...initialState.cryptoDetail.crypto }
    },

    portfolioPending(state) {
      state.portfolio.isLoading = true;
    },

    portfolioFailure(state, action: PayloadAction<string>) {
      state.portfolio.error = action.payload;
      state.portfolio.isLoading = false;
    },

    updatePortfolio(state, action: PayloadAction<ICrypto[]>) {
      const newList = portfolioUpdateList(action.payload, initialState.portfolio.list);
      const currentBank = initialState.portfolio.bank.value;
      const newBank = portfolioCashSum(newList);
      state.portfolio.isLoading = false;
      state.portfolio.list = newList;
      state.portfolio.bank.diff = getPricesDifferenceCalc(currentBank, newBank);
      state.portfolio.bank.value = newBank;

      setLSData(PORTFOLIO_LIST, newList);
      setLSData(PORTFOLIO_BANK, newBank);
    },

    addToPortfolio(state, action: PayloadAction<ICryptoPortfolioItem>) {
      const newPortfolioList = addCryptoToPortfolio(state.portfolio.list, action.payload);
      const newPortfolioBank = portfolioCashSum(newPortfolioList);

      state.portfolio.list = newPortfolioList;
      state.portfolio.bank.value = newPortfolioBank;

      setLSData(PORTFOLIO_LIST, newPortfolioList);
      setLSData(PORTFOLIO_BANK, newPortfolioBank);
    },

    removeFromPortfolio(state, action: PayloadAction<string>) {
      const newPortfolioList = removePortfolioItem(state.portfolio.list, action.payload);
      const newPortfolioBank = portfolioCashSum(newPortfolioList);

      state.portfolio.list = newPortfolioList;
      state.portfolio.bank.value = newPortfolioBank;

      setLSData(PORTFOLIO_LIST, newPortfolioList);
      setLSData(PORTFOLIO_BANK, newPortfolioBank);
    },
  }
})

export default CryptoSlice.reducer;
