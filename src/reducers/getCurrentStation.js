export const getCurrentStation = (state = '', action) => {
  switch (action.type) {
    case 'GET_CURRENT_STATION':
      return action.currentStation;
    default:
      return state;
  }
};
