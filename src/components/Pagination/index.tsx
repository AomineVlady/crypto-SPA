import React from "react";
import PaginationItem from "./PaginationItem";
import { PaginationWrapper } from "./style";


interface PaginationProps {
  perPage: number,
  pageCount: number,
  pageFlip: (value: number) => void,
}

const Pagination: React.FC<PaginationProps> = ({ perPage, pageCount, pageFlip }) => {

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
    <PaginationWrapper>
      {renderPaginationList()}
    </PaginationWrapper>
  )
}

export default Pagination;
