import React from 'react';
import CoffeeItem from './CoffeeItem';
import PropTypes from 'prop-types';

function CoffeeList(props) {
  return (
    <div>
      {props.coffeeList.map((coffee) => 
        <CoffeeItem 
          key={coffee.id}
          coffee={coffee}
          whenCoffeeClicked={props.onCoffeeSelection}
          onEditClick={props.onEditClick}
        />
      )}
    </div>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array.isRequired,
  onCoffeeSelection: PropTypes.func.isRequired,
  onEditClick: PropTypes.func
};

export default CoffeeList;