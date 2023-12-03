import React from "react";
import { PaginationStyled } from "./styles/PaginationStyled";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { NumberPagination } from "config/config";

interface Props {
  setValuePagination: Function;
  valuePagination: {
    minValue: number;
    maxValue: number;
  };
  total: number;
}

const PaginationCustom = ({
  setValuePagination,
  valuePagination,
  total,
}: Props) => {
  const handleChange = (value: any) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (value <= 1) {
      setValuePagination({
        minValue: 0,
        maxValue: NumberPagination,
      });
    } else {
      setValuePagination({
        minValue: value * NumberPagination - 10,
        maxValue: value * NumberPagination,
      });
    }
  };
  return (
    <PaginationStyled>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={NumberPagination}
        total={total}
        onChange={handleChange}
      />
    </PaginationStyled>
  );
};

export default PaginationCustom;
