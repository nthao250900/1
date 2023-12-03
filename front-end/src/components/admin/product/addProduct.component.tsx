import React from "react";

import {
  Button,
  Col,
  ColorPicker,
  Form,
  Input,
  Row,
  Select,
  SelectProps,
  Space,
  Upload,
  message,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { UrlServer } from "config/UrlServer";
import { UploadOutlined } from "@ant-design/icons";
import _ from "lodash";
import TextEditor from "./textEditor.component";
import uniqid from "uniqid";
import { postWithAuthorization } from "helpers/queryHelper";
import { useQuery } from "react-query";
import { ADMIN_QUERY_INSERT_PRODUCT } from "config/KeyQuey";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TypeDataUser } from "types/Types";
const getBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });
interface Props {
  setIsModalOpen: Function;
  setDisableButtonSubmit: Function;
  form: any;
}
interface TypeValues {
  idProduct: string;
  name: string;
  slug: string;
  price: number;
  price_old: number;
  trademark: string;
  size: string[];
  tags: string[];
  colors: string[];
  images: string[];
}

const AddProductComponent = ({
  setIsModalOpen,
  setDisableButtonSubmit,
  form,
}: Props) => {
  const [fileList, setFileList] = React.useState([]);
  const [detailProduct, setDetailProduct] = React.useState<string>("");
  const [valueNameProduct, setValueNameProduct] = React.useState<string>("");
  const [valuePrice, setValuePrice] = React.useState<string>("");
  const [valuePriceOld, setValuePriceOld] = React.useState<string>("");
  const { user } = useSelector((state: RootState) => state.auth);

  const handleChange = async (e: any) => {
    setFileList(e.fileList);
  };
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
  };
  const uploadButton = (
    <Button
      style={{
        marginTop: 20,
      }}
      icon={<UploadOutlined />}
    >
      Tải hình ảnh
    </Button>
  );
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: "size" + i,
      value: "size" + i,
    });
  }
  const optionsTags: SelectProps["options"] = [];

  for (let i = 0; i < 36; i++) {
    optionsTags.push({
      label: "tag" + i,
      value: "tag" + i,
    });
  }

  React.useEffect(() => {
    form.setFieldsValue({
      slug: valueNameProduct
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .trim()
        .split(" ")
        .join("-"),
    });
  }, [form, valueNameProduct]);
  const onSendInfoProductToServer = async (values: TypeValues) => {
    const parameters = {
      idProduct: values.idProduct,
      nameProduct: values.name,
      slug: values.slug,
      price: values.price,
      price_old: values.price_old,
      trademark: values.trademark,
      size: JSON.stringify(values.size),
      tags: JSON.stringify(values.tags),
      colors: JSON.stringify(
        values.colors.map((color: any) =>
          color.color ? color.color.toHexString() : "#1677FF"
        )
      ),
      description: detailProduct,
      images: JSON.stringify(
        fileList.map((image: any) => image?.response?.message)
      ),
    };
    const result: any = await postWithAuthorization(
      `${UrlServer}/api/admin/insert-product`,
      user.accessToken,
      parameters
    );
    if (result?.error) return message.error(result?.error?.message);
    message.success("Insert product successfully!!!");
    form.resetFields();
    setFileList([]);
    setDetailProduct("");
  };
  return (
    <Form onFinish={onSendInfoProductToServer} form={form}>
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Form.Item
            label='Mã sản phẩm:'
            initialValue={uniqid("DUY-")}
            name='idProduct'
            required
          >
            <Input placeholder='Mã sản phẩm' />
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={[12, 12]}
        style={{
          marginTop: 20,
        }}
      >
        <Col span={12}>
          <Form.Item label='Tên sản phẩm:' name='name' required>
            <Input
              placeholder='Tên sản phẩm'
              onChange={(event) => setValueNameProduct(event.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label='Slug:' name='slug' required>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={[12, 12]}
        style={{
          marginTop: 20,
        }}
      >
        <Col span={6}>
          <Form.Item label='Giá gốc:' name='price' required>
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='Giá (khuyến mãi):' name='price_old'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <div
        style={{
          marginTop: 40,
        }}
      >
        <strong className='ant-form-text'>Thông tin sản phẩm</strong>
        <Row
          gutter={[12, 12]}
          style={{
            marginTop: 20,
          }}
        >
          <Col span={6}>
            <Form.Item label='Thương hiệu:' name='trademark' required>
              <Input placeholder='Thương hiệu sản phẩm' />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item label='Kích thước:' name='size' required>
              <Select
                mode='multiple'
                allowClear
                style={{ width: "100%" }}
                placeholder='Please select'
                options={[
                  {
                    label: "X",
                    value: "X",
                  },
                  {
                    label: "M",
                    value: "M",
                  },
                  {
                    label: "L",
                    value: "L",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item label='Tags:' name='tags' required>
              <Select
                mode='multiple'
                allowClear
                style={{ width: "100%" }}
                placeholder='Please select'
                options={optionsTags}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row
          gutter={[12, 12]}
          style={{
            marginTop: 30,
          }}
        >
          <Col span={4}>
            <Form.Item name={"colors"} label={"Colors"}>
              <Form.List name='colors'>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align='baseline'
                      >
                        <Form.Item
                          {...restField}
                          label={`Color ${key + 1}:`}
                          name={[name, "color"]}
                          // rules={[{ required: true }]}
                        >
                          <ColorPicker
                            presets={[
                              {
                                label: "Recommended",
                                colors: [
                                  "#000000",
                                  "#000000E0",
                                  "#000000A6",
                                  "#00000073",
                                  "#00000040",
                                  "#00000026",
                                  "#0000001A",
                                  "#00000012",
                                  "#0000000A",
                                  "#00000005",
                                  "#F5222D",
                                  "#FA8C16",
                                  "#FADB14",
                                  "#8BBB11",
                                  "#52C41A",
                                  "#13A8A8",
                                  "#1677FF",
                                  "#2F54EB",
                                  "#722ED1",
                                  "#EB2F96",
                                  "#F5222D4D",
                                  "#FA8C164D",
                                  "#FADB144D",
                                  "#8BBB114D",
                                  "#52C41A4D",
                                  "#13A8A84D",
                                  "#1677FF4D",
                                  "#2F54EB4D",
                                  "#722ED14D",
                                  "#EB2F964D",
                                ],
                              },
                            ]}
                            defaultValue={"#1677FF"}
                            format='hex'
                          />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type='dashed'
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginTop: 20,
        }}
      >
        <strong className='ant-form-text'>MÔ TẢ CHI TIẾT</strong>
        <TextEditor height={500} setContent={setDetailProduct} />
      </div>
      <div
        style={{
          marginTop: 50,
        }}
      >
        <Upload
          action={`${UrlServer}/api/upload/image`}
          fileList={fileList}
          onPreview={handlePreview}
          onChange={(e) => handleChange(e)}
          multiple={true}
          progress={{
            strokeColor: {
              "0%": "#108ee9",
              "100%": "#87d068",
            },
            strokeWidth: 3,
            format: (percent) =>
              percent && `${parseFloat(percent.toFixed(2))}%`,
          }}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
      </div>
      <Form.Item
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button type='primary' htmlType='submit'>
          Thêm sản phẩm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProductComponent;
