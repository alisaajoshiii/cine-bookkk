import React, { useState } from 'react';

const SeatMap = () => {
    // 1. Seat layout generate garne (Ex: 5 rows, 8 columns)
    const rows = ['A', 'B', 'C', 'D', 'E'];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8];

    // State: Kun kun seat select bhayo thaha pauna
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Pahile nai book bhayeka seats (Firebase bata aauna sakcha)
    const bookedSeats = ['A3', 'C5', 'E2'];

    const toggleSeat = (seatId) => {
        if (bookedSeats.includes(seatId)) return; // Book bhayeko seat thichna namilne

        if (selectedSeats.includes(seatId)) {
            // Selected cha bhane hataune (Deselect)
            setSelectedSeats(selectedSeats.filter(id => id !== seatId));
        } else {
            // Chaina bhane thapne (Select)
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    return (
        <div className="seat-container" style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Select Your Seats</h2>

            {/* Screen area */}
            <div className="screen" style={screenStyle}>SCREEN</div>

            {/* Seat Grid */}
            <div className="grid" style={gridStyle}>
                {rows.map(row => (
                    <div key={row} style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                        {cols.map(col => {
                            const seatId = `${row}${col}`;
                            const isBooked = bookedSeats.includes(seatId);
                            const isSelected = selectedSeats.includes(seatId);

                            return (
                                <div
                                    key={seatId}
                                    onClick={() => toggleSeat(seatId)}
                                    style={{
                                        ...seatStyle,
                                        backgroundColor: isBooked ? '#444' : isSelected ? '#4caf50' : '#ddd',
                                        cursor: isBooked ? 'not-allowed' : 'pointer',
                                        color: isBooked || isSelected ? 'white' : 'black'
                                    }}
                                >
                                    {seatId}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Summary Area */}
            <div style={{ marginTop: '20px' }}>
                <p>Selected Seats: <b>{selectedSeats.join(', ') || 'None'}</b></p>
                <p>Total Price: <b>Rs. {selectedSeats.length * 500}</b></p>
                <button disabled={selectedSeats.length === 0} style={confirmBtnStyle}>
                    Confirm Booking
                </button>
            </div>
        </div>
    );
};

// Styles
const screenStyle = {
    width: '60%',
    height: '10px',
    background: '#333',
    margin: '20px auto 40px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
    borderRadius: '50% 50% 0 0',
    color: '#888',
    fontSize: '12px'
};

const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const seatStyle = {
    width: '35px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    transition: '0.2s'
};

const confirmBtnStyle = {
    padding: '10px 20px',
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default SeatMap;