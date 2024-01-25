// import { useState } from 'react'
import './App.css'
import { Layout} from 'antd'
import Logo from './Components/Logo/Logo'
import Menu from './Components/Menu/Menu'

const {Header , Sider} = Layout;
function App() {
    return (
        <Layout>
            <Sider className="mainMenu">
              <Logo/>
              <Menu/>
            </Sider>
            <Layout>
              <Header>
                
              </Header>
            </Layout>
        </Layout>
    );
}

export default App
