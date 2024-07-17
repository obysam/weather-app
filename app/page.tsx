// pages/index.tsx
"use client";

import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const cities = [
  'New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Mumbai', 'Toronto', 
  'Shanghai', 'Cape Town', 'Beijing', 'Los Angeles', 'Chicago', 'Houston', 
  'Miami', 'Dallas', 'Atlanta', 'Boston', 'San Francisco', 'Seattle', 
  'Washington', 'Mexico City', 'Sao Paulo', 'Rio de Janeiro', 'Buenos Aires', 
  'Lima', 'Bogota', 'Santiago', 'Caracas', 'Quito', 'Brasilia', 'Lagos', 
  'Cairo', 'Johannesburg', 'Nairobi', 'Istanbul', 'Moscow', 'Dubai', 
  'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Jakarta', 'Bangkok', 'Manila', 
  'Ho Chi Minh City', 'Kuala Lumpur', 'Seoul', 'Singapore', 'Hong Kong'
];
interface weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
interface WeatherData {
  name: string;
  weather: weather[];
  main: {
    temp: number;
    humidity: number;
  };
}

const getRandomCities = (cities: string[], num: number) => {
  const shuffled = cities.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};
const Home = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [weatherDataDefault, setWeatherDataDefault] = useState<WeatherData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherForCities = async () => {
      const randomCities = getRandomCities(cities, 9);
      const weatherDataArray: WeatherData[] = await Promise.all(
        randomCities.map(async (city) => {
          const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41057375508ed941f702b178a279b3c0`);
          const data = await res.json();
          return data;
        })
      );
      setWeatherDataDefault(weatherDataArray);
    };

    fetchWeatherForCities();
  }, []);

  const fetchWeather = async (city: string) => {
    setErrorMessage(null); // Reset the error message
    if (city) {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41057375508ed941f702b178a279b3c0`);
        if (!res.ok) {
          throw new Error('City not found');
        }
        const data = await res.json();
        setWeatherData([data]);
      } catch (error) {
        setErrorMessage('Sorry, city is not found');
        setWeatherData([]); // Clear weather data
      }
    } else {
      setWeatherData([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherData.length ? 
           weatherData.map((data, index) => (
            <WeatherCard key={index} weather={data.weather[0]} name={data.name} main={data.main} />
          ))
          :
          weatherDataDefault.map((data, index) => ( 
            <WeatherCard key={index} weather={data.weather[0]} name={data.name} main={data.main} />
          ))
      }
      </div>
    </div>
  );
};

export default Home;
