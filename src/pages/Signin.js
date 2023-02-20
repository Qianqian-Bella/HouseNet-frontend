import React, { Component } from "react";
import { Form, Input, Button, message, Checkbox } from "antd";
import Header from "../components/Headers";
import axios from "axios";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "brian",
      password: "123456",
      loading: false,
      checked: false,
      disabled: false,
    };
    this.label = `${this.state.checked ? "Remembered!" : "Remember me"}`;
    this.toggleDisable = this.toggleDisable.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleUsenameChange = this.handleUsenameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onFinish = this.onFinish.bind(this);
  }

  toggleDisable() {
    this.setState({ disabled: !this.state.disabled });
  }

  handleCheckboxChange(event) {
    console.log("checked = ", event.target.checked);
    this.setState({ checked: event.target.checked });
  }

  handleUsenameChange(event) {
    console.log("username = ", event.target.value);
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event) {
    console.log("password = ", event.target.value);
    this.setState({ password: event.target.value });
  }
  onFinish(values) {
    this.setState({ loading: true });
    axios
      .post("/api/register", values)
      .then(() => {
        message.success("Registration successful!");
        this.setState({ loading: false });
      })
      .catch((error) => {
        message.error("Registration failed. Please try again.");
        this.setState({ loading: false });
        console.error(error);
      });
  }

  render() {
    return (
      <div className="signin">
        <Header />
        <div
          className="signin-form"
          style={{ maxWidth: 400, margin: "auto", marginTop: 100 }}
        >
          <h1>Sign in an account</h1>
          <Form layout="vertical" onFinish={this.onFinish}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
                { min: 4, message: "Username must be at least 4 characters" },
              ]}
            >
              <Input
                name="userName"
                placeholder={this.state.username}
                size="large"
                onChange={this.handleUsenameChange}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            >
              <Input.Password
                name="password"
                placeholder={this.state.password}
                size="large"
                onChange={this.handlePasswordChange}
              />

              <Checkbox
                checked={this.state.checked}
                disabled={this.state.disabled}
                onChange={this.handleCheckboxChange}
              >
                {`${this.state.checked ? "Remembered!" : "Remember me"}`}
              </Checkbox>

              <Button
                style={{ margin: "0 5px" }}
                type="primary"
                size="small"
                onClick={this.toggleDisable}
              >
                {!this.state.disabled ? "Disable" : "Enable"}
              </Button>

              <a className="login-form-forgot" href="/sign-up">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={this.state.loading}
                size="large"
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signin;
