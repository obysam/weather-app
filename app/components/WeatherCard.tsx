// components/WeatherCard.tsx
"use client";

import { getWeatherStyle } from '../utils/WeatherStyle';
interface weather {
    description: string;
    icon: string;
    id: number;
    main: string;
  }
  interface WeatherCardProps {
    name: string;
    weather: weather;
    main: {
      temp: number;
      humidity: number;
    };
  }
  const WeatherCard: React.FC<WeatherCardProps> = ({ weather, name, main }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="flex items-center">
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
            alt={weather.description}
            className="w-12 h-12"
          />
          <p className="ml-4 text-xl">{weather.main}</p>
        </div>
        <p>{weather.description}</p>
        <p>Temperature: {main.temp}°C</p>
        <p>Humidity: {main.humidity}%</p>
      </div>
    );
  };

export default WeatherCard;
