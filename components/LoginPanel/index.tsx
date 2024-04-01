"use client";
import React from "react";
import { Flex, Typography } from "antd";
import Image from "next/image";
import LoginImage from "@/public/imageCheck.png";
import HomeImage from "@/public/home.png";

interface LoginPanelProps {
  smDown: boolean;
  isMd: boolean;
}

export default function LoginPanel({ smDown, isMd }: LoginPanelProps) {
  const { Title, Text } = Typography;

  return (
    <>
      {!smDown && (
        <>
          <Flex className=" items-baseline gap-2">
            <Flex className=" h-6 w-6">
              <Image src={LoginImage} alt="image_check" />
            </Flex>
            <Title level={2} style={{ color: "#FFF" }}>
              Done
            </Title>
          </Flex>
          <Flex className=" my-2 justify-center">
            <Image
              src={HomeImage}
              alt=""
              width={isMd ? 200 : 500}
              height={isMd ? 200 : 500}
            />
          </Flex>
        </>
      )}

      <Flex>
        <Title level={3} style={{ color: "#FFF" }}>
          Welcome!
        </Title>
      </Flex>
      <Text italic style={{ color: "#FFF", fontSize: "18px" }}>
        Manage your tasks and make the most of your time
      </Text>
    </>
  );
}
