const initialState = {
  coffeeList: [
    { id: 1, name: 'Arabica', origin: 'Ethiopia', price: '15', roast: 'Medium', pounds: 130 },
    { id: 2, name: 'Robusta', origin: 'Vietnam', price: '12', roast: 'Dark', pounds: 150 },
  ],
  selectedCoffee: null
};

export default function coffeeReducer(state = initialState, action) {
  switch (action.type) {
    //  Use this later to define more cases for different actions here (note to self)
    default:
      return state;
  }
}