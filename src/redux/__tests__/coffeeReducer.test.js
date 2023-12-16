import coffeeReducer from '../reducers/coffeeReducer';
import * as actions from '../actions';

describe('coffeeReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(coffeeReducer(undefined, { type: null })).toEqual({
      coffeeList: [
        { id: 1, name: 'Arabica', origin: 'Ethiopia', price: '15', roast: 'Medium', pounds: 130 },
        { id: 2, name: 'Robusta', origin: 'Vietnam', price: '12', roast: 'Dark', pounds: 150 },
      ],
      selectedCoffee: null
    });
  });

  test('Should correctly add a new coffee to the coffeeList', () => {
    const newCoffee = { id: 3, name: 'Test Coffee', origin: 'Test Origin', price: '10', roast: 'Light', pounds: 100 };
    const action = actions.addCoffee(newCoffee);
    const newState = coffeeReducer(undefined, action);
    expect(newState.coffeeList).toContainEqual(newCoffee);

    test('Should correctly select a coffee', () => {
      const action = actions.selectCoffee(1);
      const newState = coffeeReducer(undefined, action);
      expect(newState.selectedCoffee).toEqual({
        id: 1, name: 'Arabica', origin: 'Ethiopia', price: '15', roast: 'Medium', pounds: 130
      });
    });

    
  });
});

