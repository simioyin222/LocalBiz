import React from 'react';
import CoffeeItem from './CoffeeItem';
import PropTypes from 'prop-types';

function CoffeeList(props) {
  console.log("Coffee keys:", props.coffeeList.map(coffee => coffee.id)); // Debugging here 

  return (
    <div>
      {props.coffeeList.map((coffee) => 
        <CoffeeItem 
          key={coffee.id}
          coffee={coffee}
          whenCoffeeClicked={props.onCoffeeSelection} />
      )}
    </div>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array.isRequired,
  onCoffeeSelection: PropTypes.func.isRequired
};

export default CoffeeList;