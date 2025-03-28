# Kisan Yojana Finder

Kisan Yojana Finder (also known as AgriGuide) is a React-based web application designed to help Indian farmers discover and access government schemes they're eligible for. The application provides a user-friendly interface with features like profile management, scheme filtering, market price information, and weather updates.

## Features

### 1. Farmer Profile Management
- Create and manage farmer profiles
- Store profile data with Redux
- Persistent storage using localStorage

### 2. Government Scheme Finder
- Browse available government schemes for farmers
- Filter schemes based on eligibility criteria
- Detailed information about benefits and required documents
- Application process guidance

### 3. Market Price Information
- Real-time market prices for various crops
- Price history and trends
- Market insights and analysis

### 4. Weather Widget
- Current weather based on farmer's district
- Weather forecast information
- Expandable interface for detailed weather data

### 5. Crop Calendar
- Seasonal crop planning assistance
- Crop rotation guidance
- Agricultural best practices

## Tech Stack

- **Frontend Framework:** React with TypeScript
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/           # Main application pages
├── store/           # Redux store configuration
├── data/           # Static data and constants
├── types/          # TypeScript type definitions
└── App.tsx         # Root component
```

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Main Components

### Pages
- **Home:** Landing page with application introduction
- **Profile:** Farmer profile creation and editing
- **Schemes:** Government scheme listing and filtering
- **Market Prices:** Crop price information and trends
- **Crop Calendar:** Seasonal farming guidance

### Core Components
- **Navbar:** Main navigation component
- **WeatherWidget:** Location-based weather information

## State Management

The application uses Redux Toolkit for state management with the following main slices:
- **farmerSlice:** Manages farmer profile data and persistence

## Type Definitions

Key TypeScript interfaces include:
- **Farmer:** Defines farmer profile structure
- **Scheme:** Defines government scheme data structure

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.