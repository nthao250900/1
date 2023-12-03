import React from "react";
import { Table } from "antd";
import { columns } from "./column.component";
import { TypeProduct } from "types/Types";

interface Props {
  dataProduct: TypeProduct[];
}

const TableProductComponent = ({ dataProduct }: Props) => {
  return (
    <Table
      columns={columns}
      dataSource={dataProduct}
      bordered
      size='middle'
      style={{
        marginTop: 20,
      }}
      scroll={{ x: "calc(700px + 50%)", y: "calc(60vh - 20px)" }}
    />
  );
};

export default TableProductComponent;
