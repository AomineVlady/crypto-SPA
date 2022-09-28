import React from "react";
import { useAppSelector } from "../../hooks/redux";
import PaginationItem from "./PaginationItem";
import { PaginationWrapper } from "./style";


interface PaginationProps {
  perPage: number,
  pageCount: number,
  pageFlip: (value: number) => void,
}

const Pagination: React.FC<PaginationProps> = ({ perPage, pageCount, pageFlip }) => {
  const { cryptoListFull } = useAppSelector(state => state.cryptoReducer);

  const paginationList = Array.from({ length: pageCount }, (v, k) => k + 1);

  const renderPaginationList = () => paginationList.map(item =>
    <PaginationItem
      key={item}
      isActive={perPage === item}
      value={item}
      pageChange={pageFlip}
    />
  )

  return (
    cryptoListFull ?
      <PaginationWrapper>
        {renderPaginationList()}
      </PaginationWrapper>
      : null
  )
}

export default Pagination;
