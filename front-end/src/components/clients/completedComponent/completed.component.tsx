import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { Shape, StyledOrderCompleted } from "./styled";
import Container from "../Container";
import { Button } from "antd";
import Colors from "modules/Colors";
import { useNavigate } from "react-router-dom";

const IndexCompletedComponent = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "0px 0 150px",
      }}
    >
      <StyledOrderCompleted>
        <img src='/images/clock.png' className='clock' alt='clock' />
        <img
          src='/images/checklist.png'
          alt='checklist'
          className='checklist'
        />
        <Container>
          <Box textAlign='center' py={10} px={6}>
            <Center>
              <div className='check_completed'>
                <img src='/images/check.png' alt='completed' />
                <Shape />
              </div>
            </Center>
            <Heading className='title' fontWeight={600} as='h2'>
              This is the headline
            </Heading>
            <Center>
              <Text className='description'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </Center>
            <Center>
              <Button
                style={{
                  marginTop: 20,
                  backgroundColor: Colors.secondaryColor1,
                  color: Colors.white,
                }}
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </Button>
            </Center>
          </Box>
        </Container>
      </StyledOrderCompleted>
    </div>
  );
};

export default IndexCompletedComponent;
