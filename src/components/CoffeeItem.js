import React from 'react';

function CoffeeItem(props) {
  return (
    <div onClick={() => props.whenCoffeeClicked(props.coffee.id)}>
      <h3>{props.coffee.name} - {props.coffee.roast}</h3>
      <p>{props.coffee.origin}</p>
      <p>{props.coffee.price} per lb</p>
    </div>
  );
}

export default CoffeeItem;