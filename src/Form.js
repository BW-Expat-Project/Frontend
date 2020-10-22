import React, { useState } from 'react';
import FormSignup from './FormSignup';
import './App.css'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
        </div>
          <FormSignup submitForm={submitForm} />
      </div>
    </>
  );
};

export default Form;