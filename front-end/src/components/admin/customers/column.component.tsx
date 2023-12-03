import { ColumnsType } from "antd/es/table";
import { DataType } from "./type";
import { TypeDataUser } from "types/Types";
import ActionComponent from "./action.component";

export const columns: ColumnsType<TypeDataUser> = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "FullName",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (text) => {
      return (
        <p
          style={{
            textTransform: "capitalize",
          }}
        >
          {text}
        </p>
      );
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => <ActionComponent record={record} />,
  },
];
