import React from 'react';
import { offers } from '../data';
import { Gift, Copy } from 'lucide-react';

const Offers = () => {
    return (
        <div className="container animate-fade-in" style={{ padding: '50px 24px' }}>
            <h2 className="section-title">Special Offers</h2>

            <div className="offers-grid">
                {offers.map(offer => (
                    <div key={offer.id} className="offer-card" style={{ borderLeft: `5px solid ${offer.color}` }}>
                        <div className="offer-icon" style={{ backgroundColor: offer.color }}>
                            <Gift color="white" size={24} />
                        </div>
                        <div className="offer-content">
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                            <div className="offer-code">
                                <span>CODE: SAVE20</span>
                                <Copy size={16} style={{ cursor: 'pointer' }} />
                            </div>
                        </div>
                        <div className="discount-badge" style={{ backgroundColor: offer.color }}>
                            {offer.discount}
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .offers-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 30px;
                }
                .offer-card {
                    background: white;
                    border-radius: 12px;
                    padding: 24px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    position: relative;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    overflow: hidden;
                }
                .offer-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .offer-content h3 {
                    margin-bottom: 5px;
                }
                .offer-content p {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    margin-bottom: 15px;
                }
                .offer-code {
                    background: #f8f9fa;
                    padding: 8px 12px;
                    border-radius: 6px;
                    border: 1px dashed #ccc;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-family: monospace;
                    font-weight: bold;
                }
                .discount-badge {
                    position: absolute;
                    top: 0;
                    right: 0;
                    color: white;
                    padding: 4px 12px;
                    border-bottom-left-radius: 12px;
                    font-size: 0.8rem;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default Offers;
