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


  return (
    <form onSubmit={handleNewCoffeeFormSubmission}>
      <input
        type='text'
        name='name'
        placeholder='Coffee Name'
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <input
        type='text'
        name='origin'
        placeholder='Origin'
        value={origin}
        onChange={(e) => setOrigin(e.target.value)} />
      <input
        type='text'
        name='price'
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)} />
      <input
        type='text'
        name='roast'
        placeholder='Roast'
        value={roast}
        onChange={(e) => setRoast(e.target.value)} />
      <button type='submit'>Add Coffee</button>
    </form>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func.isRequired
};

export default NewCoffeeForm;