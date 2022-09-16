import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICrypto } from "../../models/ICrypto"

interface ICryptoState {
  cryptoList: ICrypto[];
  isLoading: boolean;
  error: string;
}

const initialState: ICryptoState = {
  cryptoList: [],
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
      state.isLoading = false
    },
    getCryptoListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    }
  }
})

export default CryptoSlice.reducer;
