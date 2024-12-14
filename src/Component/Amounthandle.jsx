import React, { useState } from "react";


function Amounthandle() {
  const [Amount, setAmount] = useState(''); // Fix: add initial value for Amount

  const inputAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission (default behavior)
    
    if (displayValue.trim() !== '') {
      setNameList((prevList) => [...prevList, displayValue]);  // Add value to the list
      setDisplayValue(''); 
      // setAmount((prevList)=>[...prevList,Amount]); // Clear the input field after adding
    } else {
      alert("Please enter something!");
    }
  };

  return (
    <>
      <div>
        <form id="hi">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            id="amount"
            required
            value={Amount} // Fix: bind input value to state
            onChange={inputAmount} // Fix: move onChange to the input field
          />

          <div>
            <label htmlFor="date" id="date">Date</label>
            <input type="date" name="date" required />
          </div>

          <button id="submit" type="button" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Amounthandle;
