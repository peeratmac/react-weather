export const fetchPopularCities = async () => {
  const response = await fetch(
    'https://www.metaweather.com/api/location/search/?query=san'
  );

  if (!response.ok) {
    throw Error('Failed to get weather data');
  } else {
    const weatherData = await response.json();
    console.log(weatherData);
  }
};

export const fetchLattitudeLongtitude = async () => {
  const response = await fetch(
    'https://www.metaweather.com/api/location/search/?lattlong=38,-100'
  );

  if (!response.ok) {
    throw Error('Failed to get weather data');
  } else {
    const weatherData = await response.json();
    console.log(weatherData);
  }
};
