import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICrypto } from "../../models/ICrypto"
import { ICryptoDetail } from "../../models/ICryptoDetail";
import { ICryptoPortfolioItem, IPortfolioState } from "../../models/ICryptoPortfolio"
import { getPricesDifferenceCalc, portfolioCashSum } from "../../utils/calcs";
import { addCryptoToPortfolio, removePortfolioItem } from "../../utils/checkPortfoli";
import { getLSData, setLSData } from "../../utils/localStorage";
import { portfolioUpdateList } from "../../utils/portfolioUpdateList";

const PORTFOLIO_LIST: string = 'portfolioList'
const PORTFOLIO_BANK: string = 'portfolioBank'

const PAGE_SEP_COUNT: number = 20;
const LSPortfolioList = getLSData(PORTFOLIO_LIST) || [];
const LSPortfolioBank = getLSData(PORTFOLIO_BANK) || 0;
interface ICryptoState {
  cryptoListFull: ICrypto[];
  cryptoList: ICrypto[];
  pagesCount: number,
  cryptoTopRate: ICrypto[];
  portfolio: IPortfolioState;
  cryptoDetail: ICryptoDetail;
  isLoading: boolean;
  error: string;
}

const initialState: ICryptoState = {
  cryptoListFull: [],
  cryptoList: [],
  pagesCount: 0,
  cryptoTopRate: [],
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
      state.isLoading = true
    },

    getCryptoListSuccess(state, action: PayloadAction<ICrypto[]>) {
      state.cryptoListFull = action.payload;
      state.pagesCount = action.payload.length / PAGE_SEP_COUNT
      state.cryptoTopRate = action.payload.slice(0, 3)
      state.cryptoList = action.payload.slice(0, PAGE_SEP_COUNT);
      state.isLoading = false
    },

    getCryptoListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },

    getCryptoDetailPending(state) {
      state.cryptoDetail.isLoading = true;
    },

    getCryptoDetailSuccess(state, action: PayloadAction<ICrypto>) {
      state.cryptoDetail.crypto = action.payload
    },

    getCryptoDetailFailure(state, action: PayloadAction<string>) {
      state.cryptoDetail.error = action.payload
    },

    getCryptoHistoryPending(state) {
      state.cryptoDetail.isLoading = true;
    },

    getCryptoHistorySuccess(state, action: PayloadAction<[]>) {
      state.cryptoDetail.history = action.payload
    },

    getCryptoHistoryFailure(state, action: PayloadAction<string>) {
      state.cryptoDetail.error = action.payload
    },

    clearCryptoDetailInfo(state) {
      state.cryptoDetail.crypto = { ...initialState.cryptoDetail.crypto }
    },

    updatePortfolio(state, action: PayloadAction<ICrypto[]>) {
      const newList = portfolioUpdateList(action.payload, initialState.portfolio.list);
      const currentBank = initialState.portfolio.bank.value;
      const newBank = portfolioCashSum(newList);
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

    pageToggle(state, action: PayloadAction<number>) {
      const sepTo = action.payload * PAGE_SEP_COUNT;
      const sepFrom = sepTo - PAGE_SEP_COUNT;
      state.isLoading = false;
      state.cryptoList = state.cryptoListFull.slice(sepFrom, sepTo);
    }
  }
})

export default CryptoSlice.reducer;
