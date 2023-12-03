import { Col, Form, Input, Row, Select } from "antd";
import axios from "axios";
import { UrlServer } from "config/UrlServer";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

const PaymentOnDeliveryOption = () => {
  const [formPaymenOnDeliver] = Form.useForm();
  const { user } = useSelector((state: RootState) => state.auth);

  const onSubmit = () => {};
  const [localVN, setLocalVN] = React.useState<any>(null);

  const [listTinhTP, setListTinhTP] = React.useState<
    { value: string; label: string }[]
  >([]);
  const [listQuanHuyen, setListQuanHuyen] = React.useState<any>([]);
  const [listPhuongXa, setListPhuongXa] = React.useState<any>([]);
  const [address, setAddress] = React.useState<any>();
  const selectLocalVN = async () => {
    const response = await axios.get(`${UrlServer}/json-data/location.json`);
    const newListTinh_TP: { value: string; label: string }[] = [];
    response?.data?.map((item: any) => {
      return newListTinh_TP?.push({
        value: item.code,
        label: item.name,
      });
    });
    setListTinhTP(newListTinh_TP);
    setLocalVN(response.data);
  };
  const handleChangeTinhTP = (value: string, option: any) => {
    const newDataQuan_Huyen: any = [];
    _.filter(localVN, { code: value })?.[0]?.districts?.map((item: any) =>
      newDataQuan_Huyen.push({
        value: item.id,
        label: item.name,
        ...item,
      })
    );
    setListQuanHuyen(newDataQuan_Huyen);
    setAddress((prev: any) => ({
      ...prev,
      tinhTP: option.label,
    }));
  };
  const handleChangeQuanHuyen = (value: string, option: any) => {
    const newDataPhuongXa: any = [];
    const filterDataPhuongXa = _.filter(listQuanHuyen, { value: value })?.[0];
    filterDataPhuongXa?.wards?.map((item: any) =>
      newDataPhuongXa.push({
        value: item.id,
        label: item.prefix + " " + item.name,
        ...item,
      })
    );
    filterDataPhuongXa?.streets?.map((item: any) =>
      newDataPhuongXa.push({
        value: item.id,
        label: item.prefix + " " + item.name,
        ...item,
      })
    );
    filterDataPhuongXa?.project?.map((item: any) =>
      newDataPhuongXa.push({
        value: item.id,
        label: item.prefix + " " + item.name,
        ...item,
      })
    );
    setListPhuongXa(newDataPhuongXa);
    setAddress((prev: any) => ({
      ...prev,
      quan_huyen: option.label,
    }));
  };

  // submit

  const setDataFieldsForm = React.useCallback(() => {
    const { fullName, phone, address } = user.userData;
    formPaymenOnDeliver.setFieldsValue({
      name: fullName,
      phone: phone,
      address: address,
    });
  }, [formPaymenOnDeliver, user.userData]);

  React.useEffect(() => {
    selectLocalVN();
    setDataFieldsForm();
  }, [setDataFieldsForm]);

  return (
    <>
      <Form
        form={formPaymenOnDeliver}
        onFinish={onSubmit}
        layout='vertical'
        autoComplete='off'
        style={{
          marginTop: 20,
        }}
      >
        <Row gutter={[12, 12]}>
          <Col span={16}>
            <Form.Item name={"name"} label='FullName' required>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={16}>
            <Form.Item name={"phone"} label='Phone' required>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {user.userData.address ? (
          <Row gutter={[12, 12]}>
            <Col span={16}>
              <Form.Item name={"address"} label='Address' required>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        ) : (
          <>
            <strong className='ant-form-text'>Address:</strong>
            <Row gutter={[12, 12]}>
              <Col span={16}>
                <Form.Item label='Province/City:' name='province_city' required>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp='children'
                    onChange={handleChangeTinhTP}
                    filterOption={(input: any, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toUpperCase()
                        .localeCompare((optionB?.label ?? "").toUpperCase())
                    }
                    options={listTinhTP}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[12, 12]}>
              <Col span={16}>
                <Form.Item label='District' name='district' required>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp='children'
                    onChange={handleChangeQuanHuyen}
                    filterOption={(input: any, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={listQuanHuyen}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[12, 12]}>
              <Col span={16}>
                <Form.Item
                  label='Ward / Village / Street:'
                  name='ward_village_street'
                  required
                >
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    onChange={(value: string, option: any) => {
                      setAddress((prev: any) => ({
                        ...prev,
                        phuong_xa: option.label,
                      }));
                    }}
                    optionFilterProp='children'
                    filterOption={(input: any, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={listPhuongXa}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[12, 12]}>
              <Col span={16}>
                <Form.Item
                  label='Specific Address:'
                  name='specific_address'
                  required
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}
      </Form>
    </>
  );
};

export default PaymentOnDeliveryOption;
