// import { useState } from 'react'
import "./App.css";
import { Layout } from "antd";
import Logo from "./Components/Logo/Logo";
import Menu from "./Components/Menu/Menu";
import SaveLoad from "./Components/SaveLoad/SaveLoad";

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Layout>
      <Sider className="mainMenu">
        <Logo />
        <Menu />
      </Sider>

      <Layout>
        <Header></Header>
      </Layout>

      <Layout>
        <Content>
          <SaveLoad />
        </Content>
      </Layout>

      <Layout>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

export default App;
