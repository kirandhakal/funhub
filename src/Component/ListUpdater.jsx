import React, { useState } from 'react';

const ListUpdater = () => {
  // State to hold the list of items
  const [itemList, setItemList] = useState([]);
  
  // State to hold the current input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle when the input value changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle when the button is clicked
  const handleAddItem = () => {
    // Only add the item if the input is not empty
    if (inputValue.trim() !== '') {
      setItemList((prevList) => [...prevList, inputValue]); // Add the input value to the list
      setInputValue(''); // Clear the input field
    } else {
      alert('Please enter a valid item!');
    }
  };

  return (
    <div>
      <h1>Update List with User Input</h1>
      
      {/* Input Field */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter an item" 
      />
      
      {/* Add Item Button */}
      <button onClick={handleAddItem}>Add Item</button>

      <h3>Updated List:</h3>
      
      {/* Displaying the List */}
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListUpdater;
