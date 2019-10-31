export const fetchPopularCities = async () => {
  const response = await fetch(
    'https://www.metaweather.com/api/location/search/?query=new'
  );

  if (!response.ok) {
    throw Error('Failed to get weather data');
  } else {
    let weatherData = await response.json();
    console.log(weatherData);
    const weatherStationID = weatherData.map(city => city.woeid);
    console.log(weatherStationID);

    weatherData.forEach(weather => {
      return fetch(`https://www.metaweather.com/api/location/${weather.woeid}`)
        .then(response => response.json())
        .then(data => console.log(data));
    });

    // fetch(`https://www.metaweather.com/api/location/${weatherStationID[0]}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data));
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
