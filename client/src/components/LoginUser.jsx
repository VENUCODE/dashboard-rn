import React from "react";
import { Form, Input, Button, Spin } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import useLogin from "../hooks/userLogin";
const LoginUser = () => {
  const { loading, error, loginUser } = useLogin();
  const onFinish = (values) => {
    loginUser(values);
  };
  const onFinishFailed = async (data) => {
    console.log(data);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        className="d-flex flex-column"
        rules={[{ required: true, message: " Email is required" }]}
      >
        <Input placeholder="Enter email" type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          {loading ? <Spin /> : "Login"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginUser;
