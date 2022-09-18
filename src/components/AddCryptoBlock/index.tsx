import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { ICrypto } from '../../models/ICrypto';
import { CryptoSlice } from '../../store/reducers/crypto';
import { CryptoInfoBlock, CryptoInfoBlockButton, CryptoInfoBlockWrap } from './style';

interface AddCryptoBlockProps {
  cryptoInfo: ICrypto,
  onClose: () => void,
}

const AddCryptoBlock: React.FC<AddCryptoBlockProps> = ({ cryptoInfo, onClose }) => {
  const [count, setCount] = useState<string>('0');
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value)
  }

  const onAddHandler = () => {
    const totalCount = parseInt(count);

    if (totalCount > 0) {
      dispatch(CryptoSlice.actions.addToPortfolio({
        crypto: cryptoInfo,
        count: totalCount
      }))
    }
    onClose();
  }

  return (
    <CryptoInfoBlockWrap>
      <CryptoInfoBlock>
        <p>{cryptoInfo.name}</p>
        <div className='add__input__field'>
          <span>Кол-во</span>
          <input type="number" className='add__crypto__input' value={count} onChange={onChangeHandler} />
        </div>

      </CryptoInfoBlock>

      <CryptoInfoBlockButton onClick={onAddHandler}>Добавить</CryptoInfoBlockButton>
    </CryptoInfoBlockWrap>
  )
}

export default AddCryptoBlock;
