import { Button, Modal, message } from "antd";
import HeaderComponentAdmin from "components/admin/Header.component";
import React from "react";
import { EditFilled } from "@ant-design/icons";
import TextEditor from "components/admin/product/textEditor.component";
import { getQueryHelper, postWithAuthorization } from "helpers/queryHelper";
import { UrlServer } from "config/UrlServer";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { CLIENT_QUERY_TERMS_OF_SERVICE } from "config/KeyQuey";
import { useQuery } from "react-query";
import parse from "html-react-parser";

const fetchTermsOfService = () => {
  return getQueryHelper(`${UrlServer}/api/client/select-terms-of-service`);
};

const TermsOfService = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [contentEditor, setContentEditor] = React.useState<string | undefined>(
    undefined
  );
  const { data: dataTermsOfService, isLoading: isLoadingTermsOfService }: any =
    useQuery(CLIENT_QUERY_TERMS_OF_SERVICE, () => fetchTermsOfService());

  const showModal = () => {
    setIsModalOpen(true);
  };

  const { user } = useSelector((state: RootState) => state.auth);
  const handleOk = async () => {
    if (!contentEditor)
      return message.error("Please input your terms of service");

    const result: any = await postWithAuthorization(
      `${UrlServer}/api/admin/insert-terms-of-service`,
      user.accessToken,
      { html: contentEditor }
    );
    if (result?.error) return message.error(result?.error?.message);
    message.success("Insert terms of Service successfully!!!");
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
            Chỉnh sửa điều khoản
          </Button>
        }
      />
      {!isLoadingTermsOfService && dataTermsOfService?.html && (
        <div
          style={{
            maxWidth: "95%",
            margin: "50px auto",
            textAlign: "justify",
          }}
        >
          {parse(dataTermsOfService?.html)}
        </div>
      )}
      <Modal
        title='CHỈNH SỬA ĐIỀU KHOẢN'
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
            dataTermsOfService?.html ? dataTermsOfService?.html : contentEditor
          }
          height={300}
          setContent={setContentEditor}
        />
      </Modal>
    </>
  );
};

export default TermsOfService;
