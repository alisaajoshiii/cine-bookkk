import React, { useState } from 'react';
import { useAuth } from '../context/Authcontext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate('/');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card animate-fade-in">
                <h2>Welcome Back 🌸</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="flower@garden.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '15px', color: '#7f8c8d' }}>
                    Don't have an account? <Link to="/signup" style={{ color: '#9b59b6', fontWeight: 'bold' }}>Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
