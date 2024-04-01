"use client";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";

import { ComponentList } from "@/app/login/page";

interface LoginProps {
  onCurrentComponent: (currentComponent: ComponentList) => void;
}

export default function Login({ onCurrentComponent }: LoginProps) {
  const { Title, Text } = Typography;
  const handleCreateAccount = () => {
    onCurrentComponent("REGISTER");
  };

  const handleForgotPassword = () => {
    onCurrentComponent("FORGOT-PASSWORD");
  };

  return (
    <>
      <Title level={2} style={{ color: "#3B82F6" }}>
        Log In
      </Title>

      <Form size="middle">
        <Form.Item noStyle>
          <div className="flex justify-between gap-2">
            <Form.Item name="createAccount">
              <p className=" text-gray-400 ">Don&apos;t have an account?</p>
            </Form.Item>
            <Button type="link" onClick={handleCreateAccount}>
              Register
            </Button>
          </div>
        </Form.Item>
        <Form.Item name="userName">
          <Input
            suffix={<UserOutlined style={{ color: "#a9abb3" }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item noStyle>
          <div className=" flex justify-between">
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember</Checkbox>
            </Form.Item>
            <Button onClick={handleForgotPassword} type="link">
              Forgot password
            </Button>
          </div>
        </Form.Item>
        <Form.Item>
          <div className="flex flex-col items-center gap-2">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500"
            >
              Sign in
            </Button>
            {/* Or register with */}
          </div>
        </Form.Item>
      </Form>
    </>
  );
}
