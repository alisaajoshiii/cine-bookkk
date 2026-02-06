import React, { useState, useEffect } from 'react';
import { movies, offers } from '../seedData';
import { Play, Info, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Internal MovieCard Component (Duplicated to avoid external file dependency as per deletion request)
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
                    width: 100%;
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
                    aspect-ratio: 2/3; 
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 8px 25px rgba(155, 89, 182, 0.15);
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
                    background: rgba(74, 35, 90, 0.4);
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

const Home = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Featured movies for slider
    const featuredMovies = movies.slice(0, 3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
        }, 5000); // Auto slide every 5s
        return () => clearInterval(timer);
    }, [featuredMovies.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);

    const nowShowing = movies.filter(m => m.category === 'now_showing');
    const comingSoon = movies.filter(m => m.category === 'coming_soon');

    return (
        <div className="home-page animate-fade-in">
            {/* Hero Slider */}
            <div className="hero-slider">
                {featuredMovies.map((movie, index) => (
                    <div
                        key={movie.id}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${movie.backdrop})` }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="container hero-content">
                            <span className="hero-badge">Now Trending 🌸</span>
                            <h1 className="hero-title">{movie.title}</h1>
                            <div className="hero-meta">
                                <span>{movie.genre}</span>
                                <span className="dot">•</span>
                                <span>{movie.duration}</span>
                                <span className="dot">•</span>
                                <span className="rating-pill">★ {movie.rating}</span>
                            </div>
                            <p className="hero-desc">{movie.description}</p>
                            <div className="hero-actions">
                                <button className="btn btn-primary btn-lg" onClick={() => navigate(`/book/${movie.id}`)}>
                                    <Play fill="white" size={20} /> Book Tickets
                                </button>
                                <button className="btn btn-glass btn-lg" onClick={() => navigate(`/movie/${movie.id}`)}>
                                    <Info size={20} /> Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slider Controls */}
                <button className="slider-btn prev" onClick={prevSlide}><ChevronLeft size={30} /></button>
                <button className="slider-btn next" onClick={nextSlide}><ChevronRight size={30} /></button>

                {/* Slider Indicators */}
                <div className="slider-dots">
                    {featuredMovies.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${idx === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(idx)}
                        ></span>
                    ))}
                </div>
            </div>

            {/* Quick Actions / Categories */}
            <div className="container category-strip">
                <div className="category-card" onClick={() => navigate('/movies')}>
                    <span className="cat-icon">🍿</span>
                    <span>All Movies</span>
                </div>
                <div className="category-card" onClick={() => navigate('/cinemas')}>
                    <span className="cat-icon">🏛️</span>
                    <span>Cinemas</span>
                </div>
                <div className="category-card" onClick={() => navigate('/offers')}>
                    <span className="cat-icon">🎟️</span>
                    <span>Deals</span>
                </div>
                <div className="category-card">
                    <span className="cat-icon">🥤</span>
                    <span>Food</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container" style={{ paddingBottom: '60px' }}>

                {/* Now Showing */}
                <section className="movie-section">
                    <div className="section-header">
                        <h2 className="section-title-left">Now Showing 🎬</h2>
                        <button className="view-all-btn" onClick={() => navigate('/movies')}>
                            View All <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="movie-scroll-container">
                        {nowShowing.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </section>

                {/* Promo Banner */}
                <div className="promo-banner">
                    <div className="promo-content">
                        <h3>Lavender Spring Festival 🌷</h3>
                        <p>Experience movies like never before with our seasonal floral theme.</p>
                        <button className="btn btn-white" onClick={() => navigate('/offers')}>Check Offers</button>
                    </div>
                    <div className="promo-image"></div>
                </div>

                {/* Coming Soon */}
                <section className="movie-section">
                    <div className="section-header">
                        <h2 className="section-title-left">Coming Soon ⏳</h2>
                        <button className="view-all-btn" onClick={() => navigate('/movies')}>
                            View All <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="movie-scroll-container">
                        {comingSoon.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </section>
            </div>

            <style>{`
                /* Slider Styles */
                .hero-slider {
                    position: relative;
                    height: 85vh;
                    overflow: hidden;
                    border-bottom-left-radius: 40px;
                    border-bottom-right-radius: 40px;
                    box-shadow: 0 10px 40px rgba(155, 89, 182, 0.2);
                }
                .hero-slide {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center top;
                    opacity: 0;
                    transition: opacity 1s ease;
                    display: flex;
                    align-items: center;
                }
                .hero-slide.active {
                    opacity: 1;
                    z-index: 1;
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(74, 35, 90, 0.9) 25%, rgba(74, 35, 90, 0.3) 100%);
                }
                .hero-content {
                    position: relative;
                    z-index: 10;
                    max-width: 700px;
                    color: white;
                    padding-left: 20px;
                }
                .hero-badge {
                    background: var(--primary);
                    padding: 6px 16px;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: inline-block;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                }
                .hero-title {
                    font-size: 4.5rem;
                    line-height: 1.1;
                    margin-bottom: 20px;
                    text-shadow: 0 4px 20px rgba(0,0,0,0.4);
                    color: white;
                }
                .hero-meta {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    font-size: 1.2rem;
                    margin-bottom: 25px;
                    color: rgba(255,255,255,0.9);
                }
                .rating-pill {
                    background: #f1c40f;
                    color: #000;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-weight: bold;
                    font-size: 1rem;
                }
                .hero-desc {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    margin-bottom: 40px;
                    color: rgba(255,255,255,0.85);
                    max-width: 600px;
                }
                .hero-actions {
                    display: flex;
                    gap: 20px;
                }
                .btn-lg {
                    padding: 16px 36px;
                    font-size: 1.1rem;
                }
                .btn-glass {
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.4);
                    color: white;
                }
                .btn-glass:hover {
                    background: rgba(255,255,255,0.3);
                }
                
                .slider-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 20;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: white;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .slider-btn:hover {
                    background: var(--primary);
                }
                .slider-btn.prev { left: 40px; }
                .slider-btn.next { right: 40px; }
                
                .slider-dots {
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 20;
                    display: flex;
                    gap: 10px;
                }
                .slider-dots .dot {
                    width: 12px;
                    height: 12px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .slider-dots .dot.active {
                    background: var(--primary);
                    transform: scale(1.2);
                }

                /* Categories */
                .category-strip {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-top: -50px;
                    position: relative;
                    z-index: 30;
                    padding-bottom: 60px;
                }
                .category-card {
                    background: white;
                    padding: 20px 40px;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    transition: transform 0.3s;
                    min-width: 140px;
                }
                .category-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(155, 89, 182, 0.2);
                }
                .cat-icon {
                    font-size: 2rem;
                }

                /* Sections */
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 25px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid rgba(155, 89, 182, 0.1);
                }
                .section-title-left {
                    font-size: 2rem;
                    color: var(--text-main);
                    margin: 0;
                }
                .view-all-btn {
                    color: var(--primary);
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 1rem;
                }
                
                .movie-scroll-container {
                    display: flex;
                    gap: 30px;
                    overflow-x: auto;
                    padding: 10px 5px 30px 5px;
                    scrollbar-width: thin;
                }

                /* Promo Banner */
                .promo-banner {
                    margin: 40px 0 80px;
                    background: linear-gradient(135deg, #9b59b6, #ff6b81);
                    border-radius: 25px;
                    padding: 50px;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .promo-content {
                    position: relative;
                    z-index: 10;
                    max-width: 50%;
                }
                .promo-content h3 {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                    color: white;
                }
                .promo-content p {
                    font-size: 1.2rem;
                    margin-bottom: 25px;
                    opacity: 0.9;
                }
                .btn-white {
                    background: white;
                    color: var(--primary);
                    padding: 12px 30px;
                    border-radius: 30px;
                    font-weight: bold;
                    font-size: 1.1rem;
                }
                .promo-image {
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 50%;
                    height: 100%;
                    background-image: url('https://images.unsplash.com/photo-1563245372-f21720e32c4d?q=80&w=1974');
                    background-size: cover;
                    background-position: center;
                    mask-image: linear-gradient(to right, transparent, black);
                    -webkit-mask-image: linear-gradient(to right, transparent, black);
                }
                
                @media (max-width: 768px) {
                    .hero-title { font-size: 2.5rem; }
                    .hero-slider { height: 70vh; }
                    .category-strip { 
                        flex-wrap: wrap; 
                        gap: 15px; 
                        margin-top: 20px; 
                    }
                    .category-card { width: calc(50% - 15px); }
                    .promo-banner { 
                        flex-direction: column; 
                        padding: 30px; 
                        text-align: center;
                        background: linear-gradient(135deg, #9b59b6, #ff6b81);
                    }
                    .promo-content { max-width: 100%; margin-bottom: 20px; }
                    .promo-image { 
                        position: relative; 
                        width: 100%; 
                        height: 200px; 
                        mask-image: none;
                        -webkit-mask-image: none;
                        border-radius: 12px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;
