export const fetchPopularCities = async city => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`
  );

  if (!response.ok) {
    throw Error('Failed to get weather data');
  } else {
    let weatherData = await response.json();
    console.log(weatherData);
    const weatherStationID = weatherData.map(city => city.woeid);
    console.log(weatherStationID);

    return weatherData;
  }
};

export const fetchUsingStationID = async stationID => {
  console.log(stationID);
  const response = await fetch(
    `https://www.metaweather.com/api/location/${stationID}`
  );

  let data = await response.json();
  console.log('fetchUsingStationID', data);
  return data;
};

// export const cleanFetchStation = async stationID => {
//   console.log(stationID);
//   const response = await fetch(
//     `https://www.metaweather.com/api/location/${stationID}`
//   );

//   let data = await response.json();
//   console.log('running clean fetch station');
//   return data.consolidated_weather[0].map(weather => {
//     return {
//       day1condition: weather.weather_state_name,
//       day1min: weather.min_temp,
//       day1max: weather.max_temp
//     };
//   });
// };

export const fetchPopularWeather = async city => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`
  );

  if (!response.ok) {
    throw Error('Failed to get weather data');
  } else {
    let weatherData = await response.json();
    console.log(weatherData);
    const weatherStationID = weatherData.map(city => city.woeid);
    console.log(weatherStationID);

    return weatherData.map(async weather => {
      const response = await fetch(
        `https://www.metaweather.com/api/location/${weather.woeid}`
      );
      let weatherDetail = await response.json();

      console.log(weatherDetail);
      return weatherDetail;
    });
  }
};

export const fetchLattitudeLongtitude = async () => {
  const response = await fetch(
    'https://www.metaweather.com/api/location/search/?lattlong=39.740009,-104.992264'
  );

  if (!response.ok) {
    throw Error('Failed to get weather data');
  } else {
    const weatherData = await response.json();
    console.log('LAT-LONG', weatherData);
  }
};

export const fetchLatLong = async latLong => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?lattlong=${latLong}`
  );

  if (!response.ok) {
    throw Error('Failed to get weather data');
  } else {
    const weatherData = await response.json();
    console.log('LAT-LONG', weatherData);
    console.log('LAT-LONG INDEX ZERO', weatherData[0]);
    return weatherData[0];
  }
};

export const fetchCity = async city => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`
  );

  if (!response.ok) {
    throw Error('Failed to get weather data');
  } else {
    const weatherData = await response.json();
    console.log('SPECIFIC CITY INPUT', weatherData);
    return weatherData;
  }
};

// OpenWeather API (2nd Source)

export const fetchWeatherByCity = async city => {
  let apiKey = '322f485cfb44709621306089dd3ecc01';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Denver,CO&appid=${apiKey}`
  );

  const weatherData = await response.json();
  console.log('2nd Source', weatherData);
  return weatherData;
};
