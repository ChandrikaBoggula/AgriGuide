import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import type { RootState } from '../store';

function WeatherWidget() {
  const profile = useSelector((state: RootState) => state.farmer.profile);
  const [weather, setWeather] = useState<any>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (profile?.district) {
      // Simulated weather data - In a real app, this would fetch from a weather API
      setWeather({
        temperature: 28,
        condition: 'Sunny',
        humidity: 65,
        rainfall: 0,
        forecast: [
          { day: 'Tomorrow', temp: 27, condition: 'Partly Cloudy' },
          { day: 'Day After', temp: 29, condition: 'Sunny' }
        ]
      });
    }
  }, [profile?.district]);

  if (!weather) return null;

  const WeatherIcon = () => {
    switch (weather.condition) {
      case 'Sunny':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'Partly Cloudy':
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'Rainy':
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      default:
        return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <div 
      className={`fixed bottom-4 right-4 bg-white rounded-lg shadow-lg transition-all duration-300 ${
        isExpanded ? 'w-80' : 'w-auto'
      }`}
    >
      <div 
        className="p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <WeatherIcon />
            <span className="font-medium">{weather.temperature}°C</span>
          </div>
          <span className="text-sm text-gray-600">{profile?.district}</span>
        </div>
        
        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Humidity</span>
                <p className="font-medium">{weather.humidity}%</p>
              </div>
              <div>
                <span className="text-gray-600">Rainfall</span>
                <p className="font-medium">{weather.rainfall} mm</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium mb-2">Forecast</h4>
              <div className="space-y-2">
                {weather.forecast.map((day: any, index: number) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{day.day}</span>
                    <span className="font-medium">{day.temp}°C</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherWidget;