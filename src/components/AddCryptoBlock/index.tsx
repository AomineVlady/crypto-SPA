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

  const onAddSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const totalCount = parseFloat(count);

    if (totalCount > 0) {
      dispatch(CryptoSlice.actions.addToPortfolio({
        crypto: cryptoInfo,
        diff:
        {
          price: 0,
          percentage: 0,
        },
        count: totalCount
      }))
    }

    onClose();
  }

  return (
    <CryptoInfoBlockWrap onSubmit={onAddSubmitHandler}>
      <CryptoInfoBlock>
        <p>{cryptoInfo.name}</p>
        <div className='add__input__field'>
          <span>Кол-во</span>
          <input type="number" step='any' className='add__crypto__input' value={count} onChange={onChangeHandler} />
        </div>

      </CryptoInfoBlock>

      <CryptoInfoBlockButton type='submit' value="Добавить" />
    </CryptoInfoBlockWrap>
  )
}

export default AddCryptoBlock;
