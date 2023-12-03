import React from "react";
import Lottie from "lottie-react";
import Container from "components/clients/Container";
import Animation_404 from "./404.json";
import { Button } from "antd";
import Colors from "modules/Colors";
import { useNavigate } from "react-router-dom";
const Layout404 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className='flex items-center justify-center flex-col'>
        <Lottie animationData={Animation_404} />
        <Button
          style={{
            backgroundColor: Colors.secondaryColor1,
            color: Colors.white,
          }}
          onClick={() => navigate("/")}
        >
          Back to home page
        </Button>
      </div>
    </Container>
  );
};

export default Layout404;
