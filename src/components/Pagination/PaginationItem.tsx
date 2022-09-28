import React from "react";
import { PaginationButton } from "./style";

interface PaginationItemProps {
  isActive: boolean,
  value: number,
  pageChange: (value: number) => void,
}

const PaginationItem: React.FC<PaginationItemProps> = ({ isActive, value, pageChange }) => {

  const handlePaginationClick = () => {
    pageChange(value)
  }

  return (
    <PaginationButton
      className={isActive ? 'pag-button--active' : undefined}
      onClick={handlePaginationClick}
    >
      {value}
    </PaginationButton>
  )
}

export default PaginationItem;
