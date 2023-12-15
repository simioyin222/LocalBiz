import React, { useState } from 'react';
import Header from './components/Header';
import CoffeeList from './components/CoffeeList';
import NewCoffeeForm from './components/NewCoffeeForm';
import CoffeeDetail from './components/CoffeeDetail';

function App() {
  const initialCoffeeList = [
    { id: 1, name: 'Arabica', origin: 'Ethiopia', price: '15', roast: 'Medium', pounds: 130 },
    { id: 2, name: 'Robusta', origin: 'Vietnam', price: '12', roast: 'Dark', pounds: 150 },
  ];

  const [mainCoffeeList, setMainCoffeeList] = useState(initialCoffeeList);
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const handleAddingNewCoffeeToList = (newCoffee) => {
    newCoffee.id = mainCoffeeList.length + 1;
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
    setSelectedCoffee(updatedMainCoffeeList.find(coffee => coffee.id === id));
  };

  const handleViewList = () => {
    setSelectedCoffee(null);
  };

  let currentlyVisibleState = null;

  if (selectedCoffee != null) {
    currentlyVisibleState = (
      <CoffeeDetail
        coffee={selectedCoffee}
        onClickingDecrement={handleDecrementingCoffee}
        onViewList={handleViewList} />
    );
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

  return (
    <div>
      <Header />
      {currentlyVisibleState}
    </div>
  );
}

export default App;