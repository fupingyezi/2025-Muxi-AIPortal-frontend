import './index.scss'
import { Form, Input, Button, Checkbox } from 'antd'
import type { FormProps } from 'antd'
import { useNavigate } from 'react-router-dom'

export type formType = {
  studentId: string
  password: string
  isAgree: boolean
}
const Login = () => {
  const navigate = useNavigate()
  const onFinish: FormProps<formType>['onFinish'] = (values: any) => {
    console.log('Received values of form: ', values)
    navigate('/main')
  }
  const onFinishFailed: FormProps<formType>['onFinishFailed'] = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="login-page">
      <Form
        className="login-page-form"
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="login-page-form-header">
          <img src="/public/assets/logo.svg" className="icon"></img>
          <text className="login-page-form-title">统一身份认证</text>
        </div>
        <Form.Item<formType> name="studentId" rules={[{ required: true, message: '请输入学号' }]}>
          <div className="login-page-form-subtitle">学号</div>
          <Input className="login-page-form-input" placeholder="请输入学号" />
        </Form.Item>
        <Form.Item<formType> name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <div className="login-page-form-subtitle">密码</div>
          <Input.Password className="login-page-form-input" placeholder="请输入密码" />
        </Form.Item>
        <Form.Item<formType>
          style={{ display: 'flex', justifyContent: 'flex-start', width: '16rem' }}
          name="isAgree"
        >
          <Checkbox className="login-page-form-checkbox">已阅读并同意服务协议</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-page-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
