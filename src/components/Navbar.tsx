import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Calendar, LineChart } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-green-200' : 'text-white hover:text-green-200';
  };

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8" />
            <span className="text-xl font-bold">AgriGuide</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/profile" className={`flex items-center space-x-1 transition-colors ${isActive('/profile')}`}>
              <span>Profile</span>
            </Link>
            <Link to="/schemes" className={`flex items-center space-x-1 transition-colors ${isActive('/schemes')}`}>
              <span>Schemes</span>
            </Link>
            <Link to="/crop-calendar" className={`flex items-center space-x-1 transition-colors ${isActive('/crop-calendar')}`}>
              <Calendar className="h-4 w-4" />
              <span>Crop Calendar</span>
            </Link>
            <Link to="/market-prices" className={`flex items-center space-x-1 transition-colors ${isActive('/market-prices')}`}>
              <LineChart className="h-4 w-4" />
              <span>Market Prices</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar