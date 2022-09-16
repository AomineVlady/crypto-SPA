import { AppDispatch } from "..";
import axios from 'axios';
// import { ICryptoFetch } from "../../models/ICrypto";
import { CryptoSlice } from "./crypto";

const GET_CRYPTO_LIST_URL: string = 'https://api.coincap.io/v2/assets'

export const fetchCryptoList = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(CryptoSlice.actions.getCryptoListPending);
    const response = await axios.get<any>(GET_CRYPTO_LIST_URL);
    dispatch(CryptoSlice.actions.getCryptoListSuccess(response.data));
  } catch (e) {
    let msg = (e as Error).message;
    dispatch(CryptoSlice.actions.getCryptoListFailure(msg));
  }
}
