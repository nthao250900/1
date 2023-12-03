import { ColumnsType } from "antd/es/table";

import ViewDescriptionProduct from "./components/viewDescription.product";
import ViewImageProduct from "./components/viewImage.product";
import { TypeProduct } from "types/Types";
import { Tag } from "antd";

export const columns: ColumnsType<TypeProduct> = [
  {
    title: "Mã sản phẩm",
    dataIndex: "idProduct",
    key: "idProduct",
    fixed: "left",
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "nameProduct",
    key: "nameProduct",
    fixed: "left",
  },
  {
    title: "Hình ảnh",
    dataIndex: "images",
    key: "images",
    render: (_, record) => <ViewImageProduct record={record} />,
  },
  {
    title: "Giá gốc",
    dataIndex: "price",
    key: "price",
    // width: 100,
  },
  {
    title: "Giá (khuyến mãi)",
    dataIndex: "price_old",
    key: "price_old",
    // width: 100,
  },
  {
    title: "Thông tin sản phẩm",
    children: [
      {
        title: "Màu",
        dataIndex: "colors",
        key: "colors",
        width: 150,
        align: "center",
        render: (_, record: TypeProduct) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {JSON.parse(record.colors).map((color: string) => (
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: color,
                  }}
                />
              ))}
            </div>
          );
        },
      },
      {
        title: "Thương hiệu",
        dataIndex: "trademark",
        key: "trademark",
        width: 150,
        align: "center",
      },
      {
        title: "Kích thước",
        dataIndex: "size",
        key: "size",
        width: 150,
        align: "center",
        render: (_, record: TypeProduct) => {
          return (
            <>
              {JSON.parse(record.size).map((size: string) => (
                <Tag color='blue' key={size}>
                  {size}
                </Tag>
              ))}
            </>
          );
        },
      },
      {
        title: "Tags",
        dataIndex: "tags",
        key: "tags",
        width: 150,
        align: "center",
        render: (_, record: TypeProduct) => {
          return (
            <>
              {JSON.parse(record.tags).map((tag: string) => (
                <Tag color='blue' key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          );
        },
      },
    ],
  },
  {
    title: "Mô tả chi chiết",
    dataIndex: "description",
    key: "description",
    width: 100,
    render: (_, record) => <ViewDescriptionProduct record={record} />,
  },
];
