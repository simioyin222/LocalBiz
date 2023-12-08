import React, { useState } from 'react';

function NewCoffeeForm(props) {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState('');
  const [roast, setRoast] = useState('');

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({ name, origin, price, roast });
    setName('');
    setOrigin('');
    setPrice('');
    setRoast('');
  }

  return (
    <form onSubmit={handleNewCoffeeFormSubmission}>
      <input
        type='text'
        name='name'
        placeholder='Coffee Name'
        value={name}
        onChange={(e) => setName(e.target.value)} />
}