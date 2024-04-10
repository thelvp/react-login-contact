import React, { useState } from 'react';

function ContactForm() {
  const password = 'spongebob';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword === password;
    setAuthorized(auth)
  };

  const login = (
    <div>
      <form action="#" onSubmit={handleSubmit} className='form' >
        <input type="password" placeholder="password" />
        <input type="submit" />
      </form>
      <p id="hint">Hint: find the password <br/> in ContactForm.jsx 👀</p>
    </div>
  );

  const contactInfo = (
    <div className='contactInfo'>
      <ul>
        <li>
          name@example.com
        </li>
        <li>
          06-483927402
        </li>
      </ul>
      <a href="/"><button> Back </button></a>
    </div>
  );

  return (
      <div id="authorization" className='app-container'>
        { authorized ? <h1>Contact</h1> : <h1>Enter the password</h1>}
        { authorized ? contactInfo : login }
      </div>
  );
}

export default ContactForm;
