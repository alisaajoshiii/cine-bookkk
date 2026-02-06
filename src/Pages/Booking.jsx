import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '../seedData';
import { ArrowLeft, Check } from 'lucide-react';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find(m => m.id === parseInt(id));

    const rows = 8;
    const cols = 10;
    const pricePerSeat = movie ? movie.price : 500;

    // Simulate booked seats
    const bookedSeats = ['2-3', '2-4', '5-5', '5-6', '5-7'];

    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeat = (row, col) => {
        const seatId = `${row}-${col}`;
        if (bookedSeats.includes(seatId)) return;

        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const handleBooking = () => {
        alert(`Booking Confirmed!\nMovie: ${movie.title}\nSeats: ${selectedSeats.join(', ')}\nTotal: Rs. ${selectedSeats.length * pricePerSeat}`);
        navigate('/');
    };

    if (!movie) return <div>Movie not found</div>;

    return (
        <div className="booking-page animate-fade-in">
            <div className="container">
                <header className="booking-header">
                    <button onClick={() => navigate(-1)} className="back-btn-simple">
                        <ArrowLeft />
                    </button>
                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.duration} • {movie.genre}</p>
                    </div>
                </header>

                <div className="screen-container">
                    <div className="screen"></div>
                    <p>SCREEN THIS WAY</p>
                </div>

                <div className="seats-grid">
                    {Array.from({ length: rows }).map((_, r) => (
                        <div key={r} className="seat-row">
                            {Array.from({ length: cols }).map((_, c) => {
                                const row = r + 1;
                                const col = c + 1;
                                const seatId = `${row}-${col}`;
                                const isBooked = bookedSeats.includes(seatId);
                                const isSelected = selectedSeats.includes(seatId);

                                return (
                                    <div
                                        key={seatId}
                                        className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
                                        onClick={() => toggleSeat(row, col)}
                                    >
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                <div className="legend">
                    <div className="legend-item"><div className="seat"></div> Available</div>
                    <div className="legend-item"><div className="seat selected"></div> Selected</div>
                    <div className="legend-item"><div className="seat booked"></div> Sold</div>
                </div>

                <div className="booking-summary">
                    <div className="summary-info">
                        <span>Selected Seats: <b>{selectedSeats.length}</b></span>
                        <span>Total: <b>Rs. {selectedSeats.length * pricePerSeat}</b></span>
                    </div>
                    <button
                        className="btn btn-primary"
                        disabled={selectedSeats.length === 0}
                        onClick={handleBooking}
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>

            <style>{`
                .booking-page {
                    min-height: 100vh;
                    background-color: var(--background);
                    padding: 40px 0;
                }
                .booking-header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 40px;
                    border-bottom: 1px solid var(--surface-hover);
                    padding-bottom: 20px;
                }
                .back-btn-simple {
                    color: white;
                    padding: 8px;
                    border-radius: 50%;
                    background: var(--surface);
                }
                .screen-container {
                    perspective: 1000px;
                    text-align: center;
                    margin-bottom: 40px;
                }
                .screen {
                    height: 60px;
                    width: 70%;
                    margin: 0 auto;
                    background: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent);
                    transform: rotateX(-30deg) scale(0.9);
                    box-shadow: 0 10px 30px rgba(255,255,255,0.1);
                    border-radius: 12px;
                    margin-bottom: 20px;
                }
                .screen-container p {
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    letter-spacing: 2px;
                }
                .seats-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    align-items: center;
                    margin-bottom: 40px;
                }
                .seat-row {
                    display: flex;
                    gap: 10px;
                }
                .seat {
                    width: 32px;
                    height: 32px;
                    background-color: var(--surface);
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .seat:hover:not(.booked) {
                    background-color: var(--text-secondary);
                }
                .seat.selected {
                    background-color: var(--success);
                    box-shadow: 0 0 10px var(--success);
                    border: none;
                }
                .seat.booked {
                    background-color: var(--surface-hover);
                    cursor: not-allowed;
                    opacity: 0.5;
                }
                .legend {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-bottom: 40px;
                    border-top: 1px solid var(--surface-hover);
                    padding-top: 20px;
                }
                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                }
                .legend-item .seat {
                    width: 20px;
                    height: 20px;
                    cursor: default;
                }
                .booking-summary {
                    background: var(--surface);
                    padding: 20px;
                    border-radius: 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
                    position: sticky;
                    bottom: 20px;
                }
                .summary-info {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    font-size: 1.1rem;
                }
            `}</style>
        </div>
    );
};

export default Booking;
