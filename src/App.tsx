// import { useState } from 'react'
import "./App.css";
import { Layout, Flex } from "antd";
import Logo from "./Components/Logo/Logo";
import Menu from "./Components/Menu/Menu";
import SaveLoad from "./Components/SaveLoad/SaveLoad";

const { Header, Sider, Content } = Layout;
function App() {
  return (
    <Flex gap="middle" wrap="wrap" align="center" justify="center">
      <Layout className="layoutStyle">
        <Header className="headerStyle">
          <Logo />
        </Header>
        <Layout>
          <Sider width="290px" className="siderStyle">
            <Menu />
          </Sider>
          <Content className="contentStyle">
            <SaveLoad />
          </Content>
        </Layout>
      </Layout>
    </Flex>
  );
}

export default App;
