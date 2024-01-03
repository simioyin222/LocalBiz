import React from 'react';

function CoffeeItem(props) {
  return (
    <div>
      <h3>{props.coffee.name} - {props.coffee.roast}</h3>
      <p>{props.coffee.origin}</p>
      <p>{props.coffee.price} per lb</p>
      <button onClick={() => props.whenCoffeeClicked(props.coffee.id)}>View Details</button>
      <button onClick={() => props.onEditClick(props.coffee.id)}>Edit</button>
    </div>
  );
}

export default CoffeeItem;