import React from 'react'

import './RegistrationForm.css'

export default function RegistrationForm() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError('');

    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setError('Passwords do not match');
      return;
    }

    console.log('Successfully submitted');
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(`confirmPassword: ${confirmPassword}`);

    setSuccess(true);
  }

  if (success)
    return <div className="registrationForm registrationForm__success">Registered successfully</div>

  return (
    <form className='registrationForm' onSubmit={handleSubmit}
    >
      {error && <div className='registrationForm__error'>{error}</div>}
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
      </label>
      <button type="submit" className='registrationForm__submit'>Submit</button>
    </form >
  )
};
