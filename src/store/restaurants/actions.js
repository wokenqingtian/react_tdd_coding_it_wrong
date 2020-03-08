import api from '../api';

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export const addRestaurant = (name) => {
  return {
    type: ADD_RESTAURANT,
    name,
  };
};

export const loadRestaurants = () => (dispatch) => {
  return api.get('/restaurants')
    .then(responseObject => {
      const responseBody = responseObject.data;
      const restaurants = responseBody.data;
      dispatch({
        type: STORE_RESTAURANTS,
        restaurants,
      })
    });
};
