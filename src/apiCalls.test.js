import { fetchPopularCities } from './apiCalls';

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
});
