import React, { useCallback } from "react";

import { Modal, Typography, Image } from "antd";
import { TypeProduct } from "types/Types";
import { UrlServer } from "config/UrlServer";

interface Props {
  record: TypeProduct;
}

const { Link } = Typography;
const ViewImageProduct = ({ record }: Props) => {
  const [visible, setVisible] = React.useState(false);
  const [imageArr, setImageArr] = React.useState<string[]>();

  const onFormatUrlImage = useCallback(() => {
    const newImageArr: string[] = [];
    JSON.parse(record.images).map((image: string) => {
      return newImageArr.push(`${UrlServer}/image/${image}`);
    });
    setImageArr(newImageArr);
  }, [record.images]);

  React.useEffect(() => {
    onFormatUrlImage();
  }, [onFormatUrlImage]);
  return (
    <>
      <Link onClick={() => setVisible(true)}>Xem chi tiết</Link>

      <Image.PreviewGroup
        preview={{
          visible,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
        items={imageArr}
      ></Image.PreviewGroup>
    </>
  );
};

export default ViewImageProduct;
