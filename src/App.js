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

  const handleDecrementingCoffee = (id) => {
    const updatedMainCoffeeList = mainCoffeeList.map(coffee => {
      if (coffee.id === id && coffee.pounds > 0) {
        return { ...coffee, pounds: coffee.pounds - 1 };
      }
      return coffee;
    });
    setMainCoffeeList(updatedMainCoffeeList);
  };

  let currentlyVisibleState = null;

  if (selectedCoffee != null) {
    currentlyVisibleState = <CoffeeDetail
      coffee={selectedCoffee}
      onClickingDecrement={handleDecrementingCoffee} />;
  
    } else {
      currentlyVisibleState = (
        <React.Fragment>
          <CoffeeList 
            coffeeList={mainCoffeeList} 
            onCoffeeSelection={handleChangingSelectedCoffee} />
          <NewCoffeeForm onNewCoffeeCreation={handleAddingNewCoffeeToList} />
        </React.Fragment>
      );
    }
    
    

  }

  export default App;