import api from './api'

export const getWeather = async ({ latitude, longitude }) => {

  const response = await api.get("/weather", {
    params: {
      latitude,
      longitude      
    }
  });

  return response.data.data;
}