import { createBrowserRouter } from "react-router-dom";
import Main from "@/pages/Main"
import Login from "@/pages/Login"
import Welcome from "@/pages/Welcome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
        ]
    },
    {
        path: '/main',
        element: <Main />,
    }
])

export default router;