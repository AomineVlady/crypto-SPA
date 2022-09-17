import React, { useState } from 'react';
import { ICrypto } from '../../models/ICrypto';
import { CryptoInfoBlock, CryptoInfoBlockWrap } from './style';

interface AddCryptoBlockProps {
  cryptoInfo: ICrypto,
  onClose: () => void,
}

const AddCryptoBlock: React.FC<AddCryptoBlockProps> = ({ cryptoInfo, onClose }) => {
  const [count, setCount] = useState<string>('0');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value)
  }

  const onAddHandler = () => {
    console.log(count)
    console.log(cryptoInfo)
    onClose();
  }

  return (
    <CryptoInfoBlockWrap>
      <CryptoInfoBlock>
        <p>{cryptoInfo.name}</p>
        <p>{cryptoInfo.priceUsd}</p>
        <input type="number" value={count} onChange={onChangeHandler} />
      </CryptoInfoBlock>

      <button onClick={onAddHandler}>Добавить</button>
    </CryptoInfoBlockWrap>
  )
}

export default AddCryptoBlock;
