import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICrypto } from "../../models/ICrypto"
import { ICryptoDetail } from "../../models/ICryptoDetail";
import { ICryptoPortfolioItem, IPortfolioState } from "../../models/ICryptoPortfolio"
import { addCryptoToPortfolio, removePortfolioItem } from "../../utils/checkPortfoli";



interface ICryptoState {
  cryptoList: ICrypto[];
  cryptoTopRate: ICrypto[];
  portfolio: IPortfolioState;
  cryptoDetail: ICryptoDetail;
  isLoading: boolean;
  error: string;
}

const initialState: ICryptoState = {
  cryptoList: [],
  cryptoTopRate: [],
  cryptoDetail: {
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
    list: [],
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
      state.cryptoList = action.payload
      state.cryptoTopRate = action.payload.slice(0, 3)
      state.isLoading = false
    },

    getCryptoListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },

    getCryptoDetailPending(state) {
      state.portfolio.isLoading = true;
    },

    getCryptoDetailSuccess(state, action: PayloadAction<ICrypto>) {
      state.cryptoDetail.crypto = action.payload
    },

    getCryptoDetailFailure(state, action: PayloadAction<string>) {
      state.cryptoDetail.crypto = { ...initialState.cryptoDetail.crypto }
    },

    clearCryptoDetailInfo(state) {
      state.cryptoDetail.crypto = { ...initialState.cryptoDetail.crypto }
    },

    addToPortfolio(state, action: PayloadAction<ICryptoPortfolioItem>) {
      state.portfolio.list = addCryptoToPortfolio(state.portfolio.list, action.payload);
    },

    removeFromPortfolio(state, action: PayloadAction<string>) {
      state.portfolio.list = removePortfolioItem(state.portfolio.list, action.payload);
    }
  }
})

export default CryptoSlice.reducer;
