import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane as Plant, Users, FileCheck } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Kisan Yojana Finder
        </h1>
        <p className="text-xl text-gray-600">
          Discover government schemes tailored for Indian farmers
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Plant className="h-12 w-12 mx-auto mb-4 text-green-600" />
          <h2 className="text-xl font-semibold mb-2">Create Profile</h2>
          <p className="text-gray-600">Set up your farmer profile with basic details</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FileCheck className="h-12 w-12 mx-auto mb-4 text-green-600" />
          <h2 className="text-xl font-semibold mb-2">Find Schemes</h2>
          <p className="text-gray-600">Get matched with relevant government schemes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="h-12 w-12 mx-auto mb-4 text-green-600" />
          <h2 className="text-xl font-semibold mb-2">Easy Access</h2>
          <p className="text-gray-600">Simple and user-friendly interface</p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate('/profile')}
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;