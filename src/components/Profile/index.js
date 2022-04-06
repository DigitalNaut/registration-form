import React from 'react'

import './Profile.css';

export default function Profile({ name, email }) {
  return (
    <div className='profileContainer'>
      <p>Name: {name}</p>
      <p>Email: {email} </p>
    </div>
  )
}
