import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './Admin.scss';
import Sidebar from './Sidebar';
import Header from './Header';

function Admin() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        navigate('/admins/dashboard');
    }, []);

    const handleToggleSidebar = () => setCollapsed((prev) => !prev);
    return (
        <div className="admin-container">
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="admin-content">
                <div className="admin-sidebar">
                    <Sidebar collapsed={collapsed} />
                </div>

                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Admin;
