import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X, Flower } from 'lucide-react'; // Changed Ticket to Flower for theme
import { useAuth } from '../context/Authcontext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                {/* Logo */}
                <Link to="/" style={styles.logo}>
                    <Flower color="#9b59b6" size={32} />
                    <span style={{ color: '#4a235a', fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '8px', fontFamily: 'var(--font-heading)' }}>
                        CineGarden
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" style={styles.link} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/movies" style={styles.link} onClick={() => setMobileMenuOpen(false)}>Movies</Link>
                    <Link to="/cinemas" style={styles.link} onClick={() => setMobileMenuOpen(false)}>Cinemas</Link>
                    <Link to="/offers" style={styles.link} onClick={() => setMobileMenuOpen(false)}>Offers</Link>
                </div>

                {/* Actions */}
                <div style={styles.actions}>
                    <div style={styles.iconButton}>
                        <Search size={20} color="#4a235a" />
                    </div>

                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="user-menu" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                <img src={user.avatar} alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                                <span style={{ fontWeight: 'bold', color: '#4a235a', display: window.innerWidth < 768 ? 'none' : 'block' }}>{user.name}</span>
                            </div>
                            <button onClick={logout} className="btn-outline" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>Logout</button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Link to="/login" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Login</Link>
                            {/* <Link to="/signup" className="btn btn-outline" style={{padding: '8px 16px', fontSize: '0.9rem'}}>Sign Up</Link> */}
                        </div>
                    )}

                    <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X color="#4a235a" /> : <Menu color="#4a235a" />}
                    </div>
                </div>
            </div>

            <style>{`
                .nav-links {
                    display: flex;
                    gap: 30px;
                }
                .mobile-toggle {
                    display: none;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        height: calc(100vh - 70px);
                        background: white;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(100%);
                        transition: transform 0.3s ease;
                        z-index: 99;
                    }
                    .nav-links.open {
                        transform: translateX(0);
                    }
                    .mobile-toggle {
                        display: block;
                    }
                }
            `}</style>
        </nav>
    );
};

const styles = {
    nav: {
        height: 'var(--nav-height)',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(155, 89, 182, 0.1)'
    },
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    },
    link: {
        color: 'var(--text-main)',
        fontWeight: '500',
        transition: 'var(--transition)',
        fontSize: '1rem'
    },
    actions: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center'
    },
    iconButton: {
        padding: '8px',
        cursor: 'pointer',
        transition: 'var(--transition)'
    }
};

export default Navbar;
