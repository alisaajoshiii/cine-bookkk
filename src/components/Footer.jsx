import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={styles.content}>
                    <p style={{ color: '#666', marginBottom: '10px' }}>
                        &copy; {new Date().getFullYear()} CineBook. All rights reserved.
                    </p>
                    <div style={styles.links}>
                        <a href="#" style={styles.link}>Privacy Policy</a>
                        <a href="#" style={styles.link}>Terms of Service</a>
                        <a href="#" style={styles.link}>Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#000',
        padding: '40px 0',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.1)'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    links: {
        display: 'flex',
        gap: '20px',
        marginTop: '10px'
    },
    link: {
        color: '#666',
        fontSize: '0.9rem'
    }
};

export default Footer;
