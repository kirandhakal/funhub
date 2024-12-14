import './css/Cash.css';
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Amounthandle from './Amounthandle';
import Transcationname from './TransitionName';
function Cash() {
  const [nameList, setNameList] = useState([]);  // Store names as an array
  const [displayValue, setDisplayValue] = useState('');
  const [Amount, setAmount]  = useState(); // Store input value as a string

 
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
      <div className="container">
        <div className="main">
          <header>
            <div>
              <h5>Total Balance</h5>
              <span id="balance">$0.00</span>
            </div>
            <div>
              <h5>Income</h5>
              <span id="income">$0.00</span>
            </div>
            <div>
              <h5>Expense</h5>
              <span id="expense">$0.00</span>
            </div>
          </header>

          <section>
            <h3>Transactions</h3>
            <ul id="transactionList">
              {nameList.map((name, index) => (
                <li key={index}>{name}</li>
              ))} 
               {/* {Amount.map((Amount, index) => (
                <li key={index}>{Amount}</li>
              ))} */}
            </ul>
            <div id="status"></div>
          </section>

          <section>
            <h3>Add Transaction</h3>

            <form id="transactionForm">
              <div>
                <label htmlFor="type">
                  <input type="checkbox" name="type" id="type" />
                  <div className="option">
                  <option value="Expense" id="Expense"><p1>Expense</p1></option>
                  <option value="Income" id="Income"><p1>Income</p1></option>
                    {/* <
                    <span><p2>Income</p2></span> */}
                  </div>
                </label>
              </div>
              <div>
              
              </div>
<Transcationname></Transcationname>
            
              <Amounthandle></Amounthandle>
             
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Cash;
