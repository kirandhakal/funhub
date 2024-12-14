import React ,{useState} from 'react';
import './css/Cash.css';
function Transcationname(){
    const [displayValue ,setDisplayValue] =useState();
    const handleInputChange = (e) => {
        setDisplayValue(e.target.value);
      };
    return(
        <>
        <form action="" id="transactionForm">
        <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={displayValue}
                  onChange={handleInputChange}  // Bind input value to state
                  required
                />
        </form>
        </>
    );
}
export default Transcationname;