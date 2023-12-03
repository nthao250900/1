import React from "react";
import { DataType } from "./type";
import { Table } from "antd";
import { columns } from "./column.component";
import { TypeDataUser } from "types/Types";

const TableCustomerComponent = (props: { dataUser: TypeDataUser[] }) => {
  return (
    <>
      <Table columns={columns} dataSource={props.dataUser} />
    </>
  );
};

export default TableCustomerComponent;
