import coffeeReducer from '../reducers/coffeeReducer';
import * as actions from '../actions';

describe('coffeeReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(coffeeReducer(undefined, { type: null })).toEqual({
      coffeeList: [],
      selectedCoffee: null
    });
  });

  // place where i would add more test for myself
});

