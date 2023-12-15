const initialState = {
  coffeeList: [],
  selectedCoffee: null
};

export default function coffeeReducer(state = initialState, action) {
  switch (action.type) {
    //  Use this later to define more cases for different actions here (note to self)
    default:
      return state;
  }
}
