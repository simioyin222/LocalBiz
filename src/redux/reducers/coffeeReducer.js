const initialState = {
  coffeeList: [
    { id: 1, name: 'Arabica', origin: 'Ethiopia', price: '15', roast: 'Medium', pounds: 130 },
    { id: 2, name: 'Robusta', origin: 'Vietnam', price: '12', roast: 'Dark', pounds: 150 },
  ],
  selectedCoffee: null
};

export default function coffeeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COFFEE':
      return { ...state, coffeeList: [...state.coffeeList, action.payload] };
    default:
      return state;
  }
}
