import { AppDispatch } from "..";
import axios, { AxiosResponse } from 'axios';
import { CryptoSlice } from "./crypto";

const LIST_LIMIT: number = 20;
const GET_FULL_CRYPTO_LIST = 'https://api.coincap.io/v2/assets';

const getCryptoListUrl = (page: number) => {
  const offset = page * LIST_LIMIT - LIST_LIMIT;

  return `https://api.coincap.io/v2/assets?limit=${LIST_LIMIT}&offset=${offset}`
};

const getCryptoTopRateListUrl = (count: number) => `https://api.coincap.io/v2/assets?limit=${count}`;
const getCryptoDetailUrl = (id: string) => `https://api.coincap.io/v2/assets/${id}`;
const getCryptoHistoryUrl = (cryptoName: string) => `https://api.coincap.io/v2/assets/${cryptoName}/history?interval=d1`;

export const fetchCryptoList = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(CryptoSlice.actions.getCryptoListPending);
    const { data } = await axios.get<AxiosResponse>(getCryptoListUrl(page));
    dispatch(CryptoSlice.actions.getCryptoListSuccess(data.data));

  } catch (e) {
    let msg = (e as Error).message;
    dispatch(CryptoSlice.actions.getCryptoListFailure(msg));
  }
}

export const fetchPortfolioList = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(CryptoSlice.actions.portfolioPending);
    const { data } = await axios.get<AxiosResponse>(GET_FULL_CRYPTO_LIST);
    dispatch(CryptoSlice.actions.updatePortfolio(data.data));

  } catch (e) {
    let msg = (e as Error).message;
    dispatch(CryptoSlice.actions.portfolioFailure(msg));
  }
}

export const fetchCryptoTopRateList = (count: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(CryptoSlice.actions.getCryptoTopRateListPending);
    const { data } = await axios.get<AxiosResponse>(getCryptoTopRateListUrl(count));
    dispatch(CryptoSlice.actions.getCryptoTopRateListSuccess(data.data));

  } catch (e) {
    let msg = (e as Error).message;
    dispatch(CryptoSlice.actions.getCryptoTopRateListFailure(msg));
  }
}

export const fetchCryptoHistory = (cryptoName: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(CryptoSlice.actions.getCryptoHistoryPending);
    const response = await axios.get<AxiosResponse>(getCryptoHistoryUrl(cryptoName));
    dispatch(CryptoSlice.actions.getCryptoHistorySuccess(response.data.data));

  } catch (e) {
    let msg = (e as Error).message;
    dispatch(CryptoSlice.actions.getCryptoHistoryFailure(msg));
  }
}

export const fetchCryptoDetail = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(CryptoSlice.actions.getCryptoDetailPending);
    const response = await axios.get<AxiosResponse>(getCryptoDetailUrl(id));
    dispatch(CryptoSlice.actions.getCryptoDetailSuccess(response.data.data));
    dispatch(fetchCryptoHistory(id))

  } catch (e) {
    let msg = (e as Error).message;
    dispatch(CryptoSlice.actions.getCryptoDetailFailure(msg));
  }
}

