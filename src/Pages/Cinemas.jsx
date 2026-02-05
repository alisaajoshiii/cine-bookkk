import React from 'react';
import { cinemas } from '../data';
import { MapPin, Film } from 'lucide-react';

const Cinemas = () => {
    return (
        <div className="container animate-fade-in" style={{ padding: '50px 24px' }}>
            <h2 className="section-title">Our Cinemas</h2>

            <div className="cinema-list">
                {cinemas.map(cinema => (
                    <div key={cinema.id} className="cinema-card">
                        <div className="cinema-img" style={{ backgroundImage: `url(${cinema.image})` }}></div>
                        <div className="cinema-info">
                            <h3>{cinema.name}</h3>
                            <p className="cinema-location"><MapPin size={16} /> {cinema.location}</p>
                            <div className="facilities">
                                {cinema.facilities.map((fac, idx) => (
                                    <span key={idx} className="badge">{fac}</span>
                                ))}
                            </div>
                            <a href="/movies" className="btn btn-primary" style={{ marginTop: 'auto', textAlign: 'center', textDecoration: 'none' }}>View Shows</a>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .cinema-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 30px;
                }
                .cinema-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s;
                }
                .cinema-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                }
                .cinema-img {
                    height: 180px;
                    background-size: cover;
                    background-position: center;
                }
                .cinema-info {
                    padding: 20px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .cinema-location {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    color: var(--text-secondary);
                }
                .facilities {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin: 10px 0;
                }
                .badge {
                    background: #f3e5f5;
                    color: var(--primary);
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.8rem;
                }
            `}</style>
        </div>
    );
};

export default Cinemas;
