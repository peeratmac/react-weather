import {
  fetchPopularCities,
  fetchUsingStationID,
  fetchLatLong
} from './apiCalls';

describe('fetchPopularCities', () => {
  const mockWeatherReturn = [
    {
      title: 'Toronto',
      location_type: 'City',
      woeid: 4118,
      latt_long: '43.648560,-79.385368'
    },
    {
      title: 'Santorini',
      location_type: 'City',
      woeid: 56558361,
      latt_long: '36.406651,25.456530'
    },
    {
      title: 'Torino',
      location_type: 'City',
      woeid: 725003,
      latt_long: '45.070290,7.667680'
    }
  ];

  const mockResponse = mockWeatherReturn;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should be called with the correct URL', () => {
    fetchPopularCities('tor');
    expect(window.fetch).toHaveBeenCalledWith(
      'https://www.metaweather.com/api/location/search/?query=tor'
    );
  });

  it('should return an array of weather staions with title, location_type, woeid (weather station), and latitude and longitude information', () => {
    fetchPopularCities('tor').then(cities =>
      expect(cities).toEqual(mockWeatherReturn)
    );
  });
});

describe('fetchUsingStationID', () => {
  const mockResponse = {
    consolidated_weather: [
      {
        id: 6371075254386688,
        weather_state_name: 'Heavy Rain',
        weather_state_abbr: 'hr',
        wind_direction_compass: 'SW',
        created: '2019-11-02T21:33:22.701627Z',
        applicable_date: '2019-11-02',
        min_temp: 3.94,
        max_temp: 7.0600000000000005,
        the_temp: 6.465,
        wind_speed: 9.369950395010472,
        wind_direction: 232.71635771078286,
        air_pressure: 1015.0,
        humidity: 74,
        visibility: 7.178390698321801,
        predictability: 77
      },
      {
        id: 5023921583685632,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'W',
        created: '2019-11-02T21:33:25.688058Z',
        applicable_date: '2019-11-03',
        min_temp: 3.0549999999999997,
        max_temp: 6.82,
        the_temp: 6.3149999999999995,
        wind_speed: 12.23128482738938,
        wind_direction: 265.0,
        air_pressure: 1018.5,
        humidity: 60,
        visibility: 11.220410303825659,
        predictability: 73
      },
      {
        id: 6609949624893440,
        weather_state_name: 'Light Rain',
        weather_state_abbr: 'lr',
        wind_direction_compass: 'SSW',
        created: '2019-11-02T21:33:28.816406Z',
        applicable_date: '2019-11-04',
        min_temp: 5.3950000000000005,
        max_temp: 10.44,
        the_temp: 9.469999999999999,
        wind_speed: 13.262663463095523,
        wind_direction: 207.49751841745433,
        air_pressure: 1015.0,
        humidity: 72,
        visibility: 11.16635101010101,
        predictability: 75
      },
      {
        id: 6586345726148608,
        weather_state_name: 'Heavy Rain',
        weather_state_abbr: 'hr',
        wind_direction_compass: 'WSW',
        created: '2019-11-02T21:33:31.765649Z',
        applicable_date: '2019-11-05',
        min_temp: 1.9649999999999999,
        max_temp: 8.434999999999999,
        the_temp: 7.975,
        wind_speed: 13.495419794795728,
        wind_direction: 254.83602143207332,
        air_pressure: 1019.0,
        humidity: 62,
        visibility: 14.2918481070548,
        predictability: 77
      },
      {
        id: 5787048554266624,
        weather_state_name: 'Light Rain',
        weather_state_abbr: 'lr',
        wind_direction_compass: 'SW',
        created: '2019-11-02T21:33:34.677331Z',
        applicable_date: '2019-11-06',
        min_temp: 1.105,
        max_temp: 7.359999999999999,
        the_temp: 5.4,
        wind_speed: 9.371485016667991,
        wind_direction: 226.30247373702676,
        air_pressure: 1025.5,
        humidity: 57,
        visibility: 12.233245347172511,
        predictability: 75
      },
      {
        id: 5624617420980224,
        weather_state_name: 'Heavy Rain',
        weather_state_abbr: 'hr',
        wind_direction_compass: 'NW',
        created: '2019-11-02T21:33:37.698305Z',
        applicable_date: '2019-11-07',
        min_temp: -0.22999999999999998,
        max_temp: 3.965,
        the_temp: 1.6,
        wind_speed: 9.741355682812376,
        wind_direction: 317.0,
        air_pressure: 1029.0,
        humidity: 51,
        visibility: 9.999726596675416,
        predictability: 77
      }
    ],
    time: '2019-11-02T17:36:48.928647-04:00',
    sun_rise: '2019-11-02T07:54:19.728674-04:00',
    sun_set: '2019-11-02T18:07:18.286713-04:00',
    timezone_name: 'LMT',
    parent: {
      title: 'Canada',
      location_type: 'Country',
      woeid: 23424775,
      latt_long: '56.954681,-98.308968'
    },
    sources: [
      {
        title: 'BBC',
        slug: 'bbc',
        url: 'http://www.bbc.co.uk/weather/',
        crawl_rate: 360
      },
      {
        title: 'Forecast.io',
        slug: 'forecast-io',
        url: 'http://forecast.io/',
        crawl_rate: 480
      },
      {
        title: 'HAMweather',
        slug: 'hamweather',
        url: 'http://www.hamweather.com/',
        crawl_rate: 360
      },
      {
        title: 'Met Office',
        slug: 'met-office',
        url: 'http://www.metoffice.gov.uk/',
        crawl_rate: 180
      },
      {
        title: 'OpenWeatherMap',
        slug: 'openweathermap',
        url: 'http://openweathermap.org/',
        crawl_rate: 360
      },
      {
        title: 'Weather Underground',
        slug: 'wunderground',
        url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
        crawl_rate: 720
      },
      {
        title: 'World Weather Online',
        slug: 'world-weather-online',
        url: 'http://www.worldweatheronline.com/',
        crawl_rate: 360
      }
    ],
    title: 'Toronto',
    location_type: 'City',
    woeid: 4118,
    latt_long: '43.648560,-79.385368',
    timezone: 'America/Toronto'
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should be called with the correct URL', () => {
    fetchUsingStationID(4118);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://www.metaweather.com/api/location/4118'
    );
  });

  it('should return an object with weather information for that particular weather station', () => {
    fetchUsingStationID(4118).then(city => expect(city).toEqual(mockResponse));
  });
});

describe('fetchLatLong', () => {
  const mockWeatherReturn = {
    latt_long: '43.648560,-79.385368',
    location_type: 'City',
    title: 'Toronto',
    woeid: 4118
  };

  const mockResponse = mockWeatherReturn;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should be called with the correct URL', () => {
    fetchLatLong('43.648560,-79.385368');
    expect(window.fetch).toHaveBeenCalledWith(
      'https://www.metaweather.com/api/location/search/?lattlong=43.648560,-79.385368'
    );
  });

  it('should return an object with latt_long, location_type, title, and weather station ID information', () => {
    fetchLatLong('43.648560,-79.385368').then(city =>
      expect(city).toEqual(mockResponse)
    );
  });
});
