import React, { useState } from 'react';
import Header from './components/Header';
import CoffeeList from './components/CoffeeList';
import NewCoffeeForm from './components/NewCoffeeForm';

function App() {
  const [mainCoffeeList, setMainCoffeeList] = useState([]);
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const handleAddingNewCoffeeToList = (newCoffee) => {
    newCoffee.pounds = 130;
    setMainCoffeeList([...mainCoffeeList, newCoffee]);
  };

  const handleChangingSelectedCoffee = (id) => {
    const selection = mainCoffeeList.find(coffee => coffee.id === id);
    setSelectedCoffee(selection);
  };

  

}

export default App;