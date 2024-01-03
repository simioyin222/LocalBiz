export const addCoffee = (coffee) => ({
  type: 'ADD_COFFEE',
  payload: coffee
});

export const selectCoffee = (coffeeId) => ({
  type: 'SELECT_COFFEE',
  payload: coffeeId
});

export const decrementCoffeePounds = (coffeeId) => ({
  type: 'DECREMENT_POUNDS',
  payload: coffeeId
});

export const updateCoffee = (coffee) => ({
  type: 'UPDATE_COFFEE',
  payload: coffee
});