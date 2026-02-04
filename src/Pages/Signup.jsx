import React, { useState } from 'react';
import { useAuth } from '../context/Authcontext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signup(name, email, password)) {
            navigate('/');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card animate-fade-in">
                <h2>Join the Garden 🌷</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            required
                            placeholder="Rose Petal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" className="btn btn-secondary" style={{ width: '100%' }}>Sign Up</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '15px', color: '#7f8c8d' }}>
                    Already have an account? <Link to="/login" style={{ color: '#9b59b6', fontWeight: 'bold' }}>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
