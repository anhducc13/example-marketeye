import React from "react";
import { Layout, Breadcrumb } from "antd";
import "./App.css";
import { ShopForm } from "./components/ShopForm";
import { ShopList } from "./components/ShopList";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Breadcrumb
        style={{
          textTransform: "uppercase",
          margin: "10px 16px 0"
        }}
      >
        <Breadcrumb.Item href="">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Marketeye::Core</Breadcrumb.Item>
        <Breadcrumb.Item href="">Shops</Breadcrumb.Item>
        <Breadcrumb.Item>Add Shop</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280
        }}
      >
        <ShopList />
      </Content>
    </Layout>
  );
}

export default App;
