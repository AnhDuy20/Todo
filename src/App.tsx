// import { useState } from 'react'
import "./App.css";
import { Layout } from "antd";
import Logo from "./Components/Logo/Logo";
import Menu from "./Components/Menu/Menu";
import Todo from "./Components/Todo/Todo";

const { Header, Sider, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Sider className="mainMenu">
        <Logo />
        <Menu />
      </Sider>

      <Layout>
        <Header>
          <Todo />
        </Header>
      </Layout>

      <Layout>
        <Content></Content>
      </Layout>

      <Layout>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

export default App;
