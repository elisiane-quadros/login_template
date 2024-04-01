"use client";
import React from "react";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, Avatar, Flex } from "antd";

import { ComponentList } from "@/app/login/page";

interface RegisterProps {
  onCurrentComponent: (currentComponent: ComponentList) => void;
}

export default function Register({ onCurrentComponent }: RegisterProps) {
  const { Text, Title } = Typography;
  const handleReturnLogin = () => {
    onCurrentComponent("LOG-IN");
  };

  return (
    <>
      <Title level={2} style={{ color: "#3B82F6" }}>
        Create an account
      </Title>
      <Form size="middle">
        <Form.Item name="name">
          <Input
            suffix={<UserOutlined style={{ color: "#a9abb3" }} />}
            placeholder="Full Name"
          />
        </Form.Item>
        <Form.Item name="email">
          <Input
            type="email"
            suffix={<MailOutlined style={{ color: "#a9abb3" }} />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item name="confirmPassword">
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="flex justify-between gap-4">
        <Text className=" text-gray-400 ">Already have an account?</Text>

        <Button type="link" onClick={handleReturnLogin}>
          Log in
        </Button>
      </div>
    </>
  );
}
