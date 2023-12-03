import {
  Avatar,
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Space,
  Tooltip,
  message,
} from "antd";
import React from "react";

import {
  LockOutlined,
  UnlockOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TypeDataUser } from "types/Types";
import { UrlServer } from "config/UrlServer";
import { StyleActionUser } from "./styles/styles";
import InputComponent from "./input.component";
import AccountComponent from "components/accountComponent/account.component";

const ActionComponent = (props: { record: any }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form] = Form.useForm();
  const { record } = props;
  const { user } = useSelector((state: RootState) => state.auth);
  const confirm = () => {
    message.info("Clicked on Yes.");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (values: any) => {};
  return (
    <>
      <Space wrap>
        
        <Tooltip title={`${record?.active === 0 ? 'Mở' : 'Khóa'}`}>
          {record?.active === 0 ? (
            <Button shape='circle' type='dashed' icon={<UnlockOutlined />} />
          ) : (
            <Button danger shape='circle' type='dashed' icon={<LockOutlined />} />
          )}
        </Tooltip>
      
        <Tooltip title={`Cập nhật`}>
          <Button
            shape='circle'
            type='dashed'
            onClick={showModal}
            icon={<EditOutlined />}
          />
        </Tooltip>
        <Popconfirm
          placement='topRight'
          title={"CẢNH BÁO"}
          description={"Bạn có chắc chắn muốn xóa ..."}
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Tooltip title={`Xóa`}>
            <Button
              danger
              shape='circle'
              type='dashed'
              icon={<DeleteOutlined />}
            />
          </Tooltip>
        </Popconfirm>
      </Space>
      <Modal
        width={"50%"}
        title={
          <p
            style={{
              textTransform: "capitalize",
            }}
          >
            {props.record.fullName}
          </p>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AccountComponent record={record} />
      </Modal>
    </>
  );
};

export default ActionComponent;
