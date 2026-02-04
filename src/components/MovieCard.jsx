import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    return (
        <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
            <div className="poster-wrapper">
                <img src={movie.posterUrl} alt={movie.title} className="poster-img" />
                <div className="card-overlay">
                    <button className="btn btn-primary compact-btn">View Details</button>
                </div>
                <div className="rating-badge">
                    <Star size={12} fill="#ffc107" stroke="none" />
                    <span>{movie.rating}</span>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
            </div>
            <style>{`
                .movie-card {
                    width: 100%; /* Changed from fixed 200px to 100% to fit grid */
                    min-width: 180px;
                    flex-shrink: 0;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }
                .movie-card:hover {
                    transform: translateY(-8px);
                }
                .poster-wrapper {
                    position: relative;
                    aspect-ratio: 2/3; /* Enforce standard movie poster ratio */
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 8px 25px rgba(155, 89, 182, 0.15); /* Soft purple shadow */
                }
                .poster-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .movie-card:hover .poster-img {
                    transform: scale(1.08);
                }
                .card-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(74, 35, 90, 0.4); /* Deep purple overlay */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    backdrop-filter: blur(2px);
                }
                .movie-card:hover .card-overlay {
                    opacity: 1;
                }
                .compact-btn {
                    padding: 8px 16px;
                    font-size: 0.9rem;
                }
                .rating-badge {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: rgba(255, 255, 255, 0.9);
                    color: #000;
                    padding: 4px 8px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-weight: bold;
                    font-size: 0.8rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                .movie-info {
                    padding: 12px 0;
                }
                .movie-info h3 {
                    font-size: 1.1rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: 4px;
                    color: var(--text-main);
                }
                .movie-info p {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                }
            `}</style>
        </div>
    );
};

export default MovieCard;