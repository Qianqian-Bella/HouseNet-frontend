import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import Header from "../components/Headers";
import axios from "axios";

const Signin = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);


  const onFinish = (values) => {
    setLoading(true);
    // Perform registration logic here, e.g. API call to backend
    axios
      .post("/api/register", values)
      .then(() => {
        message.success("Registration successful!");
        setLoading(false);
        // history.push("/");
      })
      .catch((error) => {
        message.error("Registration failed. Please try again.");
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className="signin">
      <Header />
      <div
        className="signin-form"
        style={{ maxWidth: 400, margin: "auto", marginTop: 100 }}
      >
        <h1>Sign in an account</h1>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              { min: 4, message: "Username must be at least 4 characters" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 8, message: "Password must be at least 8 characters" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
