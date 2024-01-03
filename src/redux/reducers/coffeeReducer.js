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
      
    case 'SELECT_COFFEE':
      const selected = state.coffeeList.find(coffee => coffee.id === action.payload);
      return { ...state, selectedCoffee: selected };

      case 'DECREMENT_POUNDS':
  return {
    ...state,
    coffeeList: state.coffeeList.map(coffee => {
      if (coffee.id === action.payload) {
        return { ...coffee, pounds: Math.max(0, coffee.pounds - 1) }; // Prevent negative pounds
      }
      return coffee;
    })
  };

    case 'UPDATE_COFFEE':
      const updatedCoffeeList = state.coffeeList.map(coffee => {
        if (coffee.id === action.payload.id) {
          return action.payload;
        }
        return coffee;
      });
      return { ...state, coffeeList: updatedCoffeeList };

    default:
      return state;
  }
}
