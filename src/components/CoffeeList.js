import React from 'react';
import CoffeeItem from './CoffeeItem';

function CoffeeList(props) {
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

export default CoffeeList;