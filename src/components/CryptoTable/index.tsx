import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCryptoList } from "../../store/reducers/actionCreator";



const CryptoTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cryptoList, isLoading, error } = useAppSelector(state => state.cryptoReducer);

  useEffect(() => {
    dispatch(fetchCryptoList())
  }, [])

  const buttonHandler = () => {
    console.log(cryptoList);
  }

  return (
    <>
      <button onClick={buttonHandler}> Вывести в консоль список криптовалют</button>
    </>
  )
}

export default CryptoTable;
