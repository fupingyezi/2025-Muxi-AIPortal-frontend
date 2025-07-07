import { Layout, Menu, List, Button } from 'antd'
import { useNavigate, Outlet } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import './index.scss'

const { Content, Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    label: 'AI生成课表',
    key: '1',
    icon: <img src="/public/assets/calendar_purple.svg" className="menu-img"></img>,
    className: 'menu-item'
  },
  {
    label: 'AI推荐美食',
    key: '2',
    icon: <img src="/public/assets/cooks_purple.svg" className="menu-img"></img>
  }
]

const testData = [
  {
    id: 1,
    title: '提升学习效率'
  },
  {
    id: 2,
    title: '制定饮食计划'
  },
  {
    id: 3,
    title: '期末复习安排'
  },
  {
    id: 4,
    title: '健身增肌计划'
  }
]

const Home = () => {
  const navigate = useNavigate()
  return (
    <Layout className="home-layout">
      <Sider className="home-sider" width={'16rem'}>
        <div className="home-sider-header">
          <div className="header-title">
            <div className="header-title-left">
              <img src="/public/assets/logo.svg" className="header-left-icon"></img>
              <text>桂宝</text>
            </div>
            <div className="header-title-right">
              <img src="/public/assets/set.svg" className="header-right-icon"></img>
            </div>
          </div>
          <Button className="header-button">
            <PlusOutlined />
            新建对话
          </Button>
        </div>
        <div className="home-sider-function">
          <div className="siber-subtitle">
            <text>快捷功能</text>
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
            style={{ border: 'none' }}
            onClick={(e) => {
              navigate(`/main/`)
            }}
          />
        </div>
        <div className="home-sider-history">
          <div className="siber-subtitle">
            <text>历史对话</text>
          </div>
          <List
            itemLayout="horizontal"
            dataSource={testData}
            split={false}
            renderItem={item => (
              <List.Item style={{height: "2.5rem"}} onClick={() => navigate(`/main/chat/${item.id}`)}>
                <List.Item.Meta
                  className="history-item"
                  avatar={<img src="/public/assets/history.svg" />}
                  title={<text className="history-item-title"> {item.title}</text>}
                />
              </List.Item>
            )}
          />
        </div>
      </Sider>
      <Content className='home-content'>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default Home
