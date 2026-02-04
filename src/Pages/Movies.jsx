import React, { useState } from 'react';
import { movies } from '../data';
import MovieCard from '../components/MovieCard';
import { Filter, Search } from 'lucide-react';

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');

    const genres = ["All", "Action", "Sci-Fi", "Drama", "Animation", "Crime", "Thriller"];

    const filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre === 'All' || movie.genre.includes(selectedGenre);
        return matchesSearch && matchesGenre;
    });

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>

            <div className="movies-header">
                <div>
                    <h2 className="page-title">Explore Movies 🎬</h2>
                    <p className="subtitle">Find your next favorite film</p>
                </div>

                {/* Search Bar */}
                <div className="search-wrapper">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Filter Pills */}
            <div className="filter-bar">
                <span className="filter-label"><Filter size={16} /> Genre:</span>
                <div className="genre-list">
                    {genres.map(genre => (
                        <button
                            key={genre}
                            className={`filter-pill ${selectedGenre === genre ? 'active' : ''}`}
                            onClick={() => setSelectedGenre(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>

            {/* Movies Grid */}
            {filteredMovies.length > 0 ? (
                <div className="movie-grid-large">
                    {filteredMovies.map(movie => (
                        <div className="movie-grid-item" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <h3>No movies found 🥀</h3>
                    <p>Try adjusting your search or filter.</p>
                </div>
            )}

            <style>{`
                .movies-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .page-title {
                    font-size: 2.5rem;
                    color: var(--primary);
                    margin-bottom: 5px;
                }
                .subtitle {
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                }
                
                .search-wrapper {
                    position: relative;
                    width: 300px;
                }
                .search-wrapper input {
                    width: 100%;
                    padding: 12px 12px 12px 45px;
                    border: 1px solid #ddd;
                    border-radius: 30px;
                    font-size: 1rem;
                    background: white;
                    transition: all 0.3s;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                }
                .search-wrapper input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 4px 15px rgba(155, 89, 182, 0.15);
                }
                .search-icon {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #aaa;
                }

                .filter-bar {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 40px;
                    overflow-x: auto;
                    padding-bottom: 10px;
                }
                .filter-label {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-weight: bold;
                    color: var(--text-main);
                }
                .genre-list {
                    display: flex;
                    gap: 10px;
                }
                .filter-pill {
                    padding: 8px 16px;
                    border-radius: 20px;
                    border: 1px solid #ddd;
                    background: white;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                }
                .filter-pill:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                }
                .filter-pill.active {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                }

                .movie-grid-large {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                    gap: 40px 30px;
                    justify-items: center;
                }
                .movie-grid-item {
                    transition: transform 0.3s;
                }
                .movie-grid-item:hover {
                    z-index: 10;
                }

                .no-results {
                    text-align: center;
                    padding: 60px;
                    color: var(--text-secondary);
                }
                .no-results h3 {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                }

                @media (max-width: 768px) {
                    .movies-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .search-wrapper {
                        width: 100%;
                    }
                    .movie-grid-large {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Movies;
