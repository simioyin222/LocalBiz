import React from 'react';
import { connect } from 'react-redux';
import { addCoffee, selectCoffee, decrementCoffeePounds } from './redux/actions';
import Header from './components/Header';
import CoffeeList from './components/CoffeeList';
import NewCoffeeForm from './components/NewCoffeeForm';
import CoffeeDetail from './components/CoffeeDetail';

function App(props) {
  const handleAddingNewCoffeeToList = (newCoffee) => {
    props.addCoffee(newCoffee);
  };

  const handleChangingSelectedCoffee = (id) => {
    props.selectCoffee(id);
  };

  const handleDecrementingCoffee = (id) => {
    props.decrementCoffeePounds(id);
  };

  let currentlyVisibleState = null;

  if (props.selectedCoffee != null) {
    currentlyVisibleState = (
      <CoffeeDetail
        coffee={props.selectedCoffee}
        onClickingDecrement={handleDecrementingCoffee}
        onViewList={() => props.selectCoffee(null)} />
    );
  } else {
    currentlyVisibleState = (
      <React.Fragment>
        <CoffeeList 
          coffeeList={props.mainCoffeeList} 
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

const mapStateToProps = state => ({
  mainCoffeeList: state.coffee.coffeeList,
  selectedCoffee: state.coffee.selectedCoffee
});

const mapDispatchToProps = {
  addCoffee,
  selectCoffee,
  decrementCoffeePounds
};

export default connect(mapStateToProps, mapDispatchToProps)(App);