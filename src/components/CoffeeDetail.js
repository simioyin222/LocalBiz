import React from 'react';
import PropTypes from 'prop-types';

function CoffeeDetail(props) {
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{props.coffee.name} - {props.coffee.roast}</h3>
      <p>Origin: {props.coffee.origin}</p>
      <p>Price: {props.coffee.price} per lb</p>
      <p>Pounds Remaining: {props.coffee.pounds}</p>
      <button onClick={() => props.onClickingDecrement(props.coffee.id)}>Sell 1 lb</button>
      <hr />
    </React.Fragment>
  );
}

