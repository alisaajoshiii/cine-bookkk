import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '../data';
import { Clock, Star, Calendar, ArrowLeft } from 'lucide-react';

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find(m => m.id === parseInt(id));

    if (!movie) return <div className="container" style={{ padding: '100px' }}>Movie not found</div>;

    return (
        <div className="detail-page animate-fade-in">
            {/* Backdrop */}
            <div className="backdrop-banner" style={{ backgroundImage: `url(${movie.backdrop})` }}>
                <div className="backdrop-overlay"></div>
            </div>

            <div className="container main-content">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} /> Back
                </button>

                <div className="content-wrapper">
                    <div className="poster-section">
                        <img src={movie.posterUrl} alt={movie.title} />
                    </div>

                    <div className="info-section">
                        <h1>{movie.title}</h1>

                        <div className="meta-info">
                            <span className="meta-item"><Star size={18} color="#e50914" /> {movie.rating}/10</span>
                            <span className="meta-item"><Clock size={18} /> {movie.duration}</span>
                            <span className="meta-item">{movie.genre}</span>
                        </div>

                        <p className="description">{movie.description}</p>

                        <div className="cast-section">
                            <h3>Cast</h3>
                            <div className="cast-list">
                                {movie.cast.map((actor, idx) => (
                                    <div key={idx} className="cast-pill">{actor}</div>
                                ))}
                            </div>
                        </div>

                        <div className="price-tag">
                            Price: <span>Rs. {movie.price}</span>
                        </div>

                        <button className="book-btn-lg" onClick={() => navigate(`/book/${movie.id}`)}>
                            Book Tickets
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .detail-page {
                    min-height: 100vh;
                    padding-bottom: 50px;
                }
                .backdrop-banner {
                    height: 50vh;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }
                .backdrop-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent, var(--background));
                }
                .main-content {
                    margin-top: -150px;
                    position: relative;
                    z-index: 10;
                }
                .back-btn {
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 20px;
                    font-size: 1.1rem;
                }
                .content-wrapper {
                    display: flex;
                    gap: 50px;
                }
                .poster-section img {
                    width: 300px;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
                .info-section {
                    flex: 1;
                    padding-top: 50px;
                }
                .info-section h1 {
                    font-size: 3rem;
                    margin-bottom: 20px;
                }
                .meta-info {
                    display: flex;
                    gap: 20px;
                    color: var(--text-secondary);
                    margin-bottom: 30px;
                }
                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .description {
                    font-size: 1.1rem;
                    color: #ddd;
                    margin-bottom: 30px;
                    line-height: 1.8;
                }
                .cast-section h3 {
                    margin-bottom: 15px;
                    font-size: 1.2rem;
                }
                .cast-list {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 30px;
                }
                .cast-pill {
                    background: var(--surface);
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 0.9rem;
                }
                .price-tag {
                    font-size: 1.5rem;
                    margin-bottom: 20px;
                }
                .price-tag span {
                    color: var(--primary);
                    font-weight: bold;
                }
                .book-btn-lg {
                    background: var(--primary);
                    color: white;
                    padding: 16px 48px;
                    font-size: 1.2rem;
                    font-weight: bold;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(229, 9, 20, 0.4);
                }
                .book-btn-lg:hover {
                    background: var(--primary-hover);
                    transform: translateY(-2px);
                }
                @media (max-width: 768px) {
                    .content-wrapper {
                        flex-direction: column;
                        gap: 30px;
                    }
                    .poster-section img {
                        width: 200px;
                    }
                    .info-section {
                        padding-top: 0;
                    }
                    .info-section h1 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default MovieDetail;
