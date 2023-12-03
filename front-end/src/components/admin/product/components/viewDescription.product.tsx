import React from "react";
import { Modal, Typography } from "antd";
import { TypeProduct } from "types/Types";
import parse from "html-react-parser";
const { Link } = Typography;

interface Props {
  record: TypeProduct;
}

const ViewDescriptionProduct = ({ record }: Props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link onClick={showModal}>Xem chi tiết</Link>
      <Modal
        title={"MÔ TẢ CHI TIẾT - " + record.nameProduct}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"70%"}
        bodyStyle={{
          padding: "20px 0",
        }}
      >
        {parse(record.description)}
      </Modal>
    </>
  );
};

export default ViewDescriptionProduct;
