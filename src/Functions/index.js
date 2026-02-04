// 1. Price Format garne (Ex: 500 lai Rs. 500 banaune)
export const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-NP', {
        style: 'currency',
        currency: 'NPR',
        minimumFractionDigits: 0
    }).format(amount);
};

// 2. Date Format garne (Booking ko bela kaam lagcha)
export const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString('en-GB'); // DD/MM/YYYY format
};

// 3. Seats Selection Summary (Array lai String banaune)
export const getSeatSummary = (seatsArray) => {
    return seatsArray.length > 0 ? seatsArray.join(", ") : "No seats selected";
};