const initialState = {
  coffeeList: [
    { id: 1, name: 'Arabica', origin: 'Ethiopia', price: '15', roast: 'Medium', pounds: 130 },
    { id: 2, name: 'Robusta', origin: 'Vietnam', price: '12', roast: 'Dark', pounds: 150 },
  ],
  selectedCoffee: null
};

function coffeeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COFFEE':
      return { ...state, coffeeList: [...state.coffeeList, action.payload] };

    case 'UPDATE_COFFEE':
      return {
        ...state,
        coffeeList: state.coffeeList.map(coffee => {
          if (coffee.id === action.payload.id) {
            return action.payload;
          }
          return coffee;
        })
      };

    case 'SELECT_COFFEE':
      const selectedCoffee = state.coffeeList.find(coffee => coffee.id === action.payload);
      return { ...state, selectedCoffee: selectedCoffee };

    case 'DECREMENT_POUNDS':
      return {
        ...state,
        coffeeList: state.coffeeList.map(coffee => {
          if (coffee.id === action.payload) {
            return { ...coffee, pounds: Math.max(0, coffee.pounds - 1) };
          }
          return coffee;
        })
      };

    default:
      return state;
  }
}

export default coffeeReducer;