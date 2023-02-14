import React from "react";
// import PropTypes from "prop-types";
import { Menu, Row, Col } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default class Header extends React.Component {
  //   static propTypes = {
  //     isFirstScreen: PropTypes.bool,
  //     isMoblie: PropTypes.bool,
  //   };

  render() {
    return (
      <header
        id="header"
        className="header"
        style={{ color: "white", backgroundColor: "rgba(105, 185, 157, 0.8)" }}
      >
        <Row>
          <Col span={8}>
            <div
              style={{
                color: "white",
                fontSize: "18px",
                backgroundColor: "transparent",
                padding: "16px 10px",
              }}
            >
              <HomeOutlined />
              &nbsp;&nbsp;
              <span key="app-name">
                <b>HouseNet</b>
              </span>
            </div>
          </Col>

          <Col span={12}>
            <Menu
              id="nav"
              key="nav"
              mode="horizontal"
              style={{
                color: "white",
                fontSize: "16px",
                backgroundColor: "transparent",
                height: "100%",
              }}
            >
              <Menu.Item key="home">
                <b>Home</b>
              </Menu.Item>
              <Menu.Item key="search">
                <b>Search A Rental</b>
              </Menu.Item>
              <Menu.Item key="wishlists">
                <b>My Wishlists</b>
              </Menu.Item>
              <Menu.Item key="chathub">
                <b>Chathub</b>
              </Menu.Item>
              <Menu.Item key="contact">
                <b>Contact</b>
              </Menu.Item>
            </Menu>
          </Col>

          <Col span={4}>
            <Menu
              id="sign"
              key="sign"
              mode="horizontal"
              style={{
                color: "white",
                fontSize: "16px",
                backgroundColor: "transparent",
                height: "100%",
              }}
            >
              <Menu.Item key="sign-in">
                <b>Sign In</b>{" "}
              </Menu.Item>
              <Menu.Item key="sign-up">
                <b>Sign Up </b>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}
