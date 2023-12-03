import { Button, Modal, message } from "antd";
import HeaderComponentAdmin from "components/admin/Header.component";
import React from "react";
import { EditFilled } from "@ant-design/icons";
import TextEditor from "components/admin/product/textEditor.component";
import { getQueryHelper, postWithAuthorization } from "helpers/queryHelper";
import { UrlServer } from "config/UrlServer";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { CLIENT_QUERY_RETURN_POLICY } from "config/KeyQuey";
import { useQuery } from "react-query";
import parse from "html-react-parser";

const fetchReturnPolicy = () => {
  return getQueryHelper(`${UrlServer}/api/client/select-return-policy`);
};

const ReturnPolicy = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [contentEditor, setContentEditor] = React.useState<string | undefined>(
    undefined
  );
  const showModal = () => {
    setIsModalOpen(true);
  };
  const { data: dataReturnPolicy, isLoading: isLoadingReturnPolicy }: any =
    useQuery(CLIENT_QUERY_RETURN_POLICY, () => fetchReturnPolicy());
  const { user } = useSelector((state: RootState) => state.auth);

  const handleOk = async () => {
    if (!contentEditor) return message.error("Please input your return policy");

    const result: any = await postWithAuthorization(
      `${UrlServer}/api/admin/insert-return-policy`,
      user.accessToken,
      { html: contentEditor }
    );
    if (result?.error) return message.error(result?.error?.message);
    message.success("Insert return policy successfully!!!");
    setContentEditor(undefined);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <HeaderComponentAdmin
        ElementRight={
          <Button type='primary' onClick={showModal} icon={<EditFilled />}>
            Chỉnh sửa chính sách
          </Button>
        }
      />
      {!isLoadingReturnPolicy && dataReturnPolicy?.html && (
        <div
          style={{
            maxWidth: "95%",
            margin: "50px auto",
            textAlign: "justify",
          }}
        >
          {parse(dataReturnPolicy?.html)}
        </div>
      )}
      <Modal
        title='Chỉnh sửa chính sách'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"60%"}
        bodyStyle={{
          padding: "20px 0 50px",
        }}
      >
        <TextEditor
          value={
            dataReturnPolicy?.html ? dataReturnPolicy?.html : contentEditor
          }
          height={300}
          setContent={setContentEditor}
        />
      </Modal>
    </>
  );
};

export default ReturnPolicy;
