import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCoffee, updateCoffee, selectCoffee, decrementCoffeePounds } from './redux/actions';
import Header from './components/Header';
import CoffeeList from './components/CoffeeList';
import NewCoffeeForm from './components/NewCoffeeForm';
import CoffeeDetail from './components/CoffeeDetail';

function App(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCoffee, setEditingCoffee] = useState(null);

  const handleAddingNewCoffeeToList = (newCoffee) => {
    props.addCoffee(newCoffee);
  };

  const handleUpdatingCoffee = (updatedCoffee) => {
    props.updateCoffee(updatedCoffee);
    setIsEditing(false);
    setEditingCoffee(null);
  };

  const handleEditClick = (coffeeId) => {
    const coffeeToEdit = props.mainCoffeeList.find(coffee => coffee.id === coffeeId);
    setEditingCoffee(coffeeToEdit);
    setIsEditing(true);
  };

  const handleChangingSelectedCoffee = (id) => {
    props.selectCoffee(id);
  };

  const handleDecrementingCoffee = (coffeeId) => {
    props.decrementCoffeePounds(coffeeId);
  };

  let currentlyVisibleState = null;
  if (props.selectedCoffee != null) {
    currentlyVisibleState = (
      <CoffeeDetail
        coffee={props.selectedCoffee}
        onClickingDecrement={handleDecrementingCoffee}
        onViewList={() => props.selectCoffee(null)} />
    );
  } else if (isEditing) {
    currentlyVisibleState = (
      <NewCoffeeForm
        isEditing={true}
        coffee={editingCoffee}
        onUpdateCoffee={handleUpdatingCoffee}
      />
    );
  } else {
    currentlyVisibleState = (
      <React.Fragment>
        <CoffeeList 
          coffeeList={props.mainCoffeeList}
          onCoffeeSelection={handleChangingSelectedCoffee}
          onEditClick={handleEditClick}
        />
        <NewCoffeeForm
          onNewCoffeeCreation={handleAddingNewCoffeeToList}
        />
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

const mapStateToProps = state => ({
  mainCoffeeList: state.coffee.coffeeList,
  selectedCoffee: state.coffee.selectedCoffee
});

const mapDispatchToProps = {
  addCoffee,
  updateCoffee,
  selectCoffee,
  decrementCoffeePounds
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
