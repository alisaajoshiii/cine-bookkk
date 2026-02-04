import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const ProtectRoute = () => {
    const { user, loading } = useContext(AuthContext);

    // 1. Firebase le user check gardai garda empty wa loading screen dekhaucha
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <h3>Loading...</h3>
            </div>
        );
    }

    // 2. Yadi user login cha bhane bhitra ko page (Outlet) dekhaucha, 
    // hoina bhane login page ma redirect garchha
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;