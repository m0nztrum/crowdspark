import { App } from './App';
import { createElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AdminDashboard } from '@/routes/admin/Dashboard';
import { AdminLogin } from '@/routes/admin/Login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: createElement(App),
        children: [],
    },
    {
        path: '/app',
        element: createElement(AdminLogin),
        children: [
            {
                path: 'dashboard',
                element: createElement(AdminDashboard),
            },
        ],
    },
]);
