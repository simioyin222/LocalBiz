import React from 'react';
import CoffeeItem from './CoffeeItem';

function CoffeeList(props) {
  return (
    <div>
      {props.coffeeList.map((coffee) => 