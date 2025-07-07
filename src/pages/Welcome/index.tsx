import './index.scss'
import MyIcon from '@/components/MyIcon'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="welcome-page">
      <img src="/public/assets/back.png" className="welcome-page-backimg" />
      <div className="welcome-page-overlay"></div>
      <div className="welcome-page-header">
        <div className="welcome-page-header-left">
          <MyIcon url="/public/assets/roboto.svg"></MyIcon>
          <img src="/public/assets/logo.svg" className="icon"></img>
          <text className="welcome-page-header-title">桂宝</text>
        </div>
        {location.pathname === '/' && (
          <div className="welcome-page-header-right">
            <Button
              onClick={() => navigate('/login')}
              style={{ height: '2.5rem', width: '4rem', backgroundColor: '#FDCD22' }}
              type="primary"
            >
              登录
            </Button>
          </div>
        )}
      </div>

      {/* 内容区域改为路由出口 */}
      <div className="welcome-page-content">
        <Outlet />
      </div>
    </div>
  )
}

// 新增独立内容组件
const WelcomeContent = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="welcome-page-content-icons">
        {['brains', 'calendar', 'cooks'].map(icon => {
          return <MyIcon url={`/public/assets/${icon}.svg`} width="4rem" height="4rem"></MyIcon>
        })}
      </div>
      <text className="welcome-page-content-title">桂宝</text>
      <text className="welcome-page-content-subtitle">
        专为大学生打造的智能伙伴！在这里，你可以畅聊学业难题、探索兴趣爱
        好、分享校园生活，借助AI的智慧力量，让大学生活更加丰富多彩，一起开
        启充满乐趣与成长的智能之旅吧。{' '}
      </text>
      <Button
        onClick={() => navigate('./main')}
        style={{ height: '2.5rem', width: '10rem', backgroundColor: '#FDCD22' }}
        type="primary"
      >
        开始对话
        <ArrowRightOutlined />
      </Button>
    </>
  )
}

export { WelcomeContent }
export default Welcome
