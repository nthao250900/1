import { ColumnsType } from "antd/es/table";
import { TypeCart } from "types/Types";
import ViewInfoComponent from "./ViewInfo.component";
import QuantityComponent from "./quantity.component";
import { formatter } from "config/numberFormat";
import ActionComponent from "./action.component";

export const columnsCart: ColumnsType<TypeCart> = [
  {
    title: "Information",
    dataIndex: "name",
    key: "name",
    render: (_, record: TypeCart) => <ViewInfoComponent record={record} />,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    align: "center",
    render(value: string) {
      return <>{formatter.format(Number(value))}</>;
    },
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    align: "center",

    render(value, record, index) {
      return (
        <QuantityComponent
          quantity={record?.cartQuantity}
          itemProduct={record}
        />
      );
    },
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    align: "center",
    render(_, record: TypeCart) {
      return (
        <>{formatter.format(record.cartQuantity * Number(record.price))}</>
      );
    },
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
    align: "center",
    render(_, record: TypeCart) {
      return <ActionComponent record={record} />;
    },
  },
];
