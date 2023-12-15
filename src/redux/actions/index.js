export const addCoffee = (coffee) => ({
  type: 'ADD_COFFEE',
  payload: coffee
});

export const selectCoffee = (coffeeId) => ({
  type: 'SELECT_COFFEE',
  payload: coffeeId
});