import { db } from './config/Firebase';
import { collection, writeBatch, doc } from 'firebase/firestore';
import { movies, cinemas, offers } from './data';

const seedData = async () => {
    try {
        const batch = writeBatch(db);

        // 1. Seed Movies
        console.log("Seeding Movies...");
        movies.forEach(movie => {
            const movieRef = doc(collection(db, "movies"), movie.id.toString());
            batch.set(movieRef, movie);
        });

        // 2. Seed Cinemas
        console.log("Seeding Cinemas...");
        cinemas.forEach(cinema => {
            const cinemaRef = doc(collection(db, "cinemas"), cinema.id.toString());
            batch.set(cinemaRef, cinema);
        });

        // 3. Seed Offers
        console.log("Seeding Offers...");
        offers.forEach(offer => {
            const offerRef = doc(collection(db, "offers"), offer.id.toString());
            batch.set(offerRef, offer);
        });

        await batch.commit();
        console.log("Database seeded successfully!");

    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

// Enable this call to run the function when this file is executed or imported
// seedData();

export default seedData;
