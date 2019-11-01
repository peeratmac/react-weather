export const getLatLong = (state = '', action) => {
  switch (action.type) {
    case 'GET_LAT_LONG':
      return action.latLong;
    default:
      return state;
  }
};
