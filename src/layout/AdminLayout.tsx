import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface AdminLayoutProps {
    children: ReactNode;
    title: string;
}

const menuLinks = [
    { id: 1, name: 'Dashboard', path: '/app/dashboard' },
    { id: 2, name: 'Event', path: '/app/events' },
    { id: 3, name: 'Team', path: '/app/team' },
];

export const AdminLayout = ({ children, title }: AdminLayoutProps) => {
    return (
        <div>
            <header className="fixed left-56 right-0 top-0 h-16 border-b border-b-neutral-300 p-4">
                <div>
                    <div>
                        <h1 className="font-semibold">{title}</h1>
                    </div>
                </div>
            </header>
            <aside className="top fixed bottom-0 left-0 top-0 w-56 border-r border-r-neutral-300 p-4">
                <h1 className="text-2xl font-bold">Crowdspark Q&A</h1>
                <div className="mt-10 flex flex-col gap-4">
                    {menuLinks.map((menu) => (
                        <NavLink
                            to={menu.path}
                            key={menu.id}
                            className={({ isActive }: { isActive: boolean }) =>
                                [
                                    'rounded px-4 py-2 hover:bg-neutral-300',
                                    isActive ? 'bg-neutral-400' : '',
                                ].join(' ')
                            }
                        >
                            {menu.name}
                        </NavLink>
                    ))}
                </div>
            </aside>
            <main className="absolute left-56 top-16 p-6">{children}</main>
        </div>
    );
};
