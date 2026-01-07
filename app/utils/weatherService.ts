import { WeatherData } from './types';

export const getWeatherData = async (
  _latitude: number,
  _longitude: number
): Promise<WeatherData> => {
  return {
    temperature: 25,
    humidity: 60,
    precipitation: 0,
    forecast: 'Sunny',
  };
};
