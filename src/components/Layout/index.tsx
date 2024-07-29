import React, { FC, ReactNode, useEffect, useState } from 'react';
import {
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import {  TableChartOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('User', '1', <UserOutlined />),
  getItem('Table', 'table', <TableChartOutlined />),
  getItem('Friend', 'friend', <TeamOutlined />),
];

const MainLayout: FC<{children: ReactNode}> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const [activeKey, setActiveKey] = useState<string>('');

  useEffect(() => {
    if (location.pathname && location.pathname !== '/') {
        let pathname: string[] = location.pathname.split('/');
        setActiveKey(pathname[pathname.length - 1])
    }
  }, []);

  const handleClickMenu = (value: any) => {
    let key = value.key.toString();
    if(key !== '1') {
        setActiveKey(key);
        navigate(`/${key}`);
    } else {
        setActiveKey(key);
        navigate('/');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu onClick={handleClickMenu} theme="dark" selectedKeys={[activeKey]} defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children ?? 'No Path'}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
