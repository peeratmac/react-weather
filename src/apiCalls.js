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
  const response = await fetch(
    `https://www.metaweather.com/api/location/${stationID}`
  );

  let data = await response.json();
  console.log('fetchUsingStationID', data);
  return data.sun_rise;
};

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

    return weatherData;
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
