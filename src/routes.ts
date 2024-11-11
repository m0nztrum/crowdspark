import { App } from './App';
import { createElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AdminDashboard } from '@/routes/admin/Dashboard';
import { AdminLogin } from '@/routes/admin/Login';
import { AdminTeam } from '@/routes/admin/Team';
import { AdminEvents } from '@/routes/admin/Event';

export const router = createBrowserRouter([
    {
        path: '/',
        element: createElement(App),
        children: [],
    },
    {
        path: '/app',
        children: [
            {
                index: true,
                element: createElement(AdminLogin),
            },
            {
                path: 'dashboard',
                element: createElement(AdminDashboard),
            },
            {
                path: 'team',
                element: createElement(AdminTeam),
            },
            {
                path: 'events',
                element: createElement(AdminEvents),
            },
        ],
    },
]);
