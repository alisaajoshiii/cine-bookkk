import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Check local storage for initial state
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (email, password) => {
        // Mock Login
        const mockUser = {
            id: 1,
            name: "Lavender Lover",
            email: email,
            avatar: "https://i.pravatar.cc/150?img=32"
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        return true;
    };

    const signup = (name, email, password) => {
        // Mock Signup
        const mockUser = {
            id: Date.now(),
            name: name,
            email: email,
            avatar: `https://ui-avatars.com/api/?name=${name}&background=9b59b6&color=fff`
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const value = {
        user,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
