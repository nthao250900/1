import { Form } from "antd";
import AddProductComponent from "components/admin/product/addProduct.component";
import React from "react";

const AddProduct = () => {
  const [disableButtonSubmit, setDisableButtonSubmit] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [formAddProduct] = Form.useForm();
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <AddProductComponent
          form={formAddProduct}
          setDisableButtonSubmit={setDisableButtonSubmit}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};

export default AddProduct;
