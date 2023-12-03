import { Image, Typography } from "antd";
import { UrlServer } from "config/UrlServer";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypeCart } from "types/Types";

interface Props {
  record: TypeCart;
}

const { Link: LinkAntd } = Typography;

const ViewInfoComponent = ({ record }: Props) => {
  const [imageArr, setImageArr] = React.useState<string[]>();

  const onFormatUrlImage = React.useCallback(() => {
    const newImageArr: string[] = [];
    JSON.parse(record.images).map((image: string) => {
      return newImageArr.push(`${UrlServer}/image/${image}`);
    });
    setImageArr(newImageArr);
  }, [record.images]);
  const navigate = useNavigate();
  const handleSeeMore = () => {
    const { cartQuantity, ...product } = record;
    navigate(record.slug, { state: { product: product } });
  };
  React.useEffect(() => {
    onFormatUrlImage();
  }, [onFormatUrlImage]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
      }}
    >
      {/* <LinkAntd onClick={handleSeeMore}>See More</LinkAntd> */}

      <h3
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {record.nameProduct}
      </h3>
    </div>
  );
};

export default ViewInfoComponent;
