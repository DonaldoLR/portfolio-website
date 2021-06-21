import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Get in Touch</h2>
      <form>
        <label>
          Name
          <input type='text' />
        </label>
        <label>
          Email
          <input type='text' />
        </label>
        <label>
          Message
          <input type='text' />
        </label>
      </form>
    </div>
  );
};

export default Contact;
