import coffeeReducer from '../reducers/coffeeReducer';
import * as actions from '../actions';

describe('coffeeReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    coffeeList: [
      { id: 1, name: 'Arabica', origin: 'Ethiopia', price: '15', roast: 'Medium', pounds: 130 },
      { id: 2, name: 'Robusta', origin: 'Vietnam', price: '12', roast: 'Dark', pounds: 150 },
    ],
    selectedCoffee: null
  });
});

