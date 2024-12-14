import React, { useState } from 'react';
import './css/Cash.css';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className=''>
      <h1>Select an Option</h1>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="Income" id="Income">Income</option>
        <option value="Expense" id='Expense'>Expense </option>
       
      </select>

      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
}

export default Dropdown;
