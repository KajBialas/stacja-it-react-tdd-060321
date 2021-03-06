import React, { useState } from 'react';

function Input({initValue, handleSubmit}) {
  const [inputValue, setInputValue] = useState(initValue);

  const handleChange = (e) => setInputValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(inputValue);
  }

  return (
    <form data-testid="form" onSubmit={onSubmit}>
      <input data-testid="form-input"  value={inputValue} onChange={handleChange}/>
      <button data-testid="form-button" type="submit">SAVE</button>
    </form>
  )
}

export default Input;