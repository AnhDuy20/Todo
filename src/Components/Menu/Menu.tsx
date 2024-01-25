import "./MenuStyle.css"
import { Menu } from "antd";
import {SmileOutlined,CheckCircleOutlined,ExclamationCircleOutlined,FormOutlined} from '@ant-design/icons';

const menu = () => {
  return (
    <Menu theme="dark" mode="inline" className="menu-bar">
        <Menu.Item key="my day" icon={<SmileOutlined/>}>
            My Day
        </Menu.Item>
        <Menu.Item key="task" icon={<FormOutlined />}>
            Task 
        </Menu.Item>
        <Menu.Item key="completed" icon={<CheckCircleOutlined />}>
            Completed
        </Menu.Item>
        <Menu.Item key="important" icon={<ExclamationCircleOutlined />}>
            Important 
        </Menu.Item>
    </Menu>
  );
};

export default menu;