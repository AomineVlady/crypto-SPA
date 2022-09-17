import { AppDispatch } from "..";
import axios, { AxiosResponse } from 'axios';
import { CryptoSlice } from "./crypto";

const GET_CRYPTO_LIST_URL: string = 'https://api.coincap.io/v2/assets';
const GET_CRYPTO_DETAIL_URL: string = 'https://api.coincap.io/v2/assets/';

export const fetchCryptoList = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(CryptoSlice.actions.getCryptoListPending);
    const response = await axios.get<AxiosResponse>(GET_CRYPTO_LIST_URL);
    dispatch(CryptoSlice.actions.getCryptoListSuccess(response.data.data));

  } catch (e) {
    let msg = (e as Error).message;
    dispatch(CryptoSlice.actions.getCryptoListFailure(msg));
  }
}

export const fetchCryptoDetail = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(CryptoSlice.actions.getCryptoDetailPending);
    const response = await axios.get<AxiosResponse>(GET_CRYPTO_DETAIL_URL + id);
    dispatch(CryptoSlice.actions.getCryptoDetailSuccess(response.data.data));

  } catch (e) {
    let msg = (e as Error).message;
    dispatch(CryptoSlice.actions.getCryptoDetailFailure(msg));
  }
}
