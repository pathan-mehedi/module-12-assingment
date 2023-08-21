"use client"
import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setIsSubmitted(true);
  };

  return (
    <div className='container'>
      <div className='formSection'>
        <h2 className='formTitle'>Contact Us</h2>
        {isSubmitted ? (
          <p className='successMessage'>
            Thank you for contacting MP Blog! We will get back to you soon.
          </p>
        ) : (
          <form className='contactForm' onSubmit={handleSubmit}>
            <label className='formLabel'>Name</label>
            <input type='text' className='formInput' />

            <label className='formLabel'>Email</label>
            <input type='email' className='formInput' />

            <label className='formLabel'>Website</label>
            <input type='url' className='formInput' />

            <label className='formLabel' >Message</label>
            <textarea className='formTextarea formTextArea'></textarea>

            <button type='submit' className='submitButton'>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
