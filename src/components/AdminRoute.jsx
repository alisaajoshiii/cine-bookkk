import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const AdminRoute = () => {
    const { user, loading } = useContext(AuthContext);

    // 1. Data load hudai cha bhane loading screen dekhaune
    if (loading) {
        return <div>Loading...</div>;
    }

    // 2. User login bhayeko cha ra tyo user 'admin' ho ki nai check garne
    // Note: User admin ho ki haina bhannu kura Firebase ko user document ma 'role: admin' rakhera check garnu parcha
    const isAdmin = user && user.email === "admin@example.com"; // Ahileko lai manual check

    return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;