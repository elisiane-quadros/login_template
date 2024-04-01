"use client";
import React from "react";
import { Button, Form, Input, Typography, Flex } from "antd";
import { ComponentList } from "@/app/login/page";
import { MailOutlined } from "@ant-design/icons";

interface ForgotPasswordProps {
  onCurrentComponent: (currentComponent: ComponentList) => void;
}

const { Title } = Typography;

export default function ForgotPassword({
  onCurrentComponent,
}: ForgotPasswordProps) {
  const handleReturnLogin = () => {
    onCurrentComponent("LOG-IN");
  };
  return (
    <Flex className="flex-col">
      <Title level={2} style={{ color: "#3B82F6" }}>
        Create new password
      </Title>

      <Form size="middle">
        <Form.Item name="email">
          <Input
            type=""
            suffix={<MailOutlined style={{ color: "#a9abb3" }} />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item name="resetPassword">
          <Input.Password placeholder=" New Password" />
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
      <Flex>
        <Button type="link" onClick={handleReturnLogin}>
          Log in
        </Button>
      </Flex>
    </Flex>
  );
}
