"use client";
import React from "react";
import { Flex, Typography, Button } from "antd";
import Image from "next/image";
import LoginImage from "@/public/imageCheck.png";
import HomeImage from "@/public/home.png";

interface GetStartedAppProps {
  onChangeComponent: (changeComponent: boolean) => void;
}

const GetStartedApp = ({ onChangeComponent }: GetStartedAppProps) => {
  const handleStartLogin = () => {
    onChangeComponent(true);
  };
  const { Title, Text } = Typography;

  return (
    <Flex className=" min-h-screen w-screen flex-col justify-center gap-4 bg-blue-500 p-8">
      <Flex className=" gap-25 items-baseline">
        <Flex className=" h-6 w-6 ">
          <Image src={LoginImage} alt="image_check" />
        </Flex>
        <Title level={2} style={{ color: "#FFF" }}>
          Done
        </Title>
      </Flex>
      <Flex className=" my-2 justify-center">
        <Image src={HomeImage} alt="" width={500} height={500} />
      </Flex>

      <Flex>
        <Title level={3} style={{ color: "#FFF" }}>
          Welcome!
        </Title>
      </Flex>
      <Text italic style={{ color: "#FFF", fontSize: "18px" }}>
        Manage your tasks and make the most of your time
      </Text>

      <Flex className="my-4 w-full">
        <Button
          type="primary"
          shape="round"
          size="large"
          block
          danger
          onClick={handleStartLogin}
        >
          GetStarted
        </Button>
      </Flex>
    </Flex>
  );
};

export default GetStartedApp;
