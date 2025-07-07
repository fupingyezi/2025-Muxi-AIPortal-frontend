import { createBrowserRouter } from 'react-router-dom'
import Main from '@/pages/Main'
import Login from '@/pages/Login'
import Welcome from '@/pages/Welcome'
import { WelcomeContent } from '@/pages/Welcome'
import Chat from '@/pages/Chat'
import ChatInit from '@/pages/ChatInit'
import User from '@/pages/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
    children: [
      {
        index: true,
        element: <WelcomeContent />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        index: true,
        element: <ChatInit />
      },
      {
        path: '/main/chat/:chatId',
        element: <Chat />
      },
      {
        path: '/main/user',
        element: <User />
      }
    ]
  }
])

export default router
