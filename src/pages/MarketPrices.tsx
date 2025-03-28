import React, { useState } from 'react';
import { LineChart, TrendingUp } from 'lucide-react';
import Select from 'react-select';

const marketPriceData = {
  'Rice': {
    current: 2000,
    history: [1950, 1980, 2000, 2050, 1990],
    trend: 'up',
    unit: 'per quintal'
  },
  'Wheat': {
    current: 2200,
    history: [2100, 2150, 2200, 2180, 2220],
    trend: 'stable',
    unit: 'per quintal'
  },
  'Cotton': {
    current: 6500,
    history: [6200, 6300, 6400, 6500, 6450],
    trend: 'up',
    unit: 'per quintal'
  },
  'Sugarcane': {
    current: 350,
    history: [320, 330, 340, 350, 355],
    trend: 'up',
    unit: 'per quintal'
  }
};

function MarketPrices() {
  const [selectedCrop, setSelectedCrop] = useState<string>('Rice');

  const cropOptions = Object.keys(marketPriceData).map(crop => ({
    value: crop,
    label: crop
  }));

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-2 mb-8">
        <LineChart className="h-8 w-8 text-green-600" />
        <h1 className="text-3xl font-bold text-gray-900">Market Prices</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Crop
          </label>
          <Select
            options={cropOptions}
            value={cropOptions.find(option => option.value === selectedCrop)}
            onChange={(option) => setSelectedCrop(option?.value || 'Rice')}
            className="w-full max-w-xs"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Price</h2>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold">₹{marketPriceData[selectedCrop].current}</span>
              <span className="text-gray-600">{marketPriceData[selectedCrop].unit}</span>
              <TrendingUp className={`h-5 w-5 ${getTrendColor(marketPriceData[selectedCrop].trend)}`} />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Price History</h2>
            <div className="h-40 flex items-end space-x-2">
              {marketPriceData[selectedCrop].history.map((price, index) => (
                <div
                  key={index}
                  className="bg-green-600 rounded-t w-8"
                  style={{
                    height: `${(price / marketPriceData[selectedCrop].current) * 100}%`
                  }}
                >
                  <div className="text-xs text-center mt-2 transform -rotate-45 origin-left">
                    ₹{price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Insights</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-green-600"></span>
                <span>Current price is {marketPriceData[selectedCrop].trend === 'up' ? 'trending upward' : 'stable'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <span>Best time to sell: Next 2-3 weeks</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                <span>Market demand is high</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPrices;