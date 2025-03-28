import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProfile } from '../store/farmerSlice';
import type { RootState } from '../store';
import type { Farmer } from '../types';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentProfile = useSelector((state: RootState) => state.farmer.profile);

  const [formData, setFormData] = useState<Partial<Farmer>>({
    name: '',
    age: 0,
    state: '',
    district: '',
    landSize: 0,
    crops: [],
    annualIncome: 0,
  });

  useEffect(() => {
    if (currentProfile) {
      setFormData(currentProfile);
    }
  }, [currentProfile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setProfile({
      id: currentProfile?.id || crypto.randomUUID(),
      ...formData as Farmer
    }));
    navigate('/schemes');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' || name === 'landSize' || name === 'annualIncome' 
        ? Number(value) 
        : value
    }));
  };

  const handleCropChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const crop = e.target.value;
    setFormData(prev => ({
      ...prev,
      crops: prev.crops?.includes(crop)
        ? prev.crops.filter(c => c !== crop)
        : [...(prev.crops || []), crop]
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Farmer Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            min="18"
            max="120"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="landSize" className="block text-sm font-medium text-gray-700">Land Size (in acres)</label>
          <input
            type="number"
            id="landSize"
            name="landSize"
            value={formData.landSize}
            onChange={handleInputChange}
            required
            min="0"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700">Annual Income (in ₹)</label>
          <input
            type="number"
            id="annualIncome"
            name="annualIncome"
            value={formData.annualIncome}
            onChange={handleInputChange}
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">Crops</span>
          <div className="space-y-2">
            {['Rice', 'Wheat', 'Cotton', 'Sugarcane', 'Pulses'].map(crop => (
              <label key={crop} className="flex items-center">
                <input
                  type="checkbox"
                  value={crop}
                  checked={formData.crops?.includes(crop)}
                  onChange={handleCropChange}
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2">{crop}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;