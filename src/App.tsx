import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store';
import { loadProfile } from './store/farmerSlice';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Schemes from './pages/Schemes';
import WeatherWidget from './components/WeatherWidget';
import CropCalendar from './pages/CropCalendar';
import MarketPrices from './pages/MarketPrices';

function App() {
  useEffect(() => {
    store.dispatch(loadProfile());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/schemes" element={<Schemes />} />
              <Route path="/crop-calendar" element={<CropCalendar />} />
              <Route path="/market-prices" element={<MarketPrices />} />
            </Routes>
          </main>
          <WeatherWidget />
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </Provider>
  );
}

export default App;