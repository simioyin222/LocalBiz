import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function NewCoffeeForm(props) {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState('');
  const [roast, setRoast] = useState('');
  const [pounds, setPounds] = useState('');

  useEffect(() => {
    if (props.coffee) {
      setName(props.coffee.name);
      setOrigin(props.coffee.origin);
      setPrice(props.coffee.price);
      setRoast(props.coffee.roast);
      setPounds(props.coffee.pounds);
    }
  }, [props.coffee]);


  function handleSubmit(event) {
    event.preventDefault();
    const coffeeData = { name, origin, price, roast, pounds };

    if (props.isEditing) {
      props.onUpdateCoffee({ ...props.coffee, ...coffeeData });
    } else {
      props.onNewCoffeeCreation(coffeeData);
    }

    setName('');
    setOrigin('');
    setPrice('');
    setRoast('');
    setPounds('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{props.isEditing ? 'Edit Coffee' : 'Add New Coffee'}</h2>
      {}
      <button type='submit'>{props.isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func.isRequired
};

export default NewCoffeeForm;