import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import MovieDetail from './Pages/MovieDetail';
import Booking from './Pages/Booking';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Movies from './Pages/Movies';
import Cinemas from './Pages/Cinemas';
import Offers from './Pages/Offers';
import { AuthProvider } from './context/Authcontext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="app-layout">
          <Navbar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/cinemas" element={<Cinemas />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/book/:id" element={<Booking />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <style>{`
            .app-layout {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            }
            .app-content {
            flex: 1;
            }
        `}</style>
      </Router>
    </AuthProvider>
  );
}

export default App;