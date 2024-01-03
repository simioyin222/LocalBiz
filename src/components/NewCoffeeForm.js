import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function NewCoffeeForm(props) {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState('');
  const [roast, setRoast] = useState('');
  const [pounds, setPounds] = useState('');

  useEffect(() => {
    if (props.isEditing && props.coffee) {
      setName(props.coffee.name);
      setOrigin(props.coffee.origin);
      setPrice(props.coffee.price);
      setRoast(props.coffee.roast);
      setPounds(props.coffee.pounds);
    }
  }, [props.isEditing, props.coffee]);

  function handleSubmit(event) {
    event.preventDefault();
    const coffeeData = { 
      name, 
      origin, 
      price, 
      roast, 
      pounds: Number(pounds)
    };

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
      <input
        type="text"
        name="name"
        placeholder="Coffee Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <input
        type="text"
        name="origin"
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)} />
      <input
        type="text"
        name="price"
        placeholder="Price per lb"
        value={price}
        onChange={(e) => setPrice(e.target.value)} />
      <input
        type="text"
        name="roast"
        placeholder="Roast"
        value={roast}
        onChange={(e) => setRoast(e.target.value)} />
      <input
        type="number"
        name="pounds"
        placeholder="Pounds Available"
        value={pounds}
        onChange={(e) => setPounds(e.target.value)} />
      <button type='submit'>{props.isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
}

NewCoffeeForm.propTypes = {
  isEditing: PropTypes.bool,
  coffee: PropTypes.object,
  onNewCoffeeCreation: PropTypes.func.isRequired,
  onUpdateCoffee: PropTypes.func
};

export default NewCoffeeForm;