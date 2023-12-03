import { Table } from "antd";
import React from "react";
import { columnsCart } from "./column.component";
import { TypeCart } from "types/Types";

interface Props {
  records: TypeCart[];
}

const TableComponent = ({ records }: Props) => {
  return (
    <Table
      bordered={false}
      columns={columnsCart}
      dataSource={records}
      pagination={false}
    />
  );
};

export default TableComponent;
